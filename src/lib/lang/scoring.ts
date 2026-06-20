// ============================================================
// Language Learning — answer scoring & fuzzy typing tolerance (pure).
//
// Typed answers are forgiving by design (the airplane learner shouldn't be
// punished for a missing accent or a one-letter typo):
//   - accents/diacritics are stripped before comparison
//   - case and surrounding punctuation/whitespace are normalized
//   - a small Levenshtein distance is accepted (scales with answer length)
//
// So "quiero cafe" is accepted for "quiero café", and "gracis" for "gracias".
// ============================================================

/** Lowercase, strip accents, drop punctuation, collapse whitespace. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // combining diacritics
    .replace(/[¿?¡!.,;:'"()]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Classic Levenshtein edit distance. */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const curr = [i];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    prev = curr;
  }
  return prev[b.length];
}

// How many edits to tolerate for an answer of a given (normalized) length.
// Longer answers earn a little more slack; short ones must be near-exact.
function tolerance(len: number): number {
  return Math.max(1, Math.floor(len / 6));
}

export interface MatchResult {
  correct: boolean;
  partial: number; // 0–1 similarity to the closest accepted answer
}

/**
 * Check a typed answer against one or more accepted forms. Returns whether it
 * passes (exact after normalization, or within the edit-distance tolerance) plus
 * a 0–1 similarity for partial credit / feedback.
 */
export function fuzzyAccept(input: string, accepted: string[]): MatchResult {
  const got = normalize(input);
  if (!got) return { correct: false, partial: 0 };

  let best = 0;
  let pass = false;

  for (const target of accepted) {
    const want = normalize(target);
    if (got === want) return { correct: true, partial: 1 };
    const dist = levenshtein(got, want);
    const sim = want.length ? 1 - dist / Math.max(want.length, got.length) : 0;
    if (sim > best) best = sim;
    if (dist <= tolerance(want.length)) pass = true;
  }

  return { correct: pass, partial: Number(best.toFixed(2)) };
}
