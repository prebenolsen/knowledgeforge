// ============================================================
// Language Learning — the activity page.
//
// A standalone, offline-capable activity (like Concepts / Timeline). Flow:
//   first run → ProfileSetup → category browser → module → lesson / scenario.
// Content is bundled (src/content/languages); only progress hits Supabase, and
// every write degrades gracefully offline. The learner is never locked into a
// path — any playable module is reachable directly.
//
// ARCHITECTURE-FIRST: wired against the typed sample content (Spanish, one
// Restaurant scenario + a few lessons). Empty modules show as "coming soon".
// ============================================================

import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { currentLocale, localized } from '@/i18n';
import { Button, Card, MasteryBar, Spinner } from '@/components/ui';
import { ProfileSetup } from '@/components/lang/ProfileSetup';
import { ExerciseHost } from '@/components/lang/ExerciseHost';
import { ScenarioRunner } from '@/components/lang/ScenarioRunner';
import { getLanguage, isModulePlayable, lessonById, moduleById, scenarioById, vocabById } from '@/lib/lang/registry';
import { generateLessonExercises } from '@/lib/lang/exercises';
import {
  fetchLanguageProfile,
  fetchModuleProgress,
  fetchVocabMastery,
  recordLessonComplete,
  recordVocabResult,
  saveLanguageProfile
} from '@/lib/lang/progress';
import type { MasteryMap } from '@/lib/lang/vocabulary';
import type {
  Exercise,
  LangModuleProgress,
  LanguageDefinition,
  LanguageProfile,
  Lesson,
  NativeLanguage
} from '@/types';

const LANGUAGE = 'es' as const;

type Screen =
  | { name: 'setup' }
  | { name: 'home' }
  | { name: 'category'; categoryId: string }
  | { name: 'module'; moduleId: string }
  | { name: 'lesson'; moduleId: string; lessonId: string }
  | { name: 'scenario'; moduleId: string; scenarioId: string };

export default function LanguagePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { session } = useAuth();
  const userId = session!.user.id;
  const lang = getLanguage(LANGUAGE)!;

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<LanguageProfile | null>(null);
  const [mastery, setMastery] = useState<MasteryMap>({});
  const [progress, setProgress] = useState<Record<string, LangModuleProgress>>({});
  const [screen, setScreen] = useState<Screen>({ name: 'home' });

  useEffect(() => {
    let active = true;
    void (async () => {
      const [p, m, prog] = await Promise.all([
        fetchLanguageProfile(userId, LANGUAGE),
        fetchVocabMastery(userId, LANGUAGE),
        fetchModuleProgress(userId, LANGUAGE)
      ]);
      if (!active) return;
      setProfile(p);
      setMastery(m);
      setProgress(Object.fromEntries(prog.map((x) => [x.moduleId, x])));
      setScreen(p ? { name: 'home' } : { name: 'setup' });
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [userId]);

  function header(title: string, onBack: () => void) {
    return (
      <div className="mb-4 flex items-center justify-between">
        <button onClick={onBack} className="text-sm text-mist-400">
          ‹ {t('common.back')}
        </button>
        <span className="text-sm text-mist-300">{title}</span>
        <button onClick={() => navigate('/')} className="text-sm text-mist-400">
          ✕
        </button>
      </div>
    );
  }

  if (loading) return <Spinner />;

  // ---- Profile setup ----
  if (screen.name === 'setup') {
    return (
      <ProfileSetup
        language={LANGUAGE}
        defaultNative={currentLocale() as NativeLanguage}
        initial={profile ?? undefined}
        onSave={(p) => {
          setProfile(p);
          void saveLanguageProfile(userId, p);
          setScreen({ name: 'home' });
        }}
        onCancel={() => setScreen({ name: 'home' })}
      />
    );
  }

  // ---- Category browser (home) ----
  if (screen.name === 'home') {
    return (
      <div className="flex min-h-full flex-col px-5 py-4">
        {header(`${lang.flag} ${localized(lang.name)}`, () => navigate('/'))}
        <h2 className="font-display text-2xl">{t('language.chooseCategory')}</h2>
        <p className="mb-4 text-sm text-mist-400">{t('language.tagline')}</p>
        <div className="space-y-3">
          {lang.categories.map((cat) => (
            <Card key={cat.id} onClick={() => setScreen({ name: 'category', categoryId: cat.id })}>
              <div className="flex items-center justify-between">
                <span className="text-lg">
                  {cat.icon} {localized(cat.name)}
                </span>
                <span className="text-sm text-mist-400">{t('language.moduleCount', { count: cat.modules.length })}</span>
              </div>
            </Card>
          ))}
        </div>
        <button onClick={() => setScreen({ name: 'setup' })} className="mt-6 text-sm text-mist-400 underline">
          {t('language.editProfile')}
        </button>
      </div>
    );
  }

  // ---- Module list within a category ----
  if (screen.name === 'category') {
    const cat = lang.categories.find((c) => c.id === screen.categoryId)!;
    return (
      <div className="flex min-h-full flex-col px-5 py-4">
        {header(localized(cat.name), () => setScreen({ name: 'home' }))}
        <h2 className="mb-4 font-display text-2xl">
          {cat.icon} {localized(cat.name)}
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {cat.modules.map((mod) => {
            const playable = isModulePlayable(lang, mod);
            const prog = progress[mod.id];
            return (
              <Card
                key={mod.id}
                onClick={playable ? () => setScreen({ name: 'module', moduleId: mod.id }) : undefined}
                className={playable ? '' : 'opacity-60'}
              >
                <div className="font-medium leading-tight">{localized(mod.name)}</div>
                <div className="mt-1 text-xs text-mist-500">{mod.level}</div>
                {playable ? (
                  prog ? (
                    <div className="mt-2">
                      <MasteryBar value={prog.mastery} />
                    </div>
                  ) : (
                    <div className="mt-2 text-xs text-mist-400">{t('language.notStarted')}</div>
                  )
                ) : (
                  <div className="mt-2 text-xs text-mist-400">{t('language.comingSoon')}</div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  // ---- Module detail (lessons + scenarios) ----
  if (screen.name === 'module') {
    const mod = moduleById(lang, screen.moduleId)!;
    const scenarios = mod.scenarioIds.map((id) => scenarioById(lang, id)).filter((s) => s != null);
    return (
      <div className="flex min-h-full flex-col px-5 py-4">
        {header(localized(mod.name), () => setScreen({ name: 'category', categoryId: categoryOf(lang, mod.id) }))}
        <h2 className="mb-4 font-display text-2xl">{localized(mod.name)}</h2>

        {scenarios.length > 0 && (
          <>
            <p className="mb-2 text-xs uppercase tracking-wide text-ember-400">{t('language.scenarios')}</p>
            <div className="mb-5 space-y-3">
              {scenarios.map((s) => (
                <Card
                  key={s!.id}
                  className="border border-ember-600/30"
                  onClick={() => setScreen({ name: 'scenario', moduleId: mod.id, scenarioId: s!.id })}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg">🎭 {localized(s!.name)}</span>
                    <span className="text-mist-400">›</span>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {mod.lessons.length > 0 && (
          <>
            <p className="mb-2 text-xs uppercase tracking-wide text-mist-400">{t('language.lessons')}</p>
            <div className="space-y-3">
              {mod.lessons.map((les) => (
                <Card key={les.id} onClick={() => setScreen({ name: 'lesson', moduleId: mod.id, lessonId: les.id })}>
                  <div className="flex items-center justify-between">
                    <span className="text-lg">📖 {localized(les.name)}</span>
                    <span className="text-sm text-mist-400">{t('language.wordCount', { count: les.vocabIds.length })}</span>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  // ---- Lesson runner ----
  if (screen.name === 'lesson' && profile) {
    const lesson = lessonById(lang, screen.lessonId)!;
    return (
      <LessonRunner
        lang={lang}
        lesson={lesson}
        profile={profile}
        mastery={mastery}
        onMasteryUpdate={(id, vm) => setMastery((m) => ({ ...m, [id]: vm }))}
        onFinish={(score) => {
          void recordLessonComplete({ userId, language: LANGUAGE, moduleId: screen.moduleId, score });
          setProgress((p) => ({
            ...p,
            [screen.moduleId]: {
              moduleId: screen.moduleId,
              mastery: score,
              lessonsDone: (p[screen.moduleId]?.lessonsDone ?? 0) + 1,
              updatedAt: new Date().toISOString()
            }
          }));
          setScreen({ name: 'module', moduleId: screen.moduleId });
        }}
        onQuit={() => setScreen({ name: 'module', moduleId: screen.moduleId })}
      />
    );
  }

  // ---- Scenario runner ----
  if (screen.name === 'scenario') {
    const scenario = scenarioById(lang, screen.scenarioId)!;
    return (
      <ScenarioRunner
        lang={lang}
        scenario={scenario}
        onFinish={(score) => {
          void recordLessonComplete({ userId, language: LANGUAGE, moduleId: screen.moduleId, score });
          setScreen({ name: 'module', moduleId: screen.moduleId });
        }}
        onQuit={() => setScreen({ name: 'module', moduleId: screen.moduleId })}
      />
    );
  }

  return null;
}

function categoryOf(lang: LanguageDefinition, moduleId: string): string {
  for (const c of lang.categories) if (c.modules.some((m) => m.id === moduleId)) return c.id;
  return lang.categories[0].id;
}

// ============================================================
// Lesson runner — sequences generated exercises and records results.
// ============================================================

interface LessonRunnerProps {
  lang: LanguageDefinition;
  lesson: Lesson;
  profile: LanguageProfile;
  mastery: MasteryMap;
  onMasteryUpdate: (vocabId: string, vm: MasteryMap[string]) => void;
  onFinish: (score: number) => void;
  onQuit: () => void;
}

function LessonRunner({ lang, lesson, profile, mastery, onMasteryUpdate, onFinish, onQuit }: LessonRunnerProps) {
  const { t } = useTranslation();
  const { session } = useAuth();
  const userId = session!.user.id;

  // Generate once per mount — personalization + SR weighting is applied here.
  const exercises = useMemo<Exercise[]>(
    () => generateLessonExercises(lang, lesson, profile, mastery),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const [index, setIndex] = useState(0);
  const [seen, setSeen] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [started] = useState(() => Date.now());
  const [turnStart, setTurnStart] = useState(() => Date.now());

  if (exercises.length === 0) {
    return (
      <div className="flex min-h-full flex-col items-center justify-center gap-4 px-5 py-8 text-center">
        <p className="text-mist-300">{t('language.lessonEmpty')}</p>
        <Button onClick={onQuit}>{t('common.back')}</Button>
      </div>
    );
  }

  const exercise = exercises[index];

  function complete(r: { correct: boolean; vocabTouched: string[] }) {
    const timeMs = Date.now() - turnStart;
    const nextSeen = seen + 1;
    const nextCorrect = correct + (r.correct ? 1 : 0);
    setSeen(nextSeen);
    setCorrect(nextCorrect);

    // Fold the result into each touched word's mastery (SR + mistake tracking).
    for (const vocabId of r.vocabTouched) {
      const word = vocabById(lang, vocabId);
      if (!word) continue;
      void recordVocabResult({
        userId,
        language: LANGUAGE,
        vocabId,
        cefr: word.difficulty,
        exerciseType: exercise.type,
        isCorrect: r.correct,
        timeMs,
        prev: mastery[vocabId]
      }).then((vm) => onMasteryUpdate(vocabId, vm));
    }

    if (index + 1 >= exercises.length) {
      onFinish(Number((nextSeen > 0 ? nextCorrect / nextSeen : 1).toFixed(3)));
    } else {
      setIndex((i) => i + 1);
      setTurnStart(Date.now());
    }
  }

  return (
    <div className="flex min-h-full flex-col px-5 py-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-mist-300">{localized(lesson.name)}</span>
        <span className="text-sm text-mist-400">
          {t('language.exProgress', { current: index + 1, total: exercises.length })}
        </span>
        <button onClick={onQuit} className="text-sm text-mist-400">
          ✕
        </button>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-ink-600">
        <div
          className="h-full bg-ember-500 transition-all"
          style={{ width: `${Math.round(((index) / exercises.length) * 100)}%` }}
        />
      </div>
      <div className="mt-5 flex-1">
        {/* key forces a fresh component (and state) per exercise */}
        <ExerciseHost key={`${index}-${started}`} exercise={exercise} onComplete={complete} />
      </div>
    </div>
  );
}
