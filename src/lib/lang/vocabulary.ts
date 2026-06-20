// ============================================================
// Language Learning — vocabulary selection & weighting (pure).
//
// Decides which words a learner should practise next by combining three signals:
//   1. Spaced repetition due-ness (SM-2 next_review in the past).
//   2. A mistake boost — words the learner gets wrong resurface more often.
//   3. Personalization relevance (see personalize.ts).
//
// `vocabWeight` is always strictly positive, so every word keeps a chance of
// being selected (nothing is permanently hidden).
// ============================================================

import { shuffle } from '@/lib/concepts';
import type { LanguageProfile, VocabMastery, VocabWord } from '@/types';
import { relevanceMultiplier } from './personalize';

export type MasteryMap = Record<string, VocabMastery>;

/**
 * Selection weight for a word. Higher = more likely to be practised.
 *
 *   base 1
 *   + 0.6 per recorded mistake          (wrong answers resurface)
 *   + 1.0 if the review is due now      (SM-2)
 *   + up to 0.8 for low confidence      (unseen/weak words)
 *   × personalization relevance         (0.7–1.6)
 */
export function vocabWeight(
  word: VocabWord,
  profile: LanguageProfile,
  mastery?: VocabMastery,
  now: Date = new Date()
): number {
  let w = 1;

  if (mastery) {
    w += mastery.mistakes * 0.6;
    w += (1 - clamp01(mastery.confidence)) * 0.8;
    if (mastery.nextReview && new Date(mastery.nextReview) <= now) w += 1;
  } else {
    // Never-seen words deserve a turn.
    w += 0.8;
  }

  return Math.max(0.05, w * relevanceMultiplier(word, profile));
}

/**
 * Pick up to `count` words from `pool`, biased by `vocabWeight` (weighted random
 * draw without replacement) so high-priority words usually — but not always —
 * come first. Returns fewer than `count` only if the pool is smaller.
 */
export function selectDueWords(
  pool: VocabWord[],
  profile: LanguageProfile,
  mastery: MasteryMap,
  count: number,
  now: Date = new Date()
): VocabWord[] {
  const remaining = [...pool];
  const out: VocabWord[] = [];

  while (out.length < count && remaining.length > 0) {
    const weights = remaining.map((w) => vocabWeight(w, profile, mastery[w.id], now));
    const total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    let idx = 0;
    for (; idx < remaining.length; idx++) {
      r -= weights[idx];
      if (r <= 0) break;
    }
    if (idx >= remaining.length) idx = remaining.length - 1;
    out.push(remaining.splice(idx, 1)[0]);
  }

  return out;
}

/**
 * Deterministic priority ordering (highest weight first). Useful for review
 * lists and for inspecting/verifying personalization without randomness.
 */
export function rankByPriority(
  pool: VocabWord[],
  profile: LanguageProfile,
  mastery: MasteryMap,
  now: Date = new Date()
): VocabWord[] {
  return [...pool].sort(
    (a, b) => vocabWeight(b, profile, mastery[b.id], now) - vocabWeight(a, profile, mastery[a.id], now)
  );
}

// Re-export shuffle for callers that build randomized pools.
export { shuffle };

function clamp01(n: number): number {
  return Math.min(1, Math.max(0, n));
}
