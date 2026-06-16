// ============================================================
// Seed content — bilingual (en/no) starter questions.
// ~6 questions per category, spanning difficulty 1–5.
// Used by scripts/import.ts to populate a fresh database.
//
// This is intentionally small. Add real content later as JSON
// batches through the same import pipeline — no code changes.
//
// Organization: one folder per category, one file per
// subcategory. Each category's index.ts assembles its
// subcategories; this file assembles the categories into SEED.
// ============================================================

import type { SeedCategory } from './types';
import { history } from './history';
import { science } from './science';
import { mathematics } from './mathematics';
import { nature } from './nature';
import { economics } from './economics';
import { society } from './society';
import { geography } from './geography';
import { technology } from './technology';

export type { SeedQuestion, SeedSubcategory, SeedCategory } from './types';

export const SEED: SeedCategory[] = [
  history,
  science,
  mathematics,
  nature,
  economics,
  society,
  geography,
  technology
];
