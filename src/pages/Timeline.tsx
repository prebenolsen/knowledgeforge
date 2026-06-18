import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { localized } from '@/i18n';
import { Button, Card } from '@/components/ui';
import { Timeline, type TimelineMarker } from '@/components/timeline/Timeline';
import {
  PERIOD_SCOPES,
  REGION_SCOPES,
  applyHintPenalty,
  centuryLabel,
  countByScope,
  easyChoices,
  eventTitle,
  eventsInScope,
  formatEventDate,
  formatYear,
  hintCandidates,
  scopeBounds,
  scopeById,
  scoreForChoice,
  scoreForGuess,
  shuffle,
  type TimelineScope
} from '@/lib/timeline';
import { recordTimelineAttempt, recordTimelineSessionScore } from '@/lib/timelineProgress';
import type { Difficulty, TimelineEasyVariant, TimelineEvent } from '@/types';

// Round-length choices; "all" plays every event in the scope.
const LENGTHS = [5, 10, 15, 20] as const;
type Length = (typeof LENGTHS)[number] | 'all';

type Screen =
  | { name: 'scope' }
  | { name: 'difficulty'; scope: string }
  | { name: 'length'; scope: string; difficulty: Difficulty }
  | { name: 'play'; scope: string; difficulty: Difficulty; length: Length };

export default function TimelinePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [screen, setScreen] = useState<Screen>({ name: 'scope' });

  const counts = useMemo(() => countByScope(), []);

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

  // ---- Scope picker ----
  if (screen.name === 'scope') {
    const renderGrid = (scopes: TimelineScope[]) => (
      <div className="grid grid-cols-2 gap-3">
        {scopes.map((s) => (
          <Card key={s.id} onClick={() => setScreen({ name: 'difficulty', scope: s.id })}>
            <div className="text-3xl">{s.emoji}</div>
            <div className="mt-2 font-medium leading-tight">{localized(s.name)}</div>
            <div className="text-sm text-mist-400">{t('timeline.events', { count: counts[s.id] ?? 0 })}</div>
          </Card>
        ))}
      </div>
    );
    return (
      <div className="flex min-h-full flex-col px-5 py-4">
        {header(t('timeline.title'), () => navigate('/'))}
        <h2 className="mb-3 font-display text-2xl">{t('timeline.choosePeriod')}</h2>
        {renderGrid(PERIOD_SCOPES)}
        <h2 className="mb-3 mt-6 font-display text-2xl">{t('timeline.chooseRegion')}</h2>
        {renderGrid(REGION_SCOPES)}
      </div>
    );
  }

  // ---- Difficulty picker ----
  if (screen.name === 'difficulty') {
    const scope = scopeById(screen.scope)!;
    const diffs: { key: Difficulty; emoji: string }[] = [
      { key: 'easy', emoji: '🟢' },
      { key: 'medium', emoji: '🟡' },
      { key: 'hard', emoji: '🔴' }
    ];
    return (
      <div className="flex min-h-full flex-col px-5 py-4">
        {header(localized(scope.name), () => setScreen({ name: 'scope' }))}
        <h2 className="mb-4 font-display text-2xl">{t('timeline.chooseDifficulty')}</h2>
        <div className="space-y-3">
          {diffs.map((d) => (
            <Card key={d.key} onClick={() => setScreen({ name: 'length', scope: screen.scope, difficulty: d.key })}>
              <p className="text-lg font-medium">
                {d.emoji} {t(`difficulty.${d.key}`)}
              </p>
              <p className="text-sm text-mist-400">{t(`timeline.diffHint.${d.key}`)}</p>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // ---- Round-length picker ----
  if (screen.name === 'length') {
    const scope = scopeById(screen.scope)!;
    const available = eventsInScope(scope).length;
    const options = LENGTHS.filter((n) => n < available);
    return (
      <div className="flex min-h-full flex-col px-5 py-4">
        {header(localized(scope.name), () => setScreen({ name: 'difficulty', scope: screen.scope }))}
        <h2 className="mb-4 font-display text-2xl">{t('timeline.chooseLength')}</h2>
        <div className="grid grid-cols-2 gap-3">
          {options.map((n) => (
            <Card
              key={n}
              onClick={() => setScreen({ name: 'play', scope: screen.scope, difficulty: screen.difficulty, length: n })}
            >
              <p className="text-center font-display text-2xl">{n}</p>
              <p className="text-center text-sm text-mist-400">{t('timeline.questions')}</p>
            </Card>
          ))}
          <Card
            onClick={() => setScreen({ name: 'play', scope: screen.scope, difficulty: screen.difficulty, length: 'all' })}
          >
            <p className="text-center font-display text-2xl">{t('timeline.all')}</p>
            <p className="text-center text-sm text-mist-400">{t('timeline.events', { count: available })}</p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <GameRunner
      scope={scopeById(screen.scope)!}
      difficulty={screen.difficulty}
      length={screen.length}
      onBack={() => setScreen({ name: 'difficulty', scope: screen.scope })}
      onQuit={() => navigate('/')}
    />
  );
}

// ============================================================
// Game runner — one round of Timeline play.
// ============================================================

interface RunnerProps {
  scope: TimelineScope;
  difficulty: Difficulty;
  length: Length;
  onBack: () => void;
  onQuit: () => void;
}

function buildQueue(scope: TimelineScope, length: Length): TimelineEvent[] {
  const all = shuffle(eventsInScope(scope));
  return length === 'all' ? all : all.slice(0, length);
}

function pickVariant(): TimelineEasyVariant {
  return Math.random() < 0.5 ? 'century' : 'year';
}

function GameRunner({ scope, difficulty, length, onBack, onQuit }: RunnerProps) {
  const { t } = useTranslation();
  const { session } = useAuth();
  const userId = session!.user.id;

  const [queue] = useState<TimelineEvent[]>(() => buildQueue(scope, length));
  const bounds = useMemo(() => scopeBounds(scope), [scope]);

  const [index, setIndex] = useState(0);
  const event = queue[index];

  // Per-turn interaction state.
  const [variant, setVariant] = useState<TimelineEasyVariant>(() => pickVariant());
  const [guessYear, setGuessYear] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [revealed, setRevealed] = useState<{ score: number; exact: boolean } | null>(null);

  // Session tallies.
  const [seen, setSeen] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [exactCount, setExactCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const choices = useMemo(
    () => (difficulty === 'easy' ? easyChoices(event, variant) : []),
    [event, variant, difficulty]
  );
  const hints = useMemo(
    () => (difficulty === 'easy' ? [] : hintCandidates(event, bounds)),
    [event, difficulty, bounds]
  );

  function resetTurn() {
    setVariant(pickVariant());
    setGuessYear(null);
    setShowHint(false);
    setHintUsed(false);
    setRevealed(null);
  }

  function commit(guess: number, baseScore: number) {
    const score = hintUsed ? applyHintPenalty(baseScore) : baseScore;
    const exact = baseScore === 100 && !hintUsed;
    setGuessYear(guess);
    setRevealed({ score, exact });
    setSeen((n) => n + 1);
    setTotalScore((s) => s + score);
    if (exact) setExactCount((n) => n + 1);
    void recordTimelineAttempt({
      userId,
      scope: scope.id,
      eventId: event.id,
      difficulty,
      score,
      isCorrect: exact,
      hintsUsed: hintUsed ? 1 : 0
    });
  }

  function submitGuess() {
    if (revealed || guessYear == null) return;
    commit(guessYear, scoreForGuess(difficulty, guessYear, event));
  }

  function next() {
    const ni = index + 1;
    if (ni >= queue.length) {
      setFinished(true);
      return;
    }
    setIndex(ni);
    resetTurn();
  }

  useEffect(() => {
    if (finished && seen > 0) {
      void recordTimelineSessionScore({ userId, scope: scope.id, score: totalScore });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  if (finished) {
    const max = seen * 100;
    return (
      <Summary
        score={totalScore}
        seen={seen}
        exact={exactCount}
        accuracy={max ? Math.round((totalScore / max) * 100) : 0}
        onAgain={() => {
          setIndex(0);
          setSeen(0);
          setTotalScore(0);
          setExactCount(0);
          setFinished(false);
          resetTurn();
        }}
        onBack={onBack}
      />
    );
  }

  const prompt =
    difficulty === 'easy'
      ? variant === 'century'
        ? t('timeline.promptCentury', { event: eventTitle(event) })
        : t('timeline.promptYear', { event: eventTitle(event) })
      : difficulty === 'medium'
        ? t('timeline.promptPlace')
        : t('timeline.promptHard', { event: eventTitle(event) });

  return (
    <div className="flex min-h-full flex-col px-5 py-4">
      <div className="mb-3 flex items-center justify-between">
        <button onClick={onBack} className="text-sm text-mist-400">
          ‹ {t('common.back')}
        </button>
        <span className="text-sm text-mist-300">
          {t('timeline.progress', { current: index + 1, total: queue.length })}
        </span>
        <button onClick={onQuit} className="text-sm text-mist-400">
          ✕
        </button>
      </div>

      {revealed ? (
        <Review
          event={event}
          guessYear={guessYear}
          score={revealed.score}
          bounds={bounds}
          isLast={index + 1 >= queue.length}
          onNext={next}
        />
      ) : (
        <div className="space-y-4">
          <Card className="bg-ink-600">
            <p className="text-lg font-medium">{prompt}</p>
            {difficulty === 'medium' && <p className="mt-1 text-xl font-display text-ember-400">{eventTitle(event)}</p>}
          </Card>

          {/* ---- Easy: multiple choice ---- */}
          {difficulty === 'easy' && (
            <div className="grid grid-cols-2 gap-3">
              {choices.map((c) => (
                <button
                  key={c.year}
                  onClick={() => commit(c.year, scoreForChoice(c.correct))}
                  className="rounded-card bg-ink-700 px-3 py-5 text-center font-display text-xl transition active:scale-[0.98] hover:bg-ink-600"
                >
                  {variant === 'century' ? centuryLabel(c.year) : formatYear(c.year)}
                </button>
              ))}
            </div>
          )}

          {/* ---- Medium: drag on the timeline OR type a year ---- */}
          {difficulty === 'medium' && (
            <>
              <Timeline bounds={bounds} draggable value={guessYear} onChange={setGuessYear} />
              <p className="text-center text-sm text-mist-400">
                {guessYear == null ? t('timeline.dragHint') : formatYear(guessYear)}
              </p>
              <YearInput bounds={bounds} value={guessYear} onChange={setGuessYear} />
            </>
          )}

          {/* ---- Hard: type a year ---- */}
          {difficulty === 'hard' && <YearInput bounds={bounds} value={guessYear} onChange={setGuessYear} autoFocus />}

          {/* ---- Hint (medium/hard) ---- */}
          {difficulty !== 'easy' && (
            <>
              {showHint && (
                <div className="grid grid-cols-2 gap-2">
                  {hints.map((y, i) => (
                    <button
                      key={y}
                      onClick={() => setGuessYear(y)}
                      className="rounded-card border border-ink-500 px-3 py-2 text-sm text-mist-100 transition active:scale-[0.98]"
                    >
                      {String.fromCharCode(65 + i)}) {formatYear(y)}
                    </button>
                  ))}
                </div>
              )}
              <div className="flex gap-2">
                {!showHint && (
                  <button
                    onClick={() => {
                      setShowHint(true);
                      setHintUsed(true);
                    }}
                    className="flex-1 rounded-card border border-ink-500 px-3 py-2 text-sm text-mist-200 transition active:scale-[0.98]"
                  >
                    💡 {t('timeline.hint')}
                  </button>
                )}
                <Button className="flex-1" onClick={submitGuess} disabled={guessYear == null}>
                  {t('timeline.submit')}
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// A year entry field with a BCE/CE toggle (shown only when the scope reaches
// into BCE). Keeps a single signed-year source of truth.
function YearInput({
  bounds,
  value,
  onChange,
  autoFocus
}: {
  bounds: [number, number];
  value: number | null;
  onChange: (year: number) => void;
  autoFocus?: boolean;
}) {
  const { t } = useTranslation();
  const allowBce = bounds[0] < 0;
  const bce = value != null && value < 0;
  const abs = value == null ? '' : String(Math.abs(value));

  function setAbs(raw: string) {
    const n = parseInt(raw.replace(/[^0-9]/g, ''), 10);
    if (Number.isNaN(n)) return;
    onChange(bce ? -n : n);
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-2"
    >
      <input
        autoFocus={autoFocus}
        inputMode="numeric"
        value={abs}
        onChange={(e) => setAbs(e.target.value)}
        placeholder={t('timeline.yearPlaceholder')}
        className="flex-1 rounded-card border border-ink-500 bg-ink-700 px-4 py-3 text-mist-100 outline-none focus:border-ember-500"
      />
      {allowBce && (
        <button
          type="button"
          onClick={() => {
            const n = value == null ? 0 : Math.abs(value);
            onChange(bce ? n : -n);
          }}
          className={`rounded-card border px-4 text-sm font-medium ${
            bce ? 'border-ember-500 bg-ember-500/15 text-ember-400' : 'border-ink-500 text-mist-300'
          }`}
        >
          {bce ? t('timeline.bce') : t('timeline.ce')}
        </button>
      )}
    </form>
  );
}

// Post-answer review: result, full event detail, and the timeline visualization
// highlighting the correct year vs the player's guess.
function Review({
  event,
  guessYear,
  score,
  bounds,
  isLast,
  onNext
}: {
  event: TimelineEvent;
  guessYear: number | null;
  score: number;
  bounds: [number, number];
  isLast: boolean;
  onNext: () => void;
}) {
  const { t } = useTranslation();
  const good = score >= 50;

  const markers: TimelineMarker[] = [{ year: event.year, tone: 'correct', label: formatYear(event.year) }];
  if (guessYear != null && guessYear !== event.year) {
    markers.push({ year: guessYear, tone: 'user', label: formatYear(guessYear) });
  }

  return (
    <div className="space-y-4">
      <div className={`rounded-card p-4 text-center ${good ? 'bg-good/15 text-good' : 'bg-bad/15 text-bad'}`}>
        <p className="font-display text-xl">
          {score === 100 ? t('timeline.exact') : good ? t('timeline.close') : t('timeline.miss')}
        </p>
        <p className="mt-1 text-sm text-mist-300">+{score}</p>
        {guessYear != null && (
          <p className="mt-1 text-sm text-mist-200">{t('timeline.youSaid', { year: formatYear(guessYear) })}</p>
        )}
      </div>

      <Card>
        <p className="font-display text-xl">{eventTitle(event)}</p>
        <p className="mt-1 font-display text-2xl text-ember-400">{formatEventDate(event)}</p>
        <p className="mt-3 text-sm text-mist-200">{localized(event.description)}</p>
        <p className="mt-2 text-sm text-mist-400">{localized(event.significance)}</p>
      </Card>

      <div className="rounded-card bg-ink-800 p-2">
        <Timeline bounds={bounds} markers={markers} disabled />
      </div>

      <Button onClick={onNext}>{isLast ? t('timeline.finish') : t('timeline.next')}</Button>
    </div>
  );
}

function Summary({
  score,
  seen,
  exact,
  accuracy,
  onAgain,
  onBack
}: {
  score: number;
  seen: number;
  exact: number;
  accuracy: number;
  onAgain: () => void;
  onBack: () => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-full flex-col justify-center px-5 py-8">
      <h2 className="mb-6 text-center font-display text-3xl">{t('timeline.summaryTitle')}</h2>
      <div className="space-y-3">
        <Card className="flex items-center justify-between">
          <span className="text-mist-300">{t('timeline.summaryScore')}</span>
          <span className="font-display text-2xl text-ember-400">{score}</span>
        </Card>
        <Card className="flex items-center justify-between">
          <span className="text-mist-300">{t('timeline.summaryExact')}</span>
          <span className="font-display text-2xl">
            {exact}/{seen}
          </span>
        </Card>
        <Card className="flex items-center justify-between">
          <span className="text-mist-300">{t('timeline.accuracy')}</span>
          <span className="font-display text-2xl">{accuracy}%</span>
        </Card>
      </div>
      <div className="mt-6 space-y-2">
        <Button onClick={onAgain}>{t('timeline.playAgain')}</Button>
        <Button variant="ghost" onClick={onBack}>
          {t('timeline.backToStart')}
        </Button>
      </div>
    </div>
  );
}
