// ============================================================
// Content & progress data access
// All Supabase reads/writes for questions, attempts, progress,
// and the review schedule live here.
// ============================================================

import { supabase } from './supabase';
import { sm2, gradeAnswer, initialSM2State } from './sm2';
import {
  masteryScore,
  emptyDifficultyStats,
  type DifficultyStats
} from './mastery';
import type {
  Category,
  Subcategory,
  Question,
  Difficulty,
  ReviewSchedule
} from '@/types';
import { DIFFICULTIES } from '@/types';

// ---- Content reads ----------------------------------------

export async function fetchCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error) throw error;
  return (data ?? []) as Category[];
}

export async function fetchSubcategories(categoryId: string): Promise<Subcategory[]> {
  const { data, error } = await supabase
    .from('subcategories')
    .select('*')
    .eq('category_id', categoryId);
  if (error) throw error;
  return (data ?? []) as Subcategory[];
}

export async function countQuestions(subcategoryId: string): Promise<number> {
  const { count, error } = await supabase
    .from('questions')
    .select('id', { count: 'exact', head: true })
    .eq('subcategory_id', subcategoryId)
    .eq('active', true);
  if (error) throw error;
  return count ?? 0;
}

interface QuestionQuery {
  subcategoryId?: string;
  difficulties?: Difficulty[];
  limit?: number;
}

export async function fetchQuestions(q: QuestionQuery): Promise<Question[]> {
  let query = supabase.from('questions').select('*').eq('active', true);
  if (q.subcategoryId) query = query.eq('subcategory_id', q.subcategoryId);
  if (q.difficulties && q.difficulties.length)
    query = query.in('difficulty', q.difficulties);
  const { data, error } = await query.limit(q.limit ?? 20);
  if (error) throw error;
  // Shuffle client-side for variety.
  return shuffle((data ?? []) as Question[]);
}

// ---- Placement test ----------------------------------------

// 7 easy, 7 medium, 6 hard across all categories.
export async function fetchPlacementQuestions(): Promise<Question[]> {
  const plan: Array<[Difficulty, number]> = [
    ['easy', 7],
    ['medium', 7],
    ['hard', 6]
  ];
  const batches = await Promise.all(
    plan.map(async ([difficulty, n]) => {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('active', true)
        .eq('difficulty', difficulty)
        .limit(n * 4); // overfetch then sample
      if (error) throw error;
      return shuffle((data ?? []) as Question[]).slice(0, n);
    })
  );
  return batches.flat();
}

// ---- Review queue ------------------------------------------

export async function fetchDueReviews(userId: string, limit = 20): Promise<Question[]> {
  const nowIso = new Date().toISOString();
  const { data: due, error } = await supabase
    .from('review_schedule')
    .select('question_id')
    .eq('user_id', userId)
    .lte('next_review', nowIso)
    .order('next_review', { ascending: true })
    .limit(limit);
  if (error) throw error;
  const ids = (due ?? []).map((r) => r.question_id);
  if (!ids.length) return [];
  const { data: questions, error: qErr } = await supabase
    .from('questions')
    .select('*')
    .in('id', ids);
  if (qErr) throw qErr;
  return (questions ?? []) as Question[];
}

export async function countDueReviews(userId: string): Promise<number> {
  const nowIso = new Date().toISOString();
  const { count, error } = await supabase
    .from('review_schedule')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId)
    .lte('next_review', nowIso);
  if (error) throw error;
  return count ?? 0;
}

// ---- Recording an answer -----------------------------------
//
// One answer triggers three writes:
//   1. log the attempt
//   2. update the SM-2 review schedule for that question
//   3. recompute subcategory progress + mastery
// ============================================================

export async function recordAnswer(params: {
  userId: string;
  question: Question;
  selectedIndex: number;
  timeMs: number;
}): Promise<void> {
  const { userId, question, selectedIndex, timeMs } = params;
  const isCorrect = selectedIndex === question.correct_index;
  const difficulty = question.difficulty;

  // 1. Log the attempt.
  await supabase.from('question_attempts').insert({
    user_id: userId,
    question_id: question.id,
    is_correct: isCorrect,
    selected_index: selectedIndex,
    time_ms: timeMs,
    difficulty
  });

  // 2. SM-2 schedule update.
  const quality = gradeAnswer({ isCorrect, difficulty, timeMs });
  const { data: existing } = await supabase
    .from('review_schedule')
    .select('*')
    .eq('user_id', userId)
    .eq('question_id', question.id)
    .maybeSingle();

  const prevState = existing
    ? {
        repetition: (existing as ReviewSchedule).repetition,
        easiness: (existing as ReviewSchedule).easiness,
        interval_days: (existing as ReviewSchedule).interval_days
      }
    : initialSM2State;

  const next = sm2(prevState, quality);

  await supabase.from('review_schedule').upsert(
    {
      user_id: userId,
      question_id: question.id,
      repetition: next.repetition,
      easiness: next.easiness,
      interval_days: next.interval_days,
      next_review: next.next_review,
      last_review: new Date().toISOString()
    },
    { onConflict: 'user_id,question_id' }
  );

  // 3. Recompute subcategory progress.
  await updateProgress({
    userId,
    subcategoryId: question.subcategory_id,
    difficulty,
    isCorrect
  });
}

async function updateProgress(params: {
  userId: string;
  subcategoryId: string;
  difficulty: Difficulty;
  isCorrect: boolean;
}): Promise<void> {
  const { userId, subcategoryId, difficulty, isCorrect } = params;

  const { data: existing } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('subcategory_id', subcategoryId)
    .maybeSingle();

  const stats: DifficultyStats = existing?.difficulty_stats
    ? mergeStats(existing.difficulty_stats as Partial<DifficultyStats>)
    : emptyDifficultyStats();

  stats[difficulty].seen += 1;
  if (isCorrect) stats[difficulty].correct += 1;

  const questionsSeen = (existing?.questions_seen ?? 0) + 1;
  const correctCount = (existing?.correct_count ?? 0) + (isCorrect ? 1 : 0);
  const mastery = masteryScore(stats);

  await supabase.from('user_progress').upsert(
    {
      user_id: userId,
      subcategory_id: subcategoryId,
      mastery_score: mastery,
      questions_seen: questionsSeen,
      correct_count: correctCount,
      difficulty_stats: stats,
      updated_at: new Date().toISOString()
    },
    { onConflict: 'user_id,subcategory_id' }
  );
}

function mergeStats(partial: Partial<DifficultyStats>): DifficultyStats {
  const base = emptyDifficultyStats();
  DIFFICULTIES.forEach((d) => {
    if (partial[d]) base[d] = { seen: partial[d]!.seen ?? 0, correct: partial[d]!.correct ?? 0 };
  });
  return base;
}

// ---- utils -------------------------------------------------

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
