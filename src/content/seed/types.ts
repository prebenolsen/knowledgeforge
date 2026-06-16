// ============================================================
// Shared types for the bilingual (en/no) seed content.
// ============================================================

import type { Difficulty } from '@/types';

export interface SeedQuestion {
  difficulty: Difficulty;
  question: { en: string; no: string };
  answers: { en: string; no: string }[];
  correct: number;
  explanation: { en: string; no: string };
  tags: string[];
}

export interface SeedSubcategory {
  slug: string;
  name: { en: string; no: string };
  questions: SeedQuestion[];
}

export interface SeedCategory {
  slug: string;
  name: { en: string; no: string };
  icon: string;
  subcategories: SeedSubcategory[];
}
