// ============================================================
// Language Learning — exercise rendering.
//
// One component per exercise kind plus a host that switches on `exercise.type`.
// Each exercise is self-contained: it shows the prompt, handles the answer and
// feedback, and calls `onComplete(result)` when the learner advances. Styling
// follows the Concepts answer-button idiom (border-good / border-bad / ember).
// ============================================================

import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { localized } from '@/i18n';
import { Button } from '@/components/ui';
import { fuzzyAccept } from '@/lib/lang/scoring';
import type { Exercise, ExerciseResult, SentenceComponent } from '@/types';

interface HostProps {
  exercise: Exercise;
  onComplete: (r: ExerciseResult) => void;
}

export function ExerciseHost({ exercise, onComplete }: HostProps) {
  switch (exercise.type) {
    case 'flashcard':
      return <Flashcard ex={exercise} onComplete={onComplete} />;
    case 'multiple-choice':
      return <MultipleChoice ex={exercise} onComplete={onComplete} />;
    case 'typing':
      return <TypingInput ex={exercise} onComplete={onComplete} />;
    case 'matching':
      return <MatchingGrid ex={exercise} onComplete={onComplete} />;
    case 'sentence-build':
      return <SentenceBuilder ex={exercise} onComplete={onComplete} />;
    default:
      return null;
  }
}

// ---- Flashcard (self-graded) -------------------------------

function Flashcard({ ex, onComplete }: { ex: Extract<Exercise, { type: 'flashcard' }>; onComplete: (r: ExerciseResult) => void }) {
  const { t } = useTranslation();
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="space-y-4">
      <p className="text-sm text-mist-400">{t('language.ex.flashcardHint')}</p>
      <button
        onClick={() => setRevealed(true)}
        className="min-h-[8rem] w-full rounded-card bg-ink-600 p-6 text-center transition active:scale-[0.99]"
      >
        <div className="font-display text-3xl">{ex.front}</div>
        {revealed ? (
          <>
            <div className="mt-3 text-xl text-ember-400">{ex.back}</div>
            {ex.example && <div className="mt-2 text-sm text-mist-400">{ex.example}</div>}
          </>
        ) : (
          <div className="mt-3 text-sm text-mist-500">{t('language.ex.tapReveal')}</div>
        )}
      </button>

      {revealed && (
        <div className="grid grid-cols-2 gap-3">
          <Button variant="ghost" onClick={() => onComplete({ type: 'flashcard', correct: false, vocabTouched: [ex.vocabId] })}>
            {t('language.ex.missed')}
          </Button>
          <Button onClick={() => onComplete({ type: 'flashcard', correct: true, vocabTouched: [ex.vocabId] })}>
            {t('language.ex.gotIt')}
          </Button>
        </div>
      )}
    </div>
  );
}

// ---- Multiple choice ---------------------------------------

function MultipleChoice({ ex, onComplete }: { ex: Extract<Exercise, { type: 'multiple-choice' }>; onComplete: (r: ExerciseResult) => void }) {
  const { t } = useTranslation();
  const [picked, setPicked] = useState<number | null>(null);
  const correct = picked != null && ex.options[picked].correct;

  return (
    <div className="space-y-4">
      <p className="text-sm text-mist-400">{t('language.ex.choosePrompt')}</p>
      <div className="rounded-card bg-ink-600 p-5 text-center font-display text-2xl">{ex.prompt}</div>
      <div className="space-y-2">
        {ex.options.map((o, i) => {
          const state = picked == null ? 'idle' : o.correct ? 'correct' : i === picked ? 'wrong' : 'idle';
          const tone =
            state === 'correct'
              ? 'border-good bg-good/15 text-good'
              : state === 'wrong'
                ? 'border-bad bg-bad/15 text-bad'
                : 'border-ink-500 text-mist-100 hover:bg-ink-700';
          return (
            <button
              key={i}
              disabled={picked != null}
              onClick={() => setPicked(i)}
              className={`w-full rounded-card border px-4 py-3 text-left transition active:scale-[0.99] ${tone}`}
            >
              {o.text}
            </button>
          );
        })}
      </div>
      {picked != null && (
        <Button onClick={() => onComplete({ type: 'multiple-choice', correct, vocabTouched: [ex.vocabId] })}>
          {t('language.ex.next')}
        </Button>
      )}
    </div>
  );
}

// ---- Typing (fuzzy-graded) ---------------------------------

function TypingInput({ ex, onComplete }: { ex: Extract<Exercise, { type: 'typing' }>; onComplete: (r: ExerciseResult) => void }) {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const [result, setResult] = useState<{ correct: boolean; partial: number } | null>(null);

  function submit() {
    if (result) return;
    setResult(fuzzyAccept(value, ex.accept));
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-mist-400">{t('language.ex.typePrompt')}</p>
      <div className="rounded-card bg-ink-600 p-5 text-center font-display text-2xl">{ex.prompt}</div>
      <input
        autoFocus
        value={value}
        disabled={!!result}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
        placeholder={t('language.ex.typePlaceholder')}
        className="w-full rounded-card border border-ink-500 bg-ink-700 px-4 py-3 text-lg outline-none focus:border-ember-500"
      />
      {result ? (
        <>
          <div className={`rounded-card p-3 text-center ${result.correct ? 'bg-good/15 text-good' : 'bg-bad/15 text-bad'}`}>
            {result.correct ? t('language.ex.correct') : t('language.ex.incorrect')}
            <div className="mt-1 text-sm text-mist-300">{t('language.ex.answerWas', { answer: ex.accept[0] })}</div>
          </div>
          <Button onClick={() => onComplete({ type: 'typing', correct: result.correct, partial: result.partial, vocabTouched: [ex.vocabId] })}>
            {t('language.ex.next')}
          </Button>
        </>
      ) : (
        <Button onClick={submit} disabled={!value.trim()}>
          {t('language.ex.check')}
        </Button>
      )}
    </div>
  );
}

// ---- Matching (Duolingo-style) -----------------------------

function MatchingGrid({ ex, onComplete }: { ex: Extract<Exercise, { type: 'matching' }>; onComplete: (r: ExerciseResult) => void }) {
  const { t } = useTranslation();
  const terms = useMemo(() => shuffleLocal(ex.pairs.map((p) => ({ id: p.vocabId, text: p.term }))), [ex]);
  const translations = useMemo(() => shuffleLocal(ex.pairs.map((p) => ({ id: p.vocabId, text: p.translation }))), [ex]);

  const [selTerm, setSelTerm] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState(0);

  function clickTranslation(id: string) {
    if (!selTerm || matched.has(id)) return;
    if (id === selTerm) {
      const next = new Set(matched);
      next.add(id);
      setMatched(next);
      setSelTerm(null);
      if (next.size === ex.pairs.length) {
        onComplete({ type: 'matching', correct: mistakes === 0, vocabTouched: ex.pairs.map((p) => p.vocabId) });
      }
    } else {
      setMistakes((m) => m + 1);
      setWrong(id);
      setTimeout(() => setWrong(null), 400);
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-mist-400">{t('language.ex.matchPrompt')}</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {terms.map((tm) => (
            <button
              key={tm.id}
              disabled={matched.has(tm.id)}
              onClick={() => setSelTerm(tm.id)}
              className={`w-full rounded-card border px-3 py-3 text-center transition ${
                matched.has(tm.id)
                  ? 'border-good/40 bg-good/10 text-good/60'
                  : selTerm === tm.id
                    ? 'border-ember-500 bg-ember-500/15 text-ember-400'
                    : 'border-ink-500 text-mist-100 hover:bg-ink-700'
              }`}
            >
              {tm.text}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {translations.map((tr) => (
            <button
              key={tr.id}
              disabled={matched.has(tr.id)}
              onClick={() => clickTranslation(tr.id)}
              className={`w-full rounded-card border px-3 py-3 text-center transition ${
                matched.has(tr.id)
                  ? 'border-good/40 bg-good/10 text-good/60'
                  : wrong === tr.id
                    ? 'border-bad bg-bad/15 text-bad'
                    : 'border-ink-500 text-mist-100 hover:bg-ink-700'
              }`}
            >
              {tr.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---- Sentence builder --------------------------------------

function SentenceBuilder({ ex, onComplete }: { ex: Extract<Exercise, { type: 'sentence-build' }>; onComplete: (r: ExerciseResult) => void }) {
  const { t } = useTranslation();
  const byId = useMemo(() => {
    const m: Record<string, SentenceComponent> = {};
    for (const c of ex.bank) m[c.id] = c;
    return m;
  }, [ex]);

  const [order, setOrder] = useState<string[]>([]);
  const [result, setResult] = useState<boolean | null>(null);

  const used = new Set(order);
  const vocabTouched = ex.bank.map((c) => c.vocabId).filter((v): v is string => !!v);

  function add(id: string) {
    if (result != null || used.has(id)) return;
    setOrder((o) => [...o, id]);
  }
  function removeAt(i: number) {
    if (result != null) return;
    setOrder((o) => o.filter((_, idx) => idx !== i));
  }
  function check() {
    const ok = order.length === ex.answer.length && order.every((id, i) => id === ex.answer[i]);
    setResult(ok);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-mist-400">{t('language.ex.buildPrompt')}</p>
      <div className="rounded-card bg-ink-600 p-4 text-center text-lg text-mist-200">“{ex.prompt}”</div>

      {/* Answer line */}
      <div className="flex min-h-[3.5rem] flex-wrap items-center gap-2 rounded-card border border-dashed border-ink-500 p-3">
        {order.length === 0 && <span className="text-sm text-mist-500">{t('language.ex.buildHint')}</span>}
        {order.map((id, i) => (
          <button
            key={`${id}-${i}`}
            onClick={() => removeAt(i)}
            className="rounded-full bg-ember-500/20 px-3 py-1.5 text-ember-300"
          >
            {byId[id]?.term}
          </button>
        ))}
      </div>

      {/* Word bank */}
      <div className="flex flex-wrap gap-2">
        {ex.bank.map((c) => (
          <button
            key={c.id}
            disabled={used.has(c.id) || result != null}
            onClick={() => add(c.id)}
            className={`rounded-full border px-3 py-1.5 transition ${
              used.has(c.id) ? 'border-ink-600 text-ink-500' : 'border-ink-500 text-mist-100 hover:bg-ink-700'
            }`}
            title={localized(c.translation)}
          >
            {c.term}
          </button>
        ))}
      </div>

      {result != null ? (
        <>
          <div className={`rounded-card p-3 text-center ${result ? 'bg-good/15 text-good' : 'bg-bad/15 text-bad'}`}>
            {result ? t('language.ex.correct') : t('language.ex.incorrect')}
            {!result && (
              <div className="mt-1 text-sm text-mist-300">{ex.answer.map((id) => byId[id]?.term).join(' ')}</div>
            )}
          </div>
          <Button onClick={() => onComplete({ type: 'sentence-build', correct: result, vocabTouched })}>
            {t('language.ex.next')}
          </Button>
        </>
      ) : (
        <Button onClick={check} disabled={order.length === 0}>
          {t('language.ex.check')}
        </Button>
      )}
    </div>
  );
}

// Local Fisher-Yates (kept here so exercise components have no cross-imports).
function shuffleLocal<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
