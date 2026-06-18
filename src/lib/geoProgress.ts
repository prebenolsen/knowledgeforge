// ============================================================
// Geography map game — Supabase persistence.
//
// Separate from questionLoader (the MCQ pipeline): the Atlas has
// its own geo_attempts (per-answer log) and geo_progress (per
// user + continent summary: best score + per-country tallies).
// ============================================================

import { supabase } from './supabase';

export interface GeoCountryStat {
  seen: number;
  correct: number;
}

export interface GeoProgress {
  continent: string;
  best_score: number;
  per_country_stats: Record<string, GeoCountryStat>;
}

// Log one answer and fold it into the per-country tallies. Mirrors the MCQ
// flow (recordAnswer): a per-attempt insert plus a summary upsert.
export async function recordGeoAttempt(params: {
  userId: string;
  continent: string;
  iso3: string;
  mode: 'explore' | 'quiz';
  isCorrect: boolean;
  hintsUsed: number;
}): Promise<void> {
  const { userId, continent, iso3, mode, isCorrect, hintsUsed } = params;

  await supabase.from('geo_attempts').insert({
    user_id: userId,
    continent,
    iso3,
    mode,
    is_correct: isCorrect,
    hints_used: hintsUsed
  });

  const { data: existing } = await supabase
    .from('geo_progress')
    .select('best_score, per_country_stats')
    .eq('user_id', userId)
    .eq('continent', continent)
    .maybeSingle();

  const stats: Record<string, GeoCountryStat> = {
    ...((existing?.per_country_stats as Record<string, GeoCountryStat>) ?? {})
  };
  const cur = stats[iso3] ?? { seen: 0, correct: 0 };
  stats[iso3] = { seen: cur.seen + 1, correct: cur.correct + (isCorrect ? 1 : 0) };

  // Only write per_country_stats — best_score is omitted so a concurrent
  // session-score write can't be clobbered (it's preserved on upsert-update,
  // and falls back to its column default on a first insert).
  await supabase.from('geo_progress').upsert(
    {
      user_id: userId,
      continent,
      per_country_stats: stats,
      updated_at: new Date().toISOString()
    },
    { onConflict: 'user_id,continent' }
  );
}

// Record a finished session's score, keeping the best seen for that continent.
export async function recordGeoSessionScore(params: {
  userId: string;
  continent: string;
  score: number;
}): Promise<void> {
  const { userId, continent, score } = params;

  const { data: existing } = await supabase
    .from('geo_progress')
    .select('best_score')
    .eq('user_id', userId)
    .eq('continent', continent)
    .maybeSingle();

  // Only write best_score — per_country_stats is omitted so a concurrent
  // attempt write can't be clobbered.
  await supabase.from('geo_progress').upsert(
    {
      user_id: userId,
      continent,
      best_score: Math.max(existing?.best_score ?? 0, score),
      updated_at: new Date().toISOString()
    },
    { onConflict: 'user_id,continent' }
  );
}

export async function fetchGeoProgress(userId: string): Promise<GeoProgress[]> {
  const { data, error } = await supabase
    .from('geo_progress')
    .select('continent, best_score, per_country_stats')
    .eq('user_id', userId);
  if (error) throw error;
  return (data ?? []) as GeoProgress[];
}
