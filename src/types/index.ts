// ============================================================
// KnowledgeForge — Core type definitions
// ============================================================

export type Locale = 'en' | 'no';

export type Difficulty = 'easy' | 'medium' | 'hard';

// Canonical ordering, easiest first. Use for iteration and display order.
export const DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard'];

// Numeric rank for the few places that need an ordered/scalar difficulty
// (adaptive stepping, SM-2 time budgets).
export const DIFFICULTY_RANK: Record<Difficulty, number> = {
  easy: 1,
  medium: 2,
  hard: 3
};

export type PracticeMode =
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'mixed'
  | 'adaptive';

// ---- Content model ----------------------------------------

// Localized string: every piece of user-facing content carries
// both languages. Falls back to English if a translation is missing.
export interface Localized {
  en: string;
  no: string;
}

export interface Category {
  id: string;
  slug: string;
  name: Localized;
  icon: string; // emoji or icon key
  sort_order: number;
}

export interface Subcategory {
  id: string;
  category_id: string;
  slug: string;
  name: Localized;
}

// A finer learning unit within a subcategory. Quizzes and progress still run
// at the subcategory level; modules group questions into named topics.
export interface Module {
  id: string;
  subcategory_id: string;
  slug: string;
  name: Localized;
  sort_order: number;
}

export interface Question {
  id: string;
  subcategory_id: string;
  module_id: string;
  question: Localized;
  answers: Localized[]; // exactly 4
  correct_index: number; // 0–3
  explanation: Localized;
  difficulty: Difficulty;
  tags: string[];
  active: boolean;
}

// ---- User & progress model --------------------------------

export interface Profile {
  id: string;
  username: string | null;
  locale: Locale;
  placement_complete: boolean;
  created_at: string;
}

export interface QuestionAttempt {
  id: string;
  user_id: string;
  question_id: string;
  is_correct: boolean;
  selected_index: number;
  time_ms: number;
  difficulty: Difficulty;
  answered_at: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  subcategory_id: string;
  mastery_score: number; // 0–1
  questions_seen: number;
  correct_count: number;
  updated_at: string;
}

// ---- Spaced repetition (SM-2) -----------------------------

export interface ReviewSchedule {
  id: string;
  user_id: string;
  question_id: string;
  repetition: number; // n — consecutive correct count
  easiness: number; // E-factor, starts at 2.5, floor 1.3
  interval_days: number;
  next_review: string; // ISO date
  last_review: string | null;
}

// SM-2 quality grade, derived from answer correctness + speed/confidence.
export type Quality = 0 | 1 | 2 | 3 | 4 | 5;

export interface SM2State {
  repetition: number;
  easiness: number;
  interval_days: number;
}

export interface SM2Result extends SM2State {
  next_review: string;
}

// ---- Quiz session (in-memory, client-side) ----------------

export interface QuizSessionQuestion {
  question: Question;
  answered: boolean;
  selectedIndex: number | null;
  isCorrect: boolean | null;
  startedAt: number;
}

export interface QuizSessionResult {
  total: number;
  correct: number;
  byDifficulty: Record<Difficulty, { seen: number; correct: number }>;
}

// ---- Placement test ---------------------------------------

export interface PlacementBreakdown {
  difficulty: Difficulty;
  seen: number;
  correct: number;
  pct: number;
}

export interface PlacementResult {
  breakdown: PlacementBreakdown[];
  recommendedDifficulty: Difficulty;
}

// ---- Timeline (historical dates) game ---------------------
//
// A separate learning activity (like the Country Atlas) where the player
// learns *when* events happened. Hand-authored, bilingual content.

// Thematic / regional tags an event can belong to. Regional timelines filter
// on these; period timelines filter purely on year. Designed to be extended.
export type TimelineRegionTag =
  | 'world'
  | 'europe'
  | 'americas'
  | 'asia'
  | 'africa'
  | 'middle-east'
  | 'science'
  | 'military';

export interface TimelineEvent {
  id: string;
  title: Localized;
  // Canonical year used for grading. Negative = BCE (e.g. -776 = 776 BCE).
  // For multi-year events this is the start / most iconic year.
  year: number;
  // Optional span for events that unfold over several years (WWI 1914–1918).
  startYear?: number;
  endYear?: number;
  // Regional + thematic timelines this event belongs to.
  regions: TimelineRegionTag[];
  description: Localized;
  significance: Localized;
  // Alternative spellings/titles accepted when matching (future use).
  aliases?: string[];
}

// The three timeline game difficulties reuse the shared Difficulty type.
// Easy has two question variants:
export type TimelineEasyVariant = 'century' | 'year';

// ---- Mental Models & Paradoxes ----------------------------
//
// A standalone "discover ideas" activity (like the Timeline and Atlas). Instead
// of testing whether you know a fact, it helps you *understand* a powerful idea —
// a paradox, reasoning tool, or mental model. The player identifies a concept
// from a description (easy), a scenario (medium), or an implication (hard), then
// opens an "Explain" view to actually learn the idea. Hand-authored, bilingual.

// The eight thematic modules concepts are grouped into. Module pickers filter on
// these. Designed to be extended.
export type ConceptModule =
  | 'probability-statistics'
  | 'logic-reasoning'
  | 'decision-game-theory'
  | 'economics-systems'
  | 'psychology-biases'
  | 'philosophy'
  | 'mathematics'
  | 'science-systems';

export const CONCEPT_MODULES: ConceptModule[] = [
  'probability-statistics',
  'logic-reasoning',
  'decision-game-theory',
  'economics-systems',
  'psychology-biases',
  'philosophy',
  'mathematics',
  'science-systems'
];

// An optional interactive simulation a concept can offer. Wired in a later phase
// (e.g. play many Monty Hall rounds and watch the statistics converge). Today
// the Explain view simply notes that a simulation is available.
export type ConceptSimulation =
  | 'monty-hall'
  | 'prisoners-dilemma'
  | 'birthday-problem'
  | 'tragedy-commons'
  | 'gamblers-fallacy';

// The rich educational explanation shown behind every concept's "Explain" button.
// These seven fields are the heart of the activity — the point is understanding,
// not memorizing.
export interface ConceptExplanation {
  summary: Localized; // one-line essence
  whyInteresting: Localized; // what makes the idea powerful / surprising
  whyIntuitionFails: Localized; // where human intuition trips up
  example: Localized; // a simple, concrete example
  realWorld: Localized; // why it matters beyond the puzzle
}

export interface Concept {
  id: string;
  module: ConceptModule;
  name: Localized;
  // Per-difficulty identification prompts. The gameplay is always "name the
  // concept", but the angle differs:
  //   easy   — concept → description ("Which concept describes…?")
  //   medium — concept → scenario   (a situation; which concept is at play?)
  //   hard   — concept → implication (the surprising "why"; which concept?)
  prompts: Record<Difficulty, Localized>;
  explanation: ConceptExplanation;
  // Ids of related concepts — shown in the Explain view and preferred as quiz
  // distractors. An id that doesn't resolve is simply skipped (forward refs ok).
  related: string[];
  // Optional future interactive simulation key.
  simulation?: ConceptSimulation;
  // Alternative accepted names (future free-text matching).
  aliases?: string[];
}

// ---- Knowledge map (dashboard) ----------------------------

export interface CategoryMastery {
  category: Category;
  mastery: number; // 0–1 aggregate
  subcategories: SubcategoryMastery[];
}

export interface SubcategoryMastery {
  subcategory: Subcategory;
  mastery: number;
  byDifficulty: Record<Difficulty, number>; // accuracy 0–1 per difficulty
}
