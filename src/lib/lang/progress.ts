// ============================================================
// Language Learning — Supabase persistence.
//
// A standalone activity with its own per-user, per-language tables:
//   - language_profiles      (personalization: native lang, gender, interests…)
//   - language_vocab_mastery (per-word SM-2 + seen/correct/mistakes/confidence)
//   - language_progress      (per-module mastery summary)
//   - language_attempts      (append-only exercise log)
//
// Every write is wrapped so a network failure degrades gracefully — the bundled
// content stays fully playable offline; progress simply isn't saved. Mirrors the
// record flow in lib/conceptsProgress.ts / lib/questionLoader.ts.
// ============================================================

import { sm2, gradeAnswer, initialSM2State } from '@/lib/sm2';
import type {
  CEFRLevel,
  Difficulty,
  ExerciseType,
  LanguageCode,
  LanguageProfile,
  LangModuleProgress,
  NativeLanguage,
  ProfileGender,
  VocabMastery
} from '@/types';
import { supabase } from '../supabase';
import type { MasteryMap } from './vocabulary';

// CEFR is finer-grained than the SM-2 grader's three bands; collapse it.
export function cefrToDifficulty(level: CEFRLevel): Difficulty {
  if (level === 'A1' || level === 'A2') return 'easy';
  if (level === 'B1' || level === 'B2') return 'medium';
  return 'hard';
}

// ---- Profile ----------------------------------------------

export async function fetchLanguageProfile(
  userId: string,
  language: LanguageCode
): Promise<LanguageProfile | null> {
  try {
    const { data } = await supabase
      .from('knowledgeforge_language_profiles')
      .select('language, native_language, gender, interests, travel_goals, level')
      .eq('user_id', userId)
      .eq('language', language)
      .maybeSingle();
    if (!data) return null;
    return {
      language: data.language as LanguageCode,
      nativeLanguage: data.native_language as NativeLanguage,
      gender: data.gender as ProfileGender,
      interests: (data.interests as string[]) ?? [],
      travelGoals: (data.travel_goals as string[]) ?? [],
      level: data.level as CEFRLevel
    };
  } catch {
    return null;
  }
}

export async function saveLanguageProfile(userId: string, profile: LanguageProfile): Promise<void> {
  try {
    await supabase.from('knowledgeforge_language_profiles').upsert(
      {
        user_id: userId,
        language: profile.language,
        native_language: profile.nativeLanguage,
        gender: profile.gender,
        interests: profile.interests,
        travel_goals: profile.travelGoals,
        level: profile.level,
        updated_at: new Date().toISOString()
      },
      { onConflict: 'user_id,language' }
    );
  } catch {
    /* offline — keep going */
  }
}

// ---- Vocabulary mastery -----------------------------------

export async function fetchVocabMastery(userId: string, language: LanguageCode): Promise<MasteryMap> {
  try {
    const { data } = await supabase
      .from('knowledgeforge_language_vocab_mastery')
      .select('vocab_id, seen_count, correct_count, mistakes, confidence, repetition, easiness, interval_days, next_review')
      .eq('user_id', userId)
      .eq('language', language);
    const map: MasteryMap = {};
    for (const r of data ?? []) {
      map[r.vocab_id as string] = {
        vocabId: r.vocab_id as string,
        seenCount: r.seen_count as number,
        correctCount: r.correct_count as number,
        mistakes: r.mistakes as number,
        confidence: r.confidence as number,
        sm2: {
          repetition: r.repetition as number,
          easiness: r.easiness as number,
          interval_days: r.interval_days as number
        },
        nextReview: r.next_review as string
      };
    }
    return map;
  } catch {
    return {};
  }
}

/**
 * Fold one exercise result for a word into its mastery row: update tallies, run
 * SM-2 (wrong answers come back tomorrow), and recompute confidence. Also logs
 * the attempt. Returns the new mastery so the in-memory map can update without a
 * refetch.
 */
export async function recordVocabResult(params: {
  userId: string;
  language: LanguageCode;
  vocabId: string;
  cefr: CEFRLevel;
  exerciseType: ExerciseType;
  isCorrect: boolean;
  timeMs: number;
  prev?: VocabMastery;
}): Promise<VocabMastery> {
  const { userId, language, vocabId, cefr, exerciseType, isCorrect, timeMs, prev } = params;

  const base: VocabMastery =
    prev ?? {
      vocabId,
      seenCount: 0,
      correctCount: 0,
      mistakes: 0,
      confidence: 0,
      sm2: { ...initialSM2State },
      nextReview: new Date().toISOString()
    };

  const quality = gradeAnswer({ isCorrect, difficulty: cefrToDifficulty(cefr), timeMs });
  const next = sm2(base.sm2, quality);

  const seenCount = base.seenCount + 1;
  const correctCount = base.correctCount + (isCorrect ? 1 : 0);
  const mistakes = base.mistakes + (isCorrect ? 0 : 1);
  const confidence = Number((correctCount / seenCount).toFixed(3));

  const updated: VocabMastery = {
    vocabId,
    seenCount,
    correctCount,
    mistakes,
    confidence,
    sm2: { repetition: next.repetition, easiness: next.easiness, interval_days: next.interval_days },
    nextReview: next.next_review
  };

  try {
    await supabase.from('knowledgeforge_language_attempts').insert({
      user_id: userId,
      language,
      exercise_type: exerciseType,
      vocab_id: vocabId,
      is_correct: isCorrect,
      time_ms: timeMs
    });
    await supabase.from('knowledgeforge_language_vocab_mastery').upsert(
      {
        user_id: userId,
        language,
        vocab_id: vocabId,
        seen_count: seenCount,
        correct_count: correctCount,
        mistakes,
        confidence,
        repetition: next.repetition,
        easiness: next.easiness,
        interval_days: next.interval_days,
        next_review: next.next_review
      },
      { onConflict: 'user_id,language,vocab_id' }
    );
  } catch {
    /* offline — return the computed mastery anyway */
  }

  return updated;
}

// ---- Module progress --------------------------------------

export async function fetchModuleProgress(
  userId: string,
  language: LanguageCode
): Promise<LangModuleProgress[]> {
  try {
    const { data } = await supabase
      .from('knowledgeforge_language_progress')
      .select('module_id, mastery, lessons_done, updated_at')
      .eq('user_id', userId)
      .eq('language', language);
    return (data ?? []).map((r) => ({
      moduleId: r.module_id as string,
      mastery: r.mastery as number,
      lessonsDone: r.lessons_done as number,
      updatedAt: r.updated_at as string
    }));
  } catch {
    return [];
  }
}

/** Record that a lesson finished, nudging the module's mastery toward `score`. */
export async function recordLessonComplete(params: {
  userId: string;
  language: LanguageCode;
  moduleId: string;
  score: number; // 0–1 accuracy for this lesson
}): Promise<void> {
  const { userId, language, moduleId, score } = params;
  try {
    const { data: existing } = await supabase
      .from('knowledgeforge_language_progress')
      .select('mastery, lessons_done')
      .eq('user_id', userId)
      .eq('language', language)
      .eq('module_id', moduleId)
      .maybeSingle();

    const prevMastery = (existing?.mastery as number) ?? 0;
    const lessonsDone = ((existing?.lessons_done as number) ?? 0) + 1;
    // Exponential moving average so mastery tracks recent performance.
    const mastery = Number((prevMastery * 0.6 + score * 0.4).toFixed(3));

    await supabase.from('knowledgeforge_language_progress').upsert(
      {
        user_id: userId,
        language,
        module_id: moduleId,
        mastery,
        lessons_done: lessonsDone,
        updated_at: new Date().toISOString()
      },
      { onConflict: 'user_id,language,module_id' }
    );
  } catch {
    /* offline */
  }
}
