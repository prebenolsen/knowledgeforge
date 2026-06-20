// ============================================================
// KnowledgeForge — Language Learning module type definitions.
//
// A standalone "activity" (like the Atlas / Timeline / Concepts) that teaches a
// foreign language through *context*: tagged vocabulary, reusable sentence
// components, real-world scenarios, and a flexible exercise framework — not bare
// flashcards. No audio: designed to work fully offline.
//
// ARCHITECTURE-FIRST. These types describe the whole system; only a tiny sample
// of Spanish content (one Restaurant scenario + ~20 words) is authored so far,
// purely to prove the framework end-to-end. Content is bundled client-side
// (see src/content/languages/<code>/) and lazy-loaded; only user progress is
// persisted to Supabase.
//
// Adding a new language later = add its code to `LanguageCode`, drop a folder in
// src/content/languages/<code>/, and register it. No engine changes required.
// ============================================================

import type { Localized, SM2State } from './index';

// Languages are identified by ISO-639-1 codes. A string union keeps the set
// closed and exhaustively checkable; extend it to add a language.
export type LanguageCode = 'es';

// CEFR proficiency levels, easiest first. Used for difficulty/level display and
// for prioritising content to a learner's level.
export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export const CEFR_LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

// The language a learner translates *to* — reuses the app's UI locales so all
// translations come from the existing bilingual `Localized` content.
export type NativeLanguage = 'en' | 'no';

// ---- Content hierarchy: Language → Categories → Modules → Lessons ----------

export type LangCategoryKind = 'survival' | 'vocabulary' | 'grammar' | 'conversation';

// A whole language's bundled content. Vocabulary, sentences, components, and
// scenarios live at the top level (shared/reusable, referenced by id); the
// category→module→lesson tree organises them into a learning path.
export interface LanguageDefinition {
  code: LanguageCode;
  name: Localized; // "Spanish" / "Spansk"
  nativeName: string; // endonym, e.g. "Español"
  flag: string; // emoji
  categories: LangCategory[];
  vocabulary: VocabWord[];
  components: SentenceComponent[];
  sentences: Sentence[];
  scenarios: Scenario[];
}

export interface LangCategory {
  id: string;
  slug: string;
  name: Localized;
  icon: string; // emoji
  kind: LangCategoryKind;
  modules: LangModule[];
}

export interface LangModule {
  id: string;
  slug: string;
  name: Localized;
  level: CEFRLevel;
  // Lessons are embedded (not shared across modules); vocab/sentences they use
  // are referenced by id so the same word can appear in many lessons.
  lessons: Lesson[];
  // Scenarios attached to this module, referenced by id (scenarios are top-level
  // and reusable). Empty for modules awaiting a content pass.
  scenarioIds: string[];
}

export interface Lesson {
  id: string;
  slug: string;
  name: Localized;
  vocabIds: string[];
  sentenceIds: string[];
  // Which exercise kinds to generate for this lesson (see exercise engine).
  exerciseTypes: ExerciseType[];
}

// ---- Vocabulary engine ------------------------------------------------------

export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'pronoun'
  | 'preposition'
  | 'article'
  | 'interjection'
  | 'phrase'
  | 'number';

export type GrammaticalGender = 'm' | 'f' | 'n';

// Personalization hints. These only *weight* a word's relevance for a profile —
// they never hide it. Everything stays accessible to every learner.
export interface VocabRelevance {
  genderAffinity?: 'male' | 'female' | 'neutral';
  interests?: string[]; // e.g. ['food', 'business']
  travelGoals?: string[]; // e.g. ['backpacking', 'business']
}

export interface ExampleSentence {
  text: string; // in the target language
  translation: Localized;
}

export interface VocabWord {
  id: string;
  term: string; // target language, e.g. "dónde"
  translation: Localized;
  difficulty: CEFRLevel;
  pos: PartOfSpeech;
  grammaticalGender?: GrammaticalGender; // for nouns
  // A word belongs to MANY tags — selection/filtering is by tag, never by a
  // single owning category. e.g. "dónde" → directions, restaurant, hotel, social.
  tags: string[];
  examples: ExampleSentence[];
  relevance?: VocabRelevance;
}

// Per-user mastery of one word. Persisted to Supabase. Words with mistakes are
// weighted to appear more often (see lib/lang/vocabulary.ts); scheduling reuses
// the app's SM-2 engine (lib/sm2.ts).
export interface VocabMastery {
  vocabId: string;
  seenCount: number;
  correctCount: number;
  mistakes: number;
  confidence: number; // 0–1
  sm2: SM2State;
  nextReview: string; // ISO date
}

// ---- Sentence builder (reusable components) --------------------------------

export type SentenceRole =
  | 'intent'
  | 'verb'
  | 'subject'
  | 'object'
  | 'modifier'
  | 'connector';

// A reusable building block. The same component (e.g. "quiero" / "por favor")
// is reused across many sentences and scenarios.
export interface SentenceComponent {
  id: string;
  role: SentenceRole;
  term: string; // "quiero"
  translation: Localized;
  vocabId?: string; // optional link to a VocabWord
}

export type Formality = 'casual' | 'formal';

export interface Sentence {
  id: string;
  text: string; // canonical full sentence, e.g. "Quiero un bistec, por favor"
  translation: Localized;
  componentIds: string[]; // ordered components that build the sentence
  formality: Formality; // teach casual first; formal variants come later
  level: CEFRLevel;
}

// ---- Scenario system (the main feature) ------------------------------------

// A tiny inline glossary entry shown while a scenario teaches new words on the
// fly (e.g. "hola = hello, cómo = how, estás = are you"). Not every taught word
// needs to be a full VocabWord, so this is intentionally lightweight.
export interface GlossaryEntry {
  term: string;
  translation: Localized;
}

export interface ScenarioChoiceOption {
  text: string; // target language
  translation: Localized;
  correct: boolean;
  feedback: Localized; // why this response works (or doesn't)
}

// A scenario is an ordered list of steps that mixes dialogue, response choices,
// and sentence construction — a real-world simulation (ordering food, checking
// in, asking directions).
export type ScenarioStep =
  | {
      kind: 'line';
      speaker: Localized; // e.g. "Waiter"
      text: string; // what they say, target language
      translation: Localized;
      teach: GlossaryEntry[]; // inline mini-glossary for new words in this line
    }
  | {
      kind: 'choice';
      prompt: Localized;
      options: ScenarioChoiceOption[];
    }
  | {
      kind: 'build';
      prompt: Localized;
      sentenceId: string; // the target sentence to assemble
      // Extra component ids mixed into the word bank as distractors.
      distractorComponentIds: string[];
    };

export interface Scenario {
  id: string;
  slug: string;
  name: Localized;
  moduleId: string;
  level: CEFRLevel;
  steps: ScenarioStep[];
}

// ---- Exercise framework (flexible, generated from content) -----------------

export type ExerciseType =
  | 'flashcard'
  | 'matching'
  | 'multiple-choice'
  | 'typing'
  | 'sentence-build'
  | 'scenario-choice';

export const EXERCISE_TYPES: ExerciseType[] = [
  'flashcard',
  'matching',
  'multiple-choice',
  'typing',
  'sentence-build',
  'scenario-choice'
];

export interface MatchingPair {
  vocabId: string;
  term: string; // target language
  translation: string; // resolved to the learner's native language
}

export interface MCOption {
  text: string;
  correct: boolean;
}

// One ready-to-render exercise. A discriminated union keyed on `type` — the
// exercise engine builds these from vocab + sentences so authors don't hand-write
// every exercise.
export type Exercise =
  | { type: 'flashcard'; vocabId: string; front: string; back: string; example?: string }
  | { type: 'matching'; pairs: MatchingPair[] }
  | { type: 'multiple-choice'; vocabId: string; prompt: string; options: MCOption[] }
  | { type: 'typing'; vocabId: string; prompt: string; accept: string[] }
  | {
      type: 'sentence-build';
      sentenceId: string;
      prompt: string;
      bank: SentenceComponent[]; // shuffled component pool to drag/tap
      answer: string[]; // ordered component ids that form the sentence
    }
  | { type: 'scenario-choice'; prompt: string; options: ScenarioChoiceOption[] };

export interface ExerciseResult {
  type: ExerciseType;
  correct: boolean;
  partial?: number; // 0–1 for fuzzy/partial credit (typing, build)
  vocabTouched: string[]; // vocab ids this exercise practised
}

// ---- User profile & progress ----------------------------------------------

export type ProfileGender = 'male' | 'female' | 'unspecified';

// Per-language personalization profile. Drives relevance weighting; never hides
// content. Keyed by user + language in the database.
export interface LanguageProfile {
  language: LanguageCode;
  nativeLanguage: NativeLanguage;
  gender: ProfileGender;
  interests: string[];
  travelGoals: string[];
  level: CEFRLevel;
}

export interface LangModuleProgress {
  moduleId: string;
  mastery: number; // 0–1
  lessonsDone: number;
  updatedAt: string;
}
