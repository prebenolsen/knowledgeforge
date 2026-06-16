import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import no from './no';
import type { Locale, Localized } from '@/types';

const STORAGE_KEY = 'kf_locale';

function detectInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'no') return stored;
  // Fall back to the browser language, defaulting to English.
  return navigator.language.toLowerCase().startsWith('nb') ||
    navigator.language.toLowerCase().startsWith('no')
    ? 'no'
    : 'en';
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    no: { translation: no }
  },
  lng: detectInitialLocale(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export function setLocale(locale: Locale): void {
  localStorage.setItem(STORAGE_KEY, locale);
  void i18n.changeLanguage(locale);
}

export function currentLocale(): Locale {
  return (i18n.language as Locale) === 'no' ? 'no' : 'en';
}

/**
 * Resolve a localized content field to the active language,
 * falling back to English if the translation is missing.
 */
export function localized(field: Localized | undefined, locale: Locale = currentLocale()): string {
  if (!field) return '';
  return field[locale] || field.en || '';
}

export default i18n;
