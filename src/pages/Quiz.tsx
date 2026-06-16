import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useQuiz } from '@/hooks/useQuiz';
import { localized } from '@/i18n';
import type { PracticeMode } from '@/types';
import { Button, Spinner } from '@/components/ui';
import { AnswerGrid, ExplanationPanel, QuestionHeader } from '@/components/quiz/QuizParts';
import { Results } from './Results';

function QuizRunner({ reviewMode }: { reviewMode: boolean }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { session } = useAuth();
  const [params] = useSearchParams();

  const subcategoryId = params.get('sub') ?? undefined;
  const mode = (params.get('mode') as PracticeMode) ?? 'mixed';

  const quiz = useQuiz({
    userId: session!.user.id,
    subcategoryId,
    mode,
    reviewMode
  });

  if (quiz.loading) return <Spinner label={t('common.loading')} />;

  if (quiz.isComplete) {
    return <Results result={quiz.result} onHome={() => navigate('/')} />;
  }

  const q = quiz.current;
  if (!q) return <Spinner />;

  return (
    <div className="flex min-h-full flex-col px-5 py-4">
      <div className="mb-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-sm text-mist-400">
          ✕ {t('quiz.quit')}
        </button>
      </div>

      <QuestionHeader question={q} current={quiz.index + 1} total={quiz.total} />

      <h2 className="mb-6 font-display text-2xl leading-snug">{localized(q.question)}</h2>

      <AnswerGrid
        question={q}
        selectedIndex={quiz.selectedIndex}
        answered={quiz.answered}
        onSelect={(i) => void quiz.select(i)}
      />

      {quiz.answered && (
        <>
          <ExplanationPanel question={q} isCorrect={quiz.selectedIndex === q.correct_index} />
          <div className="mt-5">
            <Button onClick={quiz.next}>{quiz.isLast ? t('quiz.finish') : t('quiz.next')}</Button>
          </div>
        </>
      )}
    </div>
  );
}

export function Quiz() {
  return <QuizRunner reviewMode={false} />;
}

export function Review() {
  return <QuizRunner reviewMode={true} />;
}
