// ============================================================
// Language Learning — first-run personalization setup.
//
// Collects the per-language profile (native language, gender, interests, travel
// goals). These weight content relevance; nothing is ever hidden. Gender is
// optional ("Prefer not to say" → no gender weighting).
// ============================================================

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card } from '@/components/ui';
import type { CEFRLevel, LanguageCode, LanguageProfile, NativeLanguage, ProfileGender } from '@/types';

const INTERESTS = ['food', 'business', 'culture', 'sports', 'shopping', 'nightlife'] as const;
const TRAVEL_GOALS = ['backpacking', 'business', 'sightseeing', 'family', 'study'] as const;

interface Props {
  language: LanguageCode;
  defaultNative: NativeLanguage;
  initial?: LanguageProfile;
  onSave: (profile: LanguageProfile) => void;
  onCancel: () => void;
}

export function ProfileSetup({ language, defaultNative, initial, onSave, onCancel }: Props) {
  const { t } = useTranslation();
  const [gender, setGender] = useState<ProfileGender>(initial?.gender ?? 'unspecified');
  const [interests, setInterests] = useState<string[]>(initial?.interests ?? []);
  const [goals, setGoals] = useState<string[]>(initial?.travelGoals ?? []);

  const toggle = (list: string[], set: (v: string[]) => void, v: string) =>
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  function save() {
    onSave({
      language,
      nativeLanguage: initial?.nativeLanguage ?? defaultNative,
      gender,
      interests,
      travelGoals: goals,
      level: initial?.level ?? ('A1' as CEFRLevel)
    });
  }

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm transition ${
      active ? 'border-ember-500 bg-ember-500/15 text-ember-300' : 'border-ink-500 text-mist-200 hover:bg-ink-700'
    }`;

  return (
    <div className="space-y-6 px-5 py-4">
      <div>
        <h2 className="font-display text-2xl">{t('language.setup.title')}</h2>
        <p className="mt-1 text-sm text-mist-400">{t('language.setup.subtitle')}</p>
      </div>

      <Card className="space-y-3 bg-ink-700">
        <p className="text-sm text-mist-300">{t('language.setup.gender')}</p>
        <div className="flex flex-wrap gap-2">
          {(['male', 'female', 'unspecified'] as ProfileGender[]).map((g) => (
            <button key={g} onClick={() => setGender(g)} className={chip(gender === g)}>
              {t(`language.setup.gender_${g}`)}
            </button>
          ))}
        </div>
        <p className="text-xs text-mist-500">{t('language.setup.genderNote')}</p>
      </Card>

      <Card className="space-y-3 bg-ink-700">
        <p className="text-sm text-mist-300">{t('language.setup.interests')}</p>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((i) => (
            <button key={i} onClick={() => toggle(interests, setInterests, i)} className={chip(interests.includes(i))}>
              {t(`language.interest.${i}`)}
            </button>
          ))}
        </div>
      </Card>

      <Card className="space-y-3 bg-ink-700">
        <p className="text-sm text-mist-300">{t('language.setup.goals')}</p>
        <div className="flex flex-wrap gap-2">
          {TRAVEL_GOALS.map((g) => (
            <button key={g} onClick={() => toggle(goals, setGoals, g)} className={chip(goals.includes(g))}>
              {t(`language.goal.${g}`)}
            </button>
          ))}
        </div>
      </Card>

      <div className="space-y-2">
        <Button onClick={save}>{t('language.setup.save')}</Button>
        <Button variant="ghost" onClick={onCancel}>
          {t('common.back')}
        </Button>
      </div>
    </div>
  );
}
