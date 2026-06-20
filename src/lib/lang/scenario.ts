// ============================================================
// Language Learning — scenario helpers (pure).
//
// Grading and word-bank assembly for the interactive scenario runner. Scenario
// *flow* (stepping through lines/choices/builds) lives in the UI; this file is
// the stateless logic it leans on.
// ============================================================

import type {
  LanguageDefinition,
  ScenarioChoiceOption,
  Sentence,
  SentenceComponent
} from '@/types';
import { resolveComponents } from './registry';
import { shuffle } from '@/lib/concepts';

export function gradeChoice(option: ScenarioChoiceOption): boolean {
  return option.correct;
}

/**
 * Build the shuffled word bank for a 'build' step: the sentence's own components
 * plus any distractor components, de-duplicated and randomized.
 */
export function buildWordBank(
  lang: LanguageDefinition,
  sentence: Sentence,
  distractorComponentIds: string[]
): SentenceComponent[] {
  const ids = [...new Set([...sentence.componentIds, ...distractorComponentIds])];
  return shuffle(resolveComponents(lang, ids));
}

/** True when the arranged component ids exactly match the sentence's order. */
export function checkBuild(arrangedIds: string[], sentence: Sentence): boolean {
  if (arrangedIds.length !== sentence.componentIds.length) return false;
  return arrangedIds.every((id, i) => id === sentence.componentIds[i]);
}
