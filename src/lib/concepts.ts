// ============================================================
// Mental Models & Paradoxes — pure logic (no React, no network).
//
// Module metadata, concept filtering, the per-difficulty identification prompt,
// and MCQ distractor generation (prefer related concepts, then same-module, then
// any). Mirrors the structure of lib/timeline.ts and lib/geo.ts so the learning
// activities stay consistent.
// ============================================================

import { CONCEPTS } from '@/content/concepts/concepts';
import { currentLocale, localized } from '@/i18n';
import type { Concept, ConceptModule, Difficulty, Localized, Locale } from '@/types';
import { CONCEPT_MODULES } from '@/types';

export type { Concept };

export const CONCEPTS_ALL = CONCEPTS;

// A module needs at least this many concepts before it is playable (we need one
// correct answer + three distractors to build a four-option question).
export const MIN_CONCEPTS_TO_PLAY = 4;

// ---- Modules (selectable groups) --------------------------

export interface ConceptModuleInfo {
  id: ConceptModule;
  name: Localized;
  emoji: string;
}

export const CONCEPT_MODULE_INFO: ConceptModuleInfo[] = [
  { id: 'probability-statistics', name: { en: 'Probability & Statistics', no: 'Sannsynlighet og statistikk' }, emoji: '🎲' },
  { id: 'logic-reasoning', name: { en: 'Logic & Reasoning', no: 'Logikk og resonnement' }, emoji: '🧩' },
  { id: 'decision-game-theory', name: { en: 'Decision Making & Game Theory', no: 'Beslutninger og spillteori' }, emoji: '♟️' },
  { id: 'economics-systems', name: { en: 'Economics & Systems Thinking', no: 'Økonomi og systemtenkning' }, emoji: '📈' },
  { id: 'psychology-biases', name: { en: 'Psychology & Cognitive Biases', no: 'Psykologi og kognitive skjevheter' }, emoji: '🧠' },
  { id: 'philosophy', name: { en: 'Philosophy', no: 'Filosofi' }, emoji: '🏛️' },
  { id: 'mathematics', name: { en: 'Mathematics', no: 'Matematikk' }, emoji: '∞' },
  { id: 'science-systems', name: { en: 'Science & Systems', no: 'Vitenskap og systemer' }, emoji: '🔬' }
];

export function moduleById(id: string): ConceptModuleInfo | undefined {
  return CONCEPT_MODULE_INFO.find((m) => m.id === id);
}

// Keep the metadata list and the type-level module list in agreement.
const _moduleCheck: Record<ConceptModule, true> = CONCEPT_MODULES.reduce(
  (acc, m) => ({ ...acc, [m]: true }),
  {} as Record<ConceptModule, true>
);
void _moduleCheck;

// ---- Concept lookup & filtering ---------------------------

export function conceptById(id: string): Concept | undefined {
  return CONCEPTS.find((c) => c.id === id);
}

export function conceptsInModule(module: ConceptModule): Concept[] {
  return CONCEPTS.filter((c) => c.module === module);
}

export function countByModule(): Record<string, number> {
  const out: Record<string, number> = {};
  for (const m of CONCEPT_MODULE_INFO) out[m.id] = conceptsInModule(m.id).length;
  return out;
}

export function isModulePlayable(module: ConceptModule): boolean {
  return conceptsInModule(module).length >= MIN_CONCEPTS_TO_PLAY;
}

// ---- Display ----------------------------------------------

export function conceptName(c: Concept, locale: Locale = currentLocale()): string {
  return localized(c.name, locale);
}

// The identification prompt shown for a concept at a given difficulty.
export function conceptPrompt(c: Concept, difficulty: Difficulty, locale: Locale = currentLocale()): string {
  return localized(c.prompts[difficulty], locale);
}

// Resolve a concept's `related` ids to concepts (skipping any that don't exist).
export function relatedConcepts(c: Concept): Concept[] {
  return c.related.map(conceptById).filter((x): x is Concept => x != null);
}

// ---- MCQ choices ------------------------------------------

export interface ConceptChoice {
  concept: Concept;
  correct: boolean;
}

// Build four options for a question: the correct concept plus three distractors.
// Distractor preference, in order: the concept's own `related` ids, then other
// concepts in the same module, then any remaining concept. This keeps wrong
// answers plausible (thematically adjacent) rather than random.
export function buildChoices(concept: Concept, pool: Concept[] = CONCEPTS): ConceptChoice[] {
  const chosen: Concept[] = [];
  const taken = new Set<string>([concept.id]);

  const add = (c: Concept | undefined) => {
    if (chosen.length >= 3 || !c || taken.has(c.id)) return;
    taken.add(c.id);
    chosen.push(c);
  };

  // 1) related concepts (in declared order)
  for (const c of relatedConcepts(concept)) add(c);
  // 2) same-module concepts
  for (const c of shuffle(pool.filter((x) => x.module === concept.module))) add(c);
  // 3) anything else
  for (const c of shuffle(pool)) add(c);

  return shuffle([
    { concept, correct: true },
    ...chosen.map((c) => ({ concept: c, correct: false }))
  ]);
}

// ---- utils ------------------------------------------------

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
