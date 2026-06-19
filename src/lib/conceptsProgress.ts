// ============================================================
// Mental Models & Paradoxes — Supabase persistence.
//
// Like the Timeline and Atlas, this is a standalone activity with its own tables:
// concept_attempts (per-answer log) and concept_progress (per user + module
// summary: best score + per-concept tallies + how often the Explain view was
// opened). Mirrors lib/timelineProgress.ts.
// ============================================================

import type { Difficulty } from '@/types';
import { supabase } from './supabase';

export interface ConceptStat {
  seen: number;
  correct: number;
  explained: number; // times the Explain view was opened for this concept
}

export interface ConceptProgress {
  module: string;
  best_score: number;
  per_concept_stats: Record<string, ConceptStat>;
}

// Log one answer and fold it into the per-concept tallies. `explained` records
// whether the learner opened the Explain view for this concept — the activity's
// goal is understanding, so we track engagement with explanations explicitly.
export async function recordConceptAttempt(params: {
  userId: string;
  module: string;
  conceptId: string;
  difficulty: Difficulty;
  isCorrect: boolean;
  explained: boolean;
}): Promise<void> {
  const { userId, module, conceptId, difficulty, isCorrect, explained } = params;

  await supabase.from('concept_attempts').insert({
    user_id: userId,
    module,
    concept_id: conceptId,
    difficulty,
    is_correct: isCorrect,
    explained
  });

  const { data: existing } = await supabase
    .from('concept_progress')
    .select('per_concept_stats')
    .eq('user_id', userId)
    .eq('module', module)
    .maybeSingle();

  const stats: Record<string, ConceptStat> = {
    ...((existing?.per_concept_stats as Record<string, ConceptStat>) ?? {})
  };
  const cur = stats[conceptId] ?? { seen: 0, correct: 0, explained: 0 };
  stats[conceptId] = {
    seen: cur.seen + 1,
    correct: cur.correct + (isCorrect ? 1 : 0),
    explained: cur.explained + (explained ? 1 : 0)
  };

  // Only write per_concept_stats — best_score is omitted so a concurrent
  // session-score write can't be clobbered (preserved on upsert-update).
  await supabase.from('concept_progress').upsert(
    {
      user_id: userId,
      module,
      per_concept_stats: stats,
      updated_at: new Date().toISOString()
    },
    { onConflict: 'user_id,module' }
  );
}

// Record a finished session's score, keeping the best seen for that module.
export async function recordConceptSessionScore(params: {
  userId: string;
  module: string;
  score: number;
}): Promise<void> {
  const { userId, module, score } = params;

  const { data: existing } = await supabase
    .from('concept_progress')
    .select('best_score')
    .eq('user_id', userId)
    .eq('module', module)
    .maybeSingle();

  await supabase.from('concept_progress').upsert(
    {
      user_id: userId,
      module,
      best_score: Math.max(existing?.best_score ?? 0, score),
      updated_at: new Date().toISOString()
    },
    { onConflict: 'user_id,module' }
  );
}

export async function fetchConceptProgress(userId: string): Promise<ConceptProgress[]> {
  const { data, error } = await supabase
    .from('concept_progress')
    .select('module, best_score, per_concept_stats')
    .eq('user_id', userId);
  if (error) throw error;
  return (data ?? []) as ConceptProgress[];
}
