// ============================================================
// Timeline game — Supabase persistence.
//
// Like the Country Atlas, the Timeline is a standalone activity with its own
// tables: timeline_attempts (per-answer log) and timeline_progress (per user +
// scope summary: best score + per-event tallies). Mirrors lib/geoProgress.ts.
// ============================================================

import type { Difficulty } from '@/types';
import { supabase } from './supabase';

export interface TimelineEventStat {
  seen: number;
  correct: number;
}

export interface TimelineProgress {
  scope: string;
  best_score: number;
  per_event_stats: Record<string, TimelineEventStat>;
}

// Log one answer and fold it into the per-event tallies. `isCorrect` means the
// answer scored full marks (an exact hit); partial credit still counts as seen.
export async function recordTimelineAttempt(params: {
  userId: string;
  scope: string;
  eventId: string;
  difficulty: Difficulty;
  score: number;
  isCorrect: boolean;
  hintsUsed: number;
}): Promise<void> {
  const { userId, scope, eventId, difficulty, score, isCorrect, hintsUsed } = params;

  await supabase.from('knowledgeforge_timeline_attempts').insert({
    user_id: userId,
    scope,
    event_id: eventId,
    difficulty,
    score,
    is_correct: isCorrect,
    hints_used: hintsUsed
  });

  const { data: existing } = await supabase
    .from('knowledgeforge_timeline_progress')
    .select('per_event_stats')
    .eq('user_id', userId)
    .eq('scope', scope)
    .maybeSingle();

  const stats: Record<string, TimelineEventStat> = {
    ...((existing?.per_event_stats as Record<string, TimelineEventStat>) ?? {})
  };
  const cur = stats[eventId] ?? { seen: 0, correct: 0 };
  stats[eventId] = { seen: cur.seen + 1, correct: cur.correct + (isCorrect ? 1 : 0) };

  // Only write per_event_stats — best_score is omitted so a concurrent
  // session-score write can't be clobbered (preserved on upsert-update).
  await supabase.from('knowledgeforge_timeline_progress').upsert(
    {
      user_id: userId,
      scope,
      per_event_stats: stats,
      updated_at: new Date().toISOString()
    },
    { onConflict: 'user_id,scope' }
  );
}

// Record a finished session's score, keeping the best seen for that scope.
export async function recordTimelineSessionScore(params: {
  userId: string;
  scope: string;
  score: number;
}): Promise<void> {
  const { userId, scope, score } = params;

  const { data: existing } = await supabase
    .from('knowledgeforge_timeline_progress')
    .select('best_score')
    .eq('user_id', userId)
    .eq('scope', scope)
    .maybeSingle();

  await supabase.from('knowledgeforge_timeline_progress').upsert(
    {
      user_id: userId,
      scope,
      best_score: Math.max(existing?.best_score ?? 0, score),
      updated_at: new Date().toISOString()
    },
    { onConflict: 'user_id,scope' }
  );
}

export async function fetchTimelineProgress(userId: string): Promise<TimelineProgress[]> {
  const { data, error } = await supabase
    .from('knowledgeforge_timeline_progress')
    .select('scope, best_score, per_event_stats')
    .eq('user_id', userId);
  if (error) throw error;
  return (data ?? []) as TimelineProgress[];
}
