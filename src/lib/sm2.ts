// ============================================================
// SM-2 spaced repetition algorithm
// Reference: SuperMemo 2 (Piotr Wozniak, 1990)
// ============================================================

import type { Difficulty, Quality, SM2State, SM2Result } from '@/types';
import { DIFFICULTY_RANK } from '@/types';

const DEFAULT_EASINESS = 2.5;
const MIN_EASINESS = 1.3;

export const initialSM2State: SM2State = {
  repetition: 0,
  easiness: DEFAULT_EASINESS,
  interval_days: 0
};

/**
 * Run one SM-2 update.
 *
 * @param state   current scheduling state for the card
 * @param quality 0–5 grade of the recall attempt
 * @param now     reference date (defaults to today) — injectable for tests
 */
export function sm2(state: SM2State, quality: Quality, now: Date = new Date()): SM2Result {
  let { repetition, easiness, interval_days } = state;

  if (quality < 3) {
    // Failed recall — reset the repetition streak, see it again tomorrow.
    repetition = 0;
    interval_days = 1;
  } else {
    if (repetition === 0) {
      interval_days = 1;
    } else if (repetition === 1) {
      interval_days = 6;
    } else {
      interval_days = Math.round(interval_days * easiness);
    }
    repetition += 1;
  }

  // Update the easiness factor regardless of pass/fail.
  easiness = easiness + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easiness < MIN_EASINESS) easiness = MIN_EASINESS;

  const next = new Date(now);
  next.setDate(next.getDate() + interval_days);
  // Normalize to date only (midnight) so "due today" comparisons are clean.
  next.setHours(0, 0, 0, 0);

  return {
    repetition,
    easiness: Number(easiness.toFixed(4)),
    interval_days,
    next_review: next.toISOString()
  };
}

/**
 * Map an in-app answer to an SM-2 quality grade.
 *
 * The app doesn't ask users to self-rate (too much friction), so we infer
 * quality from correctness, the question's difficulty, and answer speed.
 *
 *  Wrong answer                -> 1  (repeat soon)
 *  Correct but slow / hard     -> 3  (repeat sooner)
 *  Correct and quick / easy    -> 5  (repeat later)
 */
export function gradeAnswer(params: {
  isCorrect: boolean;
  difficulty: Difficulty;
  timeMs: number;
}): Quality {
  const { isCorrect, difficulty, timeMs } = params;

  if (!isCorrect) return 1;

  // Rough "thinking time" budget scales with difficulty.
  // easy -> 8s expected, medium -> 12s, hard -> 16s.
  const expectedMs = (4 + DIFFICULTY_RANK[difficulty] * 4) * 1000;
  const wasQuick = timeMs <= expectedMs;
  const wasHard = difficulty === 'hard';

  if (wasQuick && !wasHard) return 5; // confident & easy
  if (wasQuick && wasHard) return 4; // confident on a hard one
  return 3; // correct but laboured -> revisit sooner
}
