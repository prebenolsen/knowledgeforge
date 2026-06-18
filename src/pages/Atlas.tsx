import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { localized } from '@/i18n';
import { recordGeoAttempt, recordGeoSessionScore } from '@/lib/geoProgress';
import { Button, Card } from '@/components/ui';
import { CountryMap, type CountryStatus } from '@/components/geo/CountryMap';
import {
  CONTINENTS,
  countriesIn,
  countByContinent,
  displayName,
  gradeAnswer,
  cardOptions,
  letterHint,
  scoreFor,
  shuffle,
  type GeoCountry
} from '@/lib/geo';

type Mode = 'explore' | 'quiz';
type Screen =
  | { name: 'continent' }
  | { name: 'mode'; continent: string }
  | { name: 'play'; continent: string; mode: Mode };

export default function Atlas() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [screen, setScreen] = useState<Screen>({ name: 'continent' });

  const counts = useMemo(() => countByContinent(), []);

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

  if (screen.name === 'continent') {
    return (
      <div className="flex min-h-full flex-col px-5 py-4">
        {header(t('geo.title'), () => navigate('/'))}
        <h2 className="mb-4 font-display text-2xl">{t('geo.chooseContinent')}</h2>
        <div className="grid grid-cols-2 gap-3">
          {CONTINENTS.map((c) => (
            <Card key={c.key} onClick={() => setScreen({ name: 'mode', continent: c.key })}>
              <div className="text-3xl">{c.emoji}</div>
              <div className="mt-2 font-medium">{localized(c.name)}</div>
              <div className="text-sm text-mist-400">{t('geo.countries', { count: counts[c.key] ?? 0 })}</div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (screen.name === 'mode') {
    const meta = CONTINENTS.find((c) => c.key === screen.continent)!;
    return (
      <div className="flex min-h-full flex-col px-5 py-4">
        {header(localized(meta.name), () => setScreen({ name: 'continent' }))}
        <h2 className="mb-4 font-display text-2xl">{t('geo.chooseMode')}</h2>
        <div className="space-y-3">
          <Card onClick={() => setScreen({ name: 'play', continent: screen.continent, mode: 'explore' })}>
            <p className="text-lg font-medium">👆 {t('geo.modeExplore')}</p>
            <p className="text-sm text-mist-400">{t('geo.modeExploreHint')}</p>
          </Card>
          <Card onClick={() => setScreen({ name: 'play', continent: screen.continent, mode: 'quiz' })}>
            <p className="text-lg font-medium">🎯 {t('geo.modeQuiz')}</p>
            <p className="text-sm text-mist-400">{t('geo.modeQuizHint')}</p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <GameRunner
      continent={screen.continent}
      mode={screen.mode}
      onBack={() => setScreen({ name: 'mode', continent: screen.continent })}
      onQuit={() => navigate('/')}
    />
  );
}

// ============================================================
// Game runner — shared by Explore and Quiz modes.
// ============================================================

interface RunnerProps {
  continent: string;
  mode: Mode;
  onBack: () => void;
  onQuit: () => void;
}

function GameRunner({ continent, mode, onBack, onQuit }: RunnerProps) {
  const { t } = useTranslation();
  const { session } = useAuth();
  const userId = session!.user.id;

  const all = useMemo(() => countriesIn(continent), [continent]);
  const quizable = useMemo(() => new Set(all.map((c) => c.iso3)), [all]);
  // Quiz mode walks a fixed shuffled queue; explore picks targets by tapping.
  const queue = useMemo(() => (mode === 'quiz' ? shuffle(all) : []), [mode, all]);

  const [index, setIndex] = useState(0); // quiz position
  const [target, setTarget] = useState<GeoCountry | null>(mode === 'quiz' ? queue[0] ?? null : null);

  // Per-target interaction state.
  const [guess, setGuess] = useState('');
  const [letters, setLetters] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const [usedCards, setUsedCards] = useState(false);
  const [revealed, setRevealed] = useState<{ correct: boolean; awarded: number } | null>(null);

  // Session tallies.
  const [seen, setSeen] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  // Countries answered correctly this session — kept green on the map (Explore).
  const [solved, setSolved] = useState<Set<string>>(new Set());

  function resetTurn() {
    setGuess('');
    setLetters(0);
    setShowCards(false);
    setUsedCards(false);
    setRevealed(null);
  }

  function pickTarget(iso3: string) {
    // Map stays live: a country already answered correctly is locked in (green),
    // but any other country can be tapped to start a new turn — even mid-feedback.
    if (solved.has(iso3)) return;
    const c = all.find((x) => x.iso3 === iso3);
    if (c) {
      resetTurn();
      setTarget(c);
    }
  }

  function submit(answer: string) {
    if (!target || revealed) return;
    const { correct } = gradeAnswer(answer, target);
    const awarded = correct ? scoreFor({ lettersRevealed: letters, usedCards }) : 0;
    setRevealed({ correct, awarded });
    setSeen((n) => n + 1);
    if (correct) {
      setCorrectCount((n) => n + 1);
      setScore((s) => s + awarded);
      setSolved((prev) => new Set(prev).add(target.iso3));
    }
    // Persist the attempt (fire-and-forget — never block the UI on the network).
    void recordGeoAttempt({
      userId,
      continent,
      iso3: target.iso3,
      mode,
      isCorrect: correct,
      hintsUsed: letters + (usedCards ? 1 : 0)
    });
  }

  function next() {
    if (mode === 'quiz') {
      const ni = index + 1;
      if (ni >= queue.length) {
        setFinished(true);
        return;
      }
      setIndex(ni);
      setTarget(queue[ni]);
      resetTurn();
    } else {
      // Explore: clear the target, wait for the next tap.
      setTarget(null);
      resetTurn();
    }
  }

  // When a session ends (quiz finishes its queue, or Explore is finished),
  // persist its score — geo_progress keeps the best per continent.
  useEffect(() => {
    if (finished && seen > 0) {
      void recordGeoSessionScore({ userId, continent, score });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  // ---- Map status overrides ----
  const status: Record<string, CountryStatus> = {};
  // In Explore, every country solved this session stays green.
  if (mode === 'explore') {
    for (const iso of solved) status[iso] = 'correct';
  }
  if (target) {
    status[target.iso3] = revealed ? (revealed.correct ? 'correct' : 'wrong') : mode === 'quiz' ? 'highlight' : 'selected';
  }

  if (finished) {
    return (
      <Summary
        seen={seen}
        correct={correctCount}
        score={score}
        onAgain={() => {
          setIndex(0);
          setTarget(mode === 'quiz' ? shuffle(all)[0] ?? null : null);
          setSeen(0);
          setCorrectCount(0);
          setScore(0);
          setSolved(new Set());
          setFinished(false);
          resetTurn();
        }}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="flex min-h-full flex-col px-5 py-4">
      <div className="mb-3 flex items-center justify-between">
        <button onClick={onBack} className="text-sm text-mist-400">
          ‹ {t('common.back')}
        </button>
        <span className="text-sm text-mist-300">
          {mode === 'quiz'
            ? t('geo.questionProgress', { current: Math.min(index + 1, queue.length), total: queue.length })
            : t('geo.score', { score })}
        </span>
        <button onClick={onQuit} className="text-sm text-mist-400">
          ✕
        </button>
      </div>

      <div className="mb-4 overflow-hidden rounded-card bg-ink-800 p-2">
        <CountryMap
          continent={continent}
          quizable={quizable}
          status={status}
          onPick={mode === 'explore' ? pickTarget : undefined}
        />
      </div>

      {mode === 'explore' && !target && (
        <div className="space-y-4 py-6 text-center">
          <p className="text-mist-300">{t('geo.tapPrompt')}</p>
          {seen > 0 && (
            <Button variant="ghost" onClick={() => setFinished(true)}>
              {t('geo.finish')}
            </Button>
          )}
        </div>
      )}

      {target && (
        <div className="space-y-3">
          {revealed ? (
            <Feedback
              correct={revealed.correct}
              awarded={revealed.awarded}
              name={displayName(target)}
              isLast={mode === 'quiz' && index + 1 >= queue.length}
              onNext={next}
            />
          ) : (
            <>
              {letters > 0 && (
                <p className="text-center font-display text-2xl tracking-[0.3em] text-ember-400">
                  {letterHint(target, letters)}
                </p>
              )}

              {showCards ? (
                <div className="grid grid-cols-2 gap-2">
                  {cardOptions(target).map((opt) => (
                    <button
                      key={opt.iso3}
                      onClick={() => submit(displayName(opt))}
                      className="rounded-card bg-ink-600 px-3 py-3 text-sm transition active:scale-[0.98]"
                    >
                      {displayName(opt)}
                    </button>
                  ))}
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submit(guess);
                  }}
                  className="space-y-3"
                >
                  <input
                    autoFocus
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder={t('geo.placeholder')}
                    className="w-full rounded-card border border-ink-500 bg-ink-700 px-4 py-3 text-mist-100 outline-none focus:border-ember-500"
                  />
                  <Button type="submit" disabled={!guess.trim()}>
                    {t('geo.submit')}
                  </Button>
                </form>
              )}

              <div className="flex gap-2">
                <button
                  onClick={() => setLetters((n) => n + 1)}
                  className="flex-1 rounded-card border border-ink-500 px-3 py-2 text-sm text-mist-200 transition active:scale-[0.98]"
                >
                  💡 {letters === 0 ? t('geo.hintLetter') : t('geo.hintNextLetter')}
                </button>
                {!showCards && (
                  <button
                    onClick={() => {
                      setShowCards(true);
                      setUsedCards(true);
                    }}
                    className="flex-1 rounded-card border border-ink-500 px-3 py-2 text-sm text-mist-200 transition active:scale-[0.98]"
                  >
                    🃏 {t('geo.hintCards')}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function Feedback({
  correct,
  awarded,
  name,
  isLast,
  onNext
}: {
  correct: boolean;
  awarded: number;
  name: string;
  isLast: boolean;
  onNext: () => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="space-y-3">
      <div className={`rounded-card p-4 text-center ${correct ? 'bg-good/15 text-good' : 'bg-bad/15 text-bad'}`}>
        <p className="font-display text-xl">{correct ? t('geo.correct') : t('geo.incorrect')}</p>
        <p className="mt-1 text-mist-200">{t('geo.answerWas', { name })}</p>
        {correct && <p className="mt-1 text-sm text-mist-300">+{awarded}</p>}
      </div>
      <Button onClick={onNext}>{isLast ? t('geo.finish') : t('geo.next')}</Button>
    </div>
  );
}

function Summary({
  seen,
  correct,
  score,
  onAgain,
  onBack
}: {
  seen: number;
  correct: number;
  score: number;
  onAgain: () => void;
  onBack: () => void;
}) {
  const { t } = useTranslation();
  const accuracy = seen ? Math.round((correct / seen) * 100) : 0;
  return (
    <div className="flex min-h-full flex-col justify-center px-5 py-8">
      <h2 className="mb-6 text-center font-display text-3xl">{t('geo.summaryTitle')}</h2>
      <div className="space-y-3">
        <Card className="flex items-center justify-between">
          <span className="text-mist-300">{t('geo.summaryScore')}</span>
          <span className="font-display text-2xl text-ember-400">{score}</span>
        </Card>
        <Card className="flex items-center justify-between">
          <span className="text-mist-300">{t('geo.summarySeen')}</span>
          <span className="font-display text-2xl">{seen}</span>
        </Card>
        <Card className="flex items-center justify-between">
          <span className="text-mist-300">{t('geo.accuracy')}</span>
          <span className="font-display text-2xl">{accuracy}%</span>
        </Card>
      </div>
      <div className="mt-6 space-y-2">
        <Button onClick={onAgain}>{t('geo.playAgain')}</Button>
        <Button variant="ghost" onClick={onBack}>
          {t('geo.backContinents')}
        </Button>
      </div>
    </div>
  );
}
