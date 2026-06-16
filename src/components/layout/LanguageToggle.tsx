import { useTranslation } from 'react-i18next';
import { setLocale, currentLocale } from '@/i18n';
import type { Locale } from '@/types';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const active = currentLocale();

  function pick(locale: Locale) {
    setLocale(locale);
  }

  // Re-render hint: reading i18n.language ties this to language changes.
  void i18n.language;

  return (
    <div className="inline-flex overflow-hidden rounded-full border border-ink-500 text-sm">
      <button
        onClick={() => pick('en')}
        className={`px-3 py-1.5 transition ${active === 'en' ? 'bg-ember-500 text-ink-900' : 'text-mist-300'}`}
      >
        EN
      </button>
      <button
        onClick={() => pick('no')}
        className={`px-3 py-1.5 transition ${active === 'no' ? 'bg-ember-500 text-ink-900' : 'text-mist-300'}`}
      >
        NO
      </button>
    </div>
  );
}
