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

export interface Question {
  id: string;
  subcategory_id: string;
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
