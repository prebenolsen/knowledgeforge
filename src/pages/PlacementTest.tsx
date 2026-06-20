import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabase';
import { fetchPlacementQuestions, recordAnswer } from '@/lib/questionLoader';
import { localized } from '@/i18n';
import type { Difficulty, Question, PlacementResult } from '@/types';
import { DIFFICULTIES } from '@/types';
import { Button, Card, Spinner, MasteryBar } from '@/components/ui';
import { AnswerGrid, ExplanationPanel, QuestionHeader } from '@/components/quiz/QuizParts';

type Phase = 'intro' | 'loading' | 'running' | 'result';

export function PlacementTest() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { session, refreshProfile } = useAuth();

  const [phase, setPhase] = useState<Phase>('intro');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [start, setStart] = useState(Date.now());
  const [tally, setTally] = useState<Record<Difficulty, { seen: number; correct: number }>>({
    easy: { seen: 0, correct: 0 },
    medium: { seen: 0, correct: 0 },
    hard: { seen: 0, correct: 0 }
  });

  async function begin() {
    setPhase('loading');
    const qs = await fetchPlacementQuestions();
    setQuestions(qs);
    setStart(Date.now());
    setPhase('running');
  }

  async function select(choice: number) {
    if (answered) return;
    const q = questions[idx];
    const isCorrect = choice === q.correct_index;
    setSelected(choice);
    setAnswered(true);
    setTally((prev) => ({
      ...prev,
      [q.difficulty]: {
        seen: prev[q.difficulty].seen + 1,
        correct: prev[q.difficulty].correct + (isCorrect ? 1 : 0)
      }
    }));
    try {
      await recordAnswer({
        userId: session!.user.id,
        question: q,
        selectedIndex: choice,
        timeMs: Date.now() - start
      });
    } catch (e) {
      console.error(e);
    }
  }

  function next() {
    if (idx >= questions.length - 1) {
      void finish();
      return;
    }
    setSelected(null);
    setAnswered(false);
    setStart(Date.now());
    setIdx((i) => i + 1);
  }

  async function finish() {
    await supabase.from('knowledgeforge_profiles').update({ placement_complete: true }).eq('id', session!.user.id);
    await refreshProfile();
    setPhase('result');
  }

  if (phase === 'intro') {
    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-10">
        <div className="mb-4 text-6xl">🎯</div>
        <h1 className="font-display text-3xl font-bold">{t('placement.title')}</h1>
        <p className="mt-3 text-mist-300">{t('placement.intro')}</p>
        <div className="mt-8 space-y-3">
          <Button onClick={() => void begin()}>{t('placement.start')}</Button>
          <Button variant="outline" onClick={() => navigate('/')}>
            {t('common.back')}
          </Button>
        </div>
      </div>
    );
  }

  if (phase === 'loading') return <Spinner label={t('common.loading')} />;

  if (phase === 'result') {
    return <PlacementResults tally={tally} onContinue={() => navigate('/')} />;
  }

  const q = questions[idx];
  if (!q) return <Spinner />;

  return (
    <div className="flex min-h-full flex-col px-5 py-4">
      <QuestionHeader question={q} current={idx + 1} total={questions.length} />
      <h2 className="mb-6 font-display text-2xl leading-snug">{localized(q.question)}</h2>
      <AnswerGrid question={q} selectedIndex={selected} answered={answered} onSelect={(i) => void select(i)} />
      {answered && (
        <>
          <ExplanationPanel question={q} isCorrect={selected === q.correct_index} />
          <div className="mt-5">
            <Button onClick={next}>
              {idx >= questions.length - 1 ? t('quiz.finish') : t('quiz.next')}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

function computePlacement(tally: Record<Difficulty, { seen: number; correct: number }>): PlacementResult {
  const breakdown = DIFFICULTIES.map((d) => {
    const { seen, correct } = tally[d];
    return { difficulty: d, seen, correct, pct: seen ? correct / seen : 0 };
  });
  // Recommend the highest difficulty band still answered well (>=70%).
  let recommended: Difficulty = 'easy';
  for (const b of breakdown) {
    if (b.seen > 0 && b.pct >= 0.7) recommended = b.difficulty;
  }
  return { breakdown, recommendedDifficulty: recommended };
}

function PlacementResults({
  tally,
  onContinue
}: {
  tally: Record<Difficulty, { seen: number; correct: number }>;
  onContinue: () => void;
}) {
  const { t } = useTranslation();
  const { breakdown, recommendedDifficulty } = computePlacement(tally);

  // breakdown is ordered easy, medium, hard.
  const rows = [
    { label: t('placement.basics'), value: breakdown[0].pct },
    { label: t('placement.intermediate'), value: breakdown[1].pct },
    { label: t('placement.advanced'), value: breakdown[2].pct }
  ];

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-10">
      <h1 className="font-display text-3xl font-bold">{t('placement.resultTitle')}</h1>

      <Card className="mt-6 space-y-4">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="mb-1 flex justify-between text-sm">
              <span>{r.label}</span>
              <span className="text-mist-300">{Math.round(r.value * 100)}%</span>
            </div>
            <MasteryBar value={r.value} />
          </div>
        ))}
      </Card>

      <Card className="mt-4 text-center">
        <p className="text-sm text-mist-400">{t('placement.recommended')}</p>
        <p className="my-1 font-display text-4xl font-bold text-ember-400">
          {t(`difficulty.${recommendedDifficulty}`)}
        </p>
      </Card>

      <div className="mt-8">
        <Button onClick={onContinue}>{t('placement.continue')}</Button>
      </div>
    </div>
  );
}
