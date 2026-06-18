// ============================================================
// Timeline game — pure logic (no React, no network).
//
// Selectable timelines (period + regional scopes), event filtering,
// intelligent distractor / hint generation, BCE/CE year formatting, and the
// per-difficulty scoring tiers. Mirrors the structure of lib/geo.ts so the two
// learning games stay consistent.
// ============================================================

import { TIMELINE_EVENTS } from '@/content/timeline/events';
import { currentLocale, localized } from '@/i18n';
import type {
  Difficulty,
  Localized,
  Locale,
  TimelineEasyVariant,
  TimelineEvent,
  TimelineRegionTag
} from '@/types';

export type { TimelineEvent };

export const TIMELINE_EVENTS_ALL = TIMELINE_EVENTS;

// ---- Scopes (selectable timelines) ------------------------

export type ScopeKind = 'period' | 'region';

export interface TimelineScope {
  id: string;
  name: Localized;
  emoji: string;
  kind: ScopeKind;
  // Period scopes filter on year (inclusive). Negative = BCE.
  range?: [number, number];
  // Region scopes filter on an event's `regions` tag.
  region?: TimelineRegionTag;
}

// Chronological periods. Ranges overlap intentionally — an event can belong to
// more than one. `range` is [minYear, maxYear]; null bounds mean unbounded.
export const PERIOD_SCOPES: TimelineScope[] = [
  { id: 'ancient-world', name: { en: 'Ancient World', no: 'Oldtiden' }, emoji: '🏺', kind: 'period', range: [-3000, 500] },
  { id: 'middle-ages', name: { en: 'Middle Ages', no: 'Middelalderen' }, emoji: '🏰', kind: 'period', range: [500, 1500] },
  { id: 'renaissance-exploration', name: { en: 'Renaissance & Exploration', no: 'Renessanse og oppdagelser' }, emoji: '⛵', kind: 'period', range: [1400, 1800] },
  { id: 'revolutions', name: { en: 'Revolutions', no: 'Revolusjonene' }, emoji: '⚔️', kind: 'period', range: [1700, 1900] },
  { id: 'industrial-age', name: { en: 'Industrial Age', no: 'Industrialderen' }, emoji: '⚙️', kind: 'period', range: [1750, 1914] },
  { id: 'wwi-era', name: { en: 'World War I Era', no: 'Første verdenskrigs tid' }, emoji: '🎖️', kind: 'period', range: [1870, 1925] },
  { id: 'wwii-era', name: { en: 'World War II Era', no: 'Andre verdenskrigs tid' }, emoji: '🛩️', kind: 'period', range: [1918, 1950] },
  { id: 'cold-war', name: { en: 'Cold War', no: 'Den kalde krigen' }, emoji: '☢️', kind: 'period', range: [1945, 1991] },
  { id: 'modern-world', name: { en: 'Modern World', no: 'Den moderne verden' }, emoji: '🌐', kind: 'period', range: [1991, 2100] },
  { id: 'all-history', name: { en: 'All History', no: 'Hele historien' }, emoji: '🌍', kind: 'period' }
];

// Regional + thematic timelines.
export const REGION_SCOPES: TimelineScope[] = [
  { id: 'world-history', name: { en: 'World History', no: 'Verdenshistorie' }, emoji: '🌍', kind: 'region', region: 'world' },
  { id: 'european-history', name: { en: 'European History', no: 'Europeisk historie' }, emoji: '🇪🇺', kind: 'region', region: 'europe' },
  { id: 'american-history', name: { en: 'American History', no: 'Amerikansk historie' }, emoji: '🦅', kind: 'region', region: 'americas' },
  { id: 'asian-history', name: { en: 'Asian History', no: 'Asiatisk historie' }, emoji: '🐉', kind: 'region', region: 'asia' },
  { id: 'african-history', name: { en: 'African History', no: 'Afrikansk historie' }, emoji: '🦁', kind: 'region', region: 'africa' },
  { id: 'middle-eastern-history', name: { en: 'Middle Eastern History', no: 'Midtøstens historie' }, emoji: '🕌', kind: 'region', region: 'middle-east' },
  { id: 'scientific-discoveries', name: { en: 'Scientific Discoveries', no: 'Vitenskapelige oppdagelser' }, emoji: '🔬', kind: 'region', region: 'science' },
  { id: 'military-history', name: { en: 'Military History', no: 'Militærhistorie' }, emoji: '🛡️', kind: 'region', region: 'military' }
];

export const ALL_SCOPES: TimelineScope[] = [...PERIOD_SCOPES, ...REGION_SCOPES];

export function scopeById(id: string): TimelineScope | undefined {
  return ALL_SCOPES.find((s) => s.id === id);
}

// Events that belong to a given scope.
export function eventsInScope(scope: TimelineScope): TimelineEvent[] {
  if (scope.kind === 'region' && scope.region) {
    return TIMELINE_EVENTS.filter((e) => e.regions.includes(scope.region!));
  }
  if (scope.range) {
    const [min, max] = scope.range;
    // An event matches if its span overlaps the period window.
    return TIMELINE_EVENTS.filter((e) => {
      const lo = e.startYear ?? e.year;
      const hi = e.endYear ?? e.year;
      return hi >= min && lo <= max;
    });
  }
  // All History.
  return [...TIMELINE_EVENTS];
}

export function countByScope(): Record<string, number> {
  const out: Record<string, number> = {};
  for (const s of ALL_SCOPES) out[s.id] = eventsInScope(s).length;
  return out;
}

// The visible [min, max] year window to render for a scope's timeline. Derived
// from the scope range, or the actual event spread for region / all scopes.
export function scopeBounds(scope: TimelineScope): [number, number] {
  if (scope.range) return scope.range;
  const events = eventsInScope(scope);
  if (events.length === 0) return [-3000, 2025];
  let lo = Infinity;
  let hi = -Infinity;
  for (const e of events) {
    lo = Math.min(lo, e.startYear ?? e.year);
    hi = Math.max(hi, e.endYear ?? e.year);
  }
  // Pad a little so end markers aren't flush against the edge.
  const pad = Math.max(20, Math.round((hi - lo) * 0.05));
  return [lo - pad, hi + pad];
}

// ---- Display ----------------------------------------------

export function eventTitle(e: TimelineEvent, locale: Locale = currentLocale()): string {
  return localized(e.title, locale);
}

// Format a single year as "776 BCE" / "1789" (locale-aware suffix).
export function formatYear(year: number, locale: Locale = currentLocale()): string {
  const bce = locale === 'no' ? 'f.Kr.' : 'BCE';
  if (year < 0) return `${Math.abs(year)} ${bce}`;
  return String(year);
}

// Format an event's date, showing a range for multi-year events.
export function formatEventDate(e: TimelineEvent, locale: Locale = currentLocale()): string {
  if (e.startYear != null && e.endYear != null && e.startYear !== e.endYear) {
    // Within the same era, only suffix once: "1914–1918", "44–30 BCE".
    if (e.startYear < 0 && e.endYear < 0) {
      const bce = locale === 'no' ? 'f.Kr.' : 'BCE';
      return `${Math.abs(e.startYear)}–${Math.abs(e.endYear)} ${bce}`;
    }
    return `${formatYear(e.startYear, locale)}–${formatYear(e.endYear, locale)}`;
  }
  return formatYear(e.year, locale);
}

// ---- Centuries (Easy "century" variant) -------------------

// The century an event falls in, as a label: 1789 -> "1700s", -44 -> "100s BCE".
export function centuryOf(year: number): number {
  // Floor toward negative infinity so -44 -> -100 (the 1st century BCE bucket).
  return Math.floor(year / 100) * 100;
}

export function centuryLabel(centuryStart: number, locale: Locale = currentLocale()): string {
  if (centuryStart < 0) {
    const bce = locale === 'no' ? '-tallet f.Kr.' : 's BCE';
    return `${Math.abs(centuryStart)}${bce}`;
  }
  const suffix = locale === 'no' ? '-tallet' : 's';
  return `${centuryStart}${suffix}`;
}

// ---- Distractor generation (Easy MCQ) ---------------------

export interface YearChoice {
  year: number; // the option value (century-start for century mode)
  correct: boolean;
}

// Four century options: the correct century plus the three nearest neighbours.
export function centuryChoices(event: TimelineEvent): YearChoice[] {
  const correct = centuryOf(event.year);
  const offsets = [-200, -100, 100, 200];
  const pool = offsets.map((o) => correct + o);
  const distractors = pickDistinct(pool, 3, [correct]);
  return shuffle([{ year: correct, correct: true }, ...distractors.map((y) => ({ year: y, correct: false }))]);
}

// Four exact-year options. Distractors prefer "commonly confused" years: the
// same year shifted by whole centuries (1789 -> 1689/1889/1989), plus a couple
// of nearby years, so wrong answers are plausible rather than random.
export function yearChoices(event: TimelineEvent): YearChoice[] {
  const correct = event.year;
  const candidates = [
    correct - 100,
    correct + 100,
    correct - 200,
    correct + 200,
    correct - 10,
    correct + 10,
    correct - 3,
    correct + 5
  ];
  const distractors = pickDistinct(candidates, 3, [correct]);
  return shuffle([{ year: correct, correct: true }, ...distractors.map((y) => ({ year: y, correct: false }))]);
}

// Build the four MCQ options for an Easy question of the given variant.
export function easyChoices(event: TimelineEvent, variant: TimelineEasyVariant): YearChoice[] {
  return variant === 'century' ? centuryChoices(event) : yearChoices(event);
}

// ---- Hint candidates (Medium / Hard) ----------------------

// Four candidate years (one correct) drawn from nearby + century-shifted years,
// matching the requested A)…D) hint format.
export function hintCandidates(event: TimelineEvent): number[] {
  const correct = event.year;
  const candidates = [correct - 100, correct + 100, correct - 50, correct + 50, correct - 10, correct + 10];
  const others = pickDistinct(candidates, 3, [correct]);
  return shuffle([correct, ...others]);
}

// ---- Scoring ----------------------------------------------

export const MAX_SCORE = 100;

// Distance-based score for a placement / typed year, by difficulty.
// Medium is forgiving (you're placing on a timeline); Hard demands precision.
export function scoreForGuess(difficulty: Difficulty, guess: number, event: TimelineEvent): number {
  const d = Math.abs(guess - event.year);
  if (difficulty === 'hard') {
    if (d === 0) return 100;
    if (d <= 1) return 90;
    if (d <= 3) return 75;
    if (d <= 5) return 50;
    return 0;
  }
  // medium (and any non-easy fallback)
  if (d === 0) return 100;
  if (d <= 5) return 95;
  if (d <= 10) return 90;
  if (d <= 25) return 75;
  if (d <= 50) return 50;
  return 0;
}

// Easy is all-or-nothing on the chosen option.
export function scoreForChoice(correct: boolean): number {
  return correct ? 100 : 0;
}

// A used hint halves the reward (kept above zero for a correct-ish answer so
// the hint still feels worthwhile). Pure — callers decide when to apply it.
export function applyHintPenalty(score: number): number {
  if (score <= 0) return 0;
  return Math.max(10, Math.round(score * 0.5));
}

// ---- utils ------------------------------------------------

function pickDistinct(pool: number[], n: number, exclude: number[]): number[] {
  const seen = new Set(exclude);
  const out: number[] = [];
  for (const y of pool) {
    if (out.length >= n) break;
    if (seen.has(y)) continue;
    seen.add(y);
    out.push(y);
  }
  // Fallback: if the pool was too small/clashing, widen until we have enough.
  let step = 1;
  while (out.length < n) {
    const y = exclude[0] + step * 7;
    if (!seen.has(y)) {
      seen.add(y);
      out.push(y);
    }
    step++;
    if (step > 1000) break;
  }
  return out;
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
