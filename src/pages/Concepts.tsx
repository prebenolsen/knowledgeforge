// ============================================================
// Mental Models & Paradoxes — the activity page.
//
// A standalone "discover ideas" flow like the Timeline: pick a module, a
// difficulty (description / scenario / implication), and a round length, then
// identify concepts. Unlike a quiz, every question offers an "Explain" button
// that opens a full educational view — understanding is the point, not scoring.
//
// PHASE 1 — ARCHITECTURE ONLY. The screens, navigation, scoring, and Explain
// view are wired against the typed dataset (currently one reference concept).
// Modules with fewer than MIN_CONCEPTS_TO_PLAY concepts show as "coming soon"
// until the content pass fills them in.
// ============================================================

import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { localized } from '@/i18n';
import { Button, Card } from '@/components/ui';
import { ExplanationView } from '@/components/concepts/ExplanationView';
import {
  CONCEPT_MODULE_INFO,
  buildChoices,
  conceptName,
  conceptPrompt,
  conceptsInModule,
  countByModule,
  isModulePlayable,
  moduleById,
  shuffle,
  type ConceptChoice,
  type ConceptModuleInfo
} from '@/lib/concepts';
import { recordConceptAttempt, recordConceptSessionScore } from '@/lib/conceptsProgress';
import type { Concept, Difficulty } from '@/types';

const LENGTHS = [5, 10, 15] as const;
type Length = (typeof LENGTHS)[number] | 'all';

type Screen =
  | { name: 'module' }
  | { name: 'difficulty'; module: string }
  | { name: 'length'; module: string; difficulty: Difficulty }
  | { name: 'play'; module: string; difficulty: Difficulty; length: Length };

export default function ConceptsPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [screen, setScreen] = useState<Screen>({ name: 'module' });

  const counts = useMemo(() => countByModule(), []);

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

  // ---- Module picker ----
  if (screen.name === 'module') {
    return (
      <div className="flex min-h-full flex-col px-5 py-4">
        {header(t('concepts.title'), () => navigate('/'))}
        <h2 className="mb-1 font-display text-2xl">{t('concepts.chooseModule')}</h2>
        <p className="mb-4 text-sm text-mist-400">{t('concepts.tagline')}</p>
        <div className="grid grid-cols-2 gap-3">
          {CONCEPT_MODULE_INFO.map((m) => {
            const playable = isModulePlayable(m.id);
            return (
              <Card
                key={m.id}
                onClick={playable ? () => setScreen({ name: 'difficulty', module: m.id }) : undefined}
                className={playable ? '' : 'opacity-60'}
              >
                <div className="text-3xl">{m.emoji}</div>
                <div className="mt-2 font-medium leading-tight">{localized(m.name)}</div>
                <div className="text-sm text-mist-400">
                  {playable
                    ? t('concepts.conceptCount', { count: counts[m.id] ?? 0 })
                    : t('concepts.comingSoon')}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  // ---- Difficulty picker ----
  if (screen.name === 'difficulty') {
    const mod = moduleById(screen.module)!;
    const diffs: { key: Difficulty; emoji: string }[] = [
      { key: 'easy', emoji: '🟢' },
      { key: 'medium', emoji: '🟡' },
      { key: 'hard', emoji: '🔴' }
    ];
    return (
      <div className="flex min-h-full flex-col px-5 py-4">
        {header(localized(mod.name), () => setScreen({ name: 'module' }))}
        <h2 className="mb-4 font-display text-2xl">{t('concepts.chooseDifficulty')}</h2>
        <div className="space-y-3">
          {diffs.map((d) => (
            <Card
              key={d.key}
              onClick={() => setScreen({ name: 'length', module: screen.module, difficulty: d.key })}
            >
              <p className="text-lg font-medium">
                {d.emoji} {t(`difficulty.${d.key}`)}
              </p>
              <p className="text-sm text-mist-400">{t(`concepts.diffHint.${d.key}`)}</p>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // ---- Round-length picker ----
  if (screen.name === 'length') {
    const mod = moduleById(screen.module)!;
    const available = conceptsInModule(mod.id).length;
    const options = LENGTHS.filter((n) => n < available);
    return (
      <div className="flex min-h-full flex-col px-5 py-4">
        {header(localized(mod.name), () => setScreen({ name: 'difficulty', module: screen.module }))}
        <h2 className="mb-4 font-display text-2xl">{t('concepts.chooseLength')}</h2>
        <div className="grid grid-cols-2 gap-3">
          {options.map((n) => (
            <Card
              key={n}
              onClick={() =>
                setScreen({ name: 'play', module: screen.module, difficulty: screen.difficulty, length: n })
              }
            >
              <p className="text-center font-display text-2xl">{n}</p>
              <p className="text-center text-sm text-mist-400">{t('concepts.questions')}</p>
            </Card>
          ))}
          <Card
            onClick={() =>
              setScreen({ name: 'play', module: screen.module, difficulty: screen.difficulty, length: 'all' })
            }
          >
            <p className="text-center font-display text-2xl">{t('concepts.all')}</p>
            <p className="text-center text-sm text-mist-400">
              {t('concepts.conceptCount', { count: available })}
            </p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <GameRunner
      module={moduleById(screen.module)!}
      difficulty={screen.difficulty}
      length={screen.length}
      onBack={() => setScreen({ name: 'difficulty', module: screen.module })}
      onQuit={() => navigate('/')}
    />
  );
}

// ============================================================
// Game runner — one round of concept identification.
// ============================================================

interface RunnerProps {
  module: ConceptModuleInfo;
  difficulty: Difficulty;
  length: Length;
  onBack: () => void;
  onQuit: () => void;
}

function buildQueue(module: ConceptModuleInfo, length: Length): Concept[] {
  const all = shuffle(conceptsInModule(module.id));
  return length === 'all' ? all : all.slice(0, length);
}

function GameRunner({ module, difficulty, length, onBack, onQuit }: RunnerProps) {
  const { t } = useTranslation();
  const { session } = useAuth();
  const userId = session!.user.id;

  const [queue] = useState<Concept[]>(() => buildQueue(module, length));
  const [index, setIndex] = useState(0);
  const concept = queue[index];

  // Per-turn state.
  const [choices, setChoices] = useState<ConceptChoice[]>(() => buildChoices(concept));
  const [picked, setPicked] = useState<ConceptChoice | null>(null);
  const [explained, setExplained] = useState(false);
  const [showExplain, setShowExplain] = useState(false);

  // Session tallies.
  const [seen, setSeen] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  function pick(choice: ConceptChoice) {
    if (picked) return;
    setPicked(choice);
    setSeen((n) => n + 1);
    if (choice.correct) setCorrectCount((n) => n + 1);
    void recordConceptAttempt({
      userId,
      module: module.id,
      conceptId: concept.id,
      difficulty,
      isCorrect: choice.correct,
      explained
    });
  }

  function next() {
    const ni = index + 1;
    if (ni >= queue.length) {
      setFinished(true);
      return;
    }
    setIndex(ni);
    setChoices(buildChoices(queue[ni]));
    setPicked(null);
    setExplained(false);
    setShowExplain(false);
  }

  useEffect(() => {
    if (finished && seen > 0) {
      const score = seen ? Math.round((correctCount / seen) * 100) : 0;
      void recordConceptSessionScore({ userId, module: module.id, score });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  if (finished) {
    return (
      <Summary
        correct={correctCount}
        seen={seen}
        accuracy={seen ? Math.round((correctCount / seen) * 100) : 0}
        onAgain={() => {
          setIndex(0);
          setChoices(buildChoices(queue[0]));
          setPicked(null);
          setExplained(false);
          setShowExplain(false);
          setSeen(0);
          setCorrectCount(0);
          setFinished(false);
        }}
        onBack={onBack}
      />
    );
  }

  // Explain overlay — available before *and* after answering.
  if (showExplain) {
    return (
      <div className="flex min-h-full flex-col px-5 py-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-mist-300">{t('concepts.explain.title')}</span>
          <button onClick={() => setShowExplain(false)} className="text-sm text-mist-400">
            ✕
          </button>
        </div>
        <ExplanationView concept={concept} onClose={() => setShowExplain(false)} />
      </div>
    );
  }

  return (
    <div className="flex min-h-full flex-col px-5 py-4">
      <div className="mb-3 flex items-center justify-between">
        <button onClick={onBack} className="text-sm text-mist-400">
          ‹ {t('common.back')}
        </button>
        <span className="text-sm text-mist-300">
          {t('concepts.progress', { current: index + 1, total: queue.length })}
        </span>
        <button onClick={onQuit} className="text-sm text-mist-400">
          ✕
        </button>
      </div>

      <div className="space-y-4">
        <Card className="bg-ink-600">
          <p className="text-lg font-medium">{conceptPrompt(concept, difficulty)}</p>
        </Card>

        <div className="space-y-2">
          {choices.map((c) => {
            const state = !picked
              ? 'idle'
              : c.correct
                ? 'correct'
                : c === picked
                  ? 'wrong'
                  : 'idle';
            const tone =
              state === 'correct'
                ? 'border-good bg-good/15 text-good'
                : state === 'wrong'
                  ? 'border-bad bg-bad/15 text-bad'
                  : 'border-ink-500 text-mist-100 hover:bg-ink-700';
            return (
              <button
                key={c.concept.id}
                onClick={() => pick(c)}
                disabled={!!picked}
                className={`w-full rounded-card border px-4 py-3 text-left transition active:scale-[0.99] ${tone}`}
              >
                {conceptName(c.concept)}
              </button>
            );
          })}
        </div>

        {/* The "Explain" action — the heart of the activity, always available. */}
        <button
          onClick={() => {
            setExplained(true);
            setShowExplain(true);
          }}
          className="w-full rounded-card border border-ember-600/40 px-4 py-3 text-sm font-medium text-ember-400 transition active:scale-[0.99]"
        >
          💡 {t('concepts.explainAction')}
        </button>

        {picked && <Button onClick={next}>{index + 1 >= queue.length ? t('concepts.finish') : t('concepts.next')}</Button>}
      </div>
    </div>
  );
}

function Summary({
  correct,
  seen,
  accuracy,
  onAgain,
  onBack
}: {
  correct: number;
  seen: number;
  accuracy: number;
  onAgain: () => void;
  onBack: () => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-full flex-col justify-center px-5 py-8">
      <h2 className="mb-6 text-center font-display text-3xl">{t('concepts.summaryTitle')}</h2>
      <div className="space-y-3">
        <Card className="flex items-center justify-between">
          <span className="text-mist-300">{t('concepts.summaryCorrect')}</span>
          <span className="font-display text-2xl">
            {correct}/{seen}
          </span>
        </Card>
        <Card className="flex items-center justify-between">
          <span className="text-mist-300">{t('concepts.accuracy')}</span>
          <span className="font-display text-2xl text-ember-400">{accuracy}%</span>
        </Card>
      </div>
      <div className="mt-6 space-y-2">
        <Button onClick={onAgain}>{t('concepts.playAgain')}</Button>
        <Button variant="ghost" onClick={onBack}>
          {t('concepts.backToStart')}
        </Button>
      </div>
    </div>
  );
}
