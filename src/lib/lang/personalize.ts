// ============================================================
// Language Learning — personalization weighting (pure).
//
// Turns a learner's profile into a relevance *multiplier* for a word. This only
// re-orders/biases practice toward relevant vocabulary; it NEVER hides content.
// Every word stays reachable for every learner — a male user can still practise
// "falda", just with lower priority than "camisa".
// ============================================================

import type { LanguageProfile, VocabWord } from '@/types';

// Bounds keep weighting gentle: relevant words rise, less-relevant words fall,
// but nothing is dropped to (or near) zero.
const MIN_MULTIPLIER = 0.7;
const MAX_MULTIPLIER = 1.6;

/**
 * Relevance multiplier in [0.7, 1.6] for a word given a profile.
 *
 *  - gender affinity matching the profile      → boost; opposite → mild damp
 *  - interest tag intersection                 → boost
 *  - travel-goal intersection                  → boost
 */
export function relevanceMultiplier(word: VocabWord, profile: LanguageProfile): number {
  const rel = word.relevance;
  if (!rel) return 1;

  let m = 1;

  if (rel.genderAffinity && rel.genderAffinity !== 'neutral' && profile.gender !== 'unspecified') {
    m *= rel.genderAffinity === profile.gender ? 1.5 : 0.8;
  }

  if (rel.interests && rel.interests.some((i) => profile.interests.includes(i))) {
    m *= 1.2;
  }

  if (rel.travelGoals && rel.travelGoals.some((g) => profile.travelGoals.includes(g))) {
    m *= 1.2;
  }

  return Math.min(MAX_MULTIPLIER, Math.max(MIN_MULTIPLIER, m));
}
