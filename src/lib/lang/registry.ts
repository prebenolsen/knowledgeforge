// ============================================================
// Language Learning — registry & content lookups (pure, no React/network).
//
// Thin accessors over the bundled language definitions. Everything else in the
// module reads content through these helpers so there is a single source of
// truth. Mirrors the structure of lib/concepts.ts and lib/timeline.ts.
// ============================================================

import { LANGUAGES, LANGUAGE_LIST } from '@/content/languages';
import type {
  LanguageCode,
  LanguageDefinition,
  LangCategory,
  LangModule,
  Lesson,
  Scenario,
  Sentence,
  SentenceComponent,
  VocabWord
} from '@/types';

export function listLanguages(): LanguageDefinition[] {
  return LANGUAGE_LIST;
}

export function getLanguage(code: LanguageCode): LanguageDefinition | undefined {
  return LANGUAGES[code];
}

// ---- Content lookups (all scoped to one language) ----------

export function vocabById(lang: LanguageDefinition, id: string): VocabWord | undefined {
  return lang.vocabulary.find((w) => w.id === id);
}

export function componentById(lang: LanguageDefinition, id: string): SentenceComponent | undefined {
  return lang.components.find((c) => c.id === id);
}

export function sentenceById(lang: LanguageDefinition, id: string): Sentence | undefined {
  return lang.sentences.find((s) => s.id === id);
}

export function scenarioById(lang: LanguageDefinition, id: string): Scenario | undefined {
  return lang.scenarios.find((s) => s.id === id);
}

export function categoryById(lang: LanguageDefinition, id: string): LangCategory | undefined {
  return lang.categories.find((c) => c.id === id);
}

export function moduleById(lang: LanguageDefinition, id: string): LangModule | undefined {
  for (const cat of lang.categories) {
    const mod = cat.modules.find((m) => m.id === id);
    if (mod) return mod;
  }
  return undefined;
}

export function lessonById(lang: LanguageDefinition, id: string): Lesson | undefined {
  for (const cat of lang.categories) {
    for (const mod of cat.modules) {
      const les = mod.lessons.find((l) => l.id === id);
      if (les) return les;
    }
  }
  return undefined;
}

// Resolve a list of vocab ids to words (skipping any that don't resolve).
export function resolveVocab(lang: LanguageDefinition, ids: string[]): VocabWord[] {
  return ids.map((id) => vocabById(lang, id)).filter((w): w is VocabWord => w != null);
}

// Resolve a list of component ids to components (skipping unresolved ids).
export function resolveComponents(lang: LanguageDefinition, ids: string[]): SentenceComponent[] {
  return ids.map((id) => componentById(lang, id)).filter((c): c is SentenceComponent => c != null);
}

// Words tagged with `tag` — selection is by tag, never by a single owning folder.
export function wordsByTag(lang: LanguageDefinition, tag: string): VocabWord[] {
  return lang.vocabulary.filter((w) => w.tags.includes(tag));
}

// A module is playable once it has at least one lesson (with vocab) or a scenario.
export function isModulePlayable(lang: LanguageDefinition, mod: LangModule): boolean {
  const hasLesson = mod.lessons.some((l) => l.vocabIds.length > 0);
  const hasScenario = mod.scenarioIds.some((id) => scenarioById(lang, id) != null);
  return hasLesson || hasScenario;
}
