// ============================================================
// Language registry — maps a LanguageCode to its bundled definition.
//
// Adding a language later: author src/content/languages/<code>/, then add it
// here and to the `LanguageCode` union in src/types/language.ts. No engine or UI
// changes are required — everything reads from this registry.
// ============================================================

import type { LanguageCode, LanguageDefinition } from '@/types';
import { SPANISH } from './es';

export const LANGUAGES: Record<LanguageCode, LanguageDefinition> = {
  es: SPANISH
};

// Stable display order for the language picker.
export const LANGUAGE_LIST: LanguageDefinition[] = [SPANISH];
