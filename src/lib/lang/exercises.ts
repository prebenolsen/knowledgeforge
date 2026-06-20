// ============================================================
// Language Learning — exercise generation (pure).
//
// Builds ready-to-render `Exercise`s from bundled content + the learner's
// profile, so authors don't hand-write every exercise. Distractors prefer words
// that share a tag with the target (plausible wrong answers), mirroring the
// Concepts activity's same-module distractor strategy.
// ============================================================

import { localized } from '@/i18n';
import { shuffle } from '@/lib/concepts';
import type {
  Exercise,
  ExerciseType,
  LanguageDefinition,
  LanguageProfile,
  Lesson,
  MatchingPair,
  MCOption,
  NativeLanguage,
  VocabWord
} from '@/types';
import { resolveVocab, sentenceById } from './registry';
import { selectDueWords, type MasteryMap } from './vocabulary';

const MATCHING_SIZE = 4;

function tr(word: VocabWord, native: NativeLanguage): string {
  return localized(word.translation, native);
}

// Three distractor words for `word`: prefer those sharing a tag, then any.
function pickDistractors(word: VocabWord, pool: VocabWord[]): VocabWord[] {
  const others = pool.filter((w) => w.id !== word.id);
  const sameTag = others.filter((w) => w.tags.some((t) => word.tags.includes(t)));
  const ordered = [...shuffle(sameTag), ...shuffle(others)];
  const out: VocabWord[] = [];
  const seen = new Set<string>();
  for (const w of ordered) {
    if (seen.has(w.id)) continue;
    seen.add(w.id);
    out.push(w);
    if (out.length === 3) break;
  }
  return out;
}

// ---- Single-exercise builders ------------------------------

export function flashcard(word: VocabWord, native: NativeLanguage): Exercise {
  return {
    type: 'flashcard',
    vocabId: word.id,
    front: word.term,
    back: tr(word, native),
    example: word.examples[0]?.text
  };
}

export function multipleChoice(word: VocabWord, pool: VocabWord[], native: NativeLanguage): Exercise {
  const options: MCOption[] = shuffle([
    { text: tr(word, native), correct: true },
    ...pickDistractors(word, pool).map((w) => ({ text: tr(w, native), correct: false }))
  ]);
  return { type: 'multiple-choice', vocabId: word.id, prompt: word.term, options };
}

export function typing(word: VocabWord, native: NativeLanguage): Exercise {
  // Prompt in the native language; the learner types the target-language term.
  return { type: 'typing', vocabId: word.id, prompt: tr(word, native), accept: [word.term] };
}

export function matching(words: VocabWord[], native: NativeLanguage): Exercise | null {
  const picked = shuffle(words).slice(0, MATCHING_SIZE);
  if (picked.length < 2) return null;
  const pairs: MatchingPair[] = picked.map((w) => ({
    vocabId: w.id,
    term: w.term,
    translation: tr(w, native)
  }));
  return { type: 'matching', pairs };
}

export function sentenceBuild(lang: LanguageDefinition, sentenceId: string, native: NativeLanguage): Exercise | null {
  const sentence = sentenceById(lang, sentenceId);
  if (!sentence) return null;
  // Bank = the sentence's components plus a couple of other components as noise.
  const distractors = shuffle(lang.components.filter((c) => !sentence.componentIds.includes(c.id))).slice(0, 2);
  const bank = shuffle([
    ...lang.components.filter((c) => sentence.componentIds.includes(c.id)),
    ...distractors
  ]);
  return {
    type: 'sentence-build',
    sentenceId,
    prompt: localized(sentence.translation, native),
    bank,
    answer: sentence.componentIds
  };
}

// ---- Lesson-level generation -------------------------------

/**
 * Generate a practice sequence for a lesson. Words are chosen with
 * personalization + spaced-repetition weighting (see selectDueWords); for each
 * word we emit the lesson's word-level exercise types, then any matching and
 * sentence-build exercises the lesson calls for.
 */
export function generateLessonExercises(
  lang: LanguageDefinition,
  lesson: Lesson,
  profile: LanguageProfile,
  mastery: MasteryMap
): Exercise[] {
  const lessonWords = resolveVocab(lang, lesson.vocabIds);
  if (lessonWords.length === 0 && lesson.sentenceIds.length === 0) return [];

  // Distractor pool = lesson words + the rest of the language's vocabulary.
  const pool = dedupe([...lessonWords, ...lang.vocabulary]);
  const ordered = selectDueWords(lessonWords, profile, mastery, lessonWords.length);

  const wordTypes = lesson.exerciseTypes.filter(
    (t): t is Exclude<ExerciseType, 'matching' | 'sentence-build' | 'scenario-choice'> =>
      t === 'flashcard' || t === 'multiple-choice' || t === 'typing'
  );

  const out: Exercise[] = [];
  for (const word of ordered) {
    for (const t of wordTypes) {
      if (t === 'flashcard') out.push(flashcard(word, profile.nativeLanguage));
      else if (t === 'multiple-choice') out.push(multipleChoice(word, pool, profile.nativeLanguage));
      else if (t === 'typing') out.push(typing(word, profile.nativeLanguage));
    }
  }

  if (lesson.exerciseTypes.includes('matching') && lessonWords.length >= 2) {
    const m = matching(lessonWords, profile.nativeLanguage);
    if (m) out.push(m);
  }

  if (lesson.exerciseTypes.includes('sentence-build')) {
    for (const id of lesson.sentenceIds) {
      const ex = sentenceBuild(lang, id, profile.nativeLanguage);
      if (ex) out.push(ex);
    }
  }

  return out;
}

function dedupe(words: VocabWord[]): VocabWord[] {
  const seen = new Set<string>();
  const out: VocabWord[] = [];
  for (const w of words) {
    if (seen.has(w.id)) continue;
    seen.add(w.id);
    out.push(w);
  }
  return out;
}
