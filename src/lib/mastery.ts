// ============================================================
// Mastery scoring
//
// Core principle from the spec:
//   "High easy score does NOT equal full mastery."
//
// A user who only ever answers difficulty-1 questions can never reach
// full mastery, no matter how accurate they are — because the harder
// difficulty bands carry most of the weight and remain unproven.
// ============================================================

import type { Difficulty } from '@/types';

// Weight each difficulty band contributes to the mastery ceiling.
// Sums to 1.0. Easy bands are deliberately capped low.
export const DIFFICULTY_WEIGHTS: Record<Difficulty, number> = {
  1: 0.1,
  2: 0.15,
  3: 0.25,
  4: 0.25,
  5: 0.25
};

export interface DifficultyStat {
  seen: number;
  correct: number;
}

export type DifficultyStats = Record<Difficulty, DifficultyStat>;

export function emptyDifficultyStats(): DifficultyStats {
  return {
    1: { seen: 0, correct: 0 },
    2: { seen: 0, correct: 0 },
    3: { seen: 0, correct: 0 },
    4: { seen: 0, correct: 0 },
    5: { seen: 0, correct: 0 }
  };
}

/**
 * Accuracy within a single difficulty band (0–1). Unseen band -> 0.
 */
export function accuracyAt(stats: DifficultyStats, d: Difficulty): number {
  const band = stats[d];
  if (band.seen === 0) return 0;
  return band.correct / band.seen;
}

/**
 * Weighted mastery score (0–1).
 *
 * For each difficulty band we multiply its accuracy by its weight, then
 * sum. Because an unseen band scores 0 accuracy, never-attempted hard
 * questions drag the ceiling down — exactly the "surface knowledge" guard.
 *
 * Example: perfect on difficulty 1 only, nothing else attempted:
 *   0.1*1 + 0.15*0 + 0.25*0 + 0.25*0 + 0.25*0 = 0.10  -> 10% mastery.
 */
export function masteryScore(stats: DifficultyStats): number {
  let score = 0;
  (Object.keys(DIFFICULTY_WEIGHTS) as unknown as Difficulty[]).forEach((d) => {
    const diff = Number(d) as Difficulty;
    score += DIFFICULTY_WEIGHTS[diff] * accuracyAt(stats, diff);
  });
  return Number(score.toFixed(4));
}

/**
 * Classify a learner's knowledge shape for a topic.
 * Returns a key the i18n layer turns into a localized label.
 */
export type KnowledgeShape = 'untested' | 'surface' | 'developing' | 'solid' | 'mastered';

export function knowledgeShape(stats: DifficultyStats): KnowledgeShape {
  const totalSeen = (Object.values(stats) as DifficultyStat[]).reduce((s, b) => s + b.seen, 0);
  if (totalSeen === 0) return 'untested';

  const easyAcc = (accuracyAt(stats, 1) + accuracyAt(stats, 2)) / 2;
  const hardSeen = stats[4].seen + stats[5].seen;
  const hardAcc = hardSeen === 0 ? 0 : (stats[4].correct + stats[5].correct) / hardSeen;
  const score = masteryScore(stats);

  // Strong on easy but hard bands untested or weak -> surface knowledge.
  if (easyAcc >= 0.7 && hardSeen === 0) return 'surface';
  if (easyAcc >= 0.7 && hardAcc < 0.4) return 'surface';

  if (score >= 0.85) return 'mastered';
  if (score >= 0.6) return 'solid';
  return 'developing';
}
