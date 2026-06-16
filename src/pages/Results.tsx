import { useTranslation } from 'react-i18next';
import type { QuizSessionResult } from '@/types';
import { Button, Card } from '@/components/ui';

export function Results({ result, onHome }: { result: QuizSessionResult; onHome: () => void }) {
  const { t } = useTranslation();
  const accuracy = result.total ? Math.round((result.correct / result.total) * 100) : 0;

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-10">
      <div className="mb-4 text-center text-6xl">{accuracy >= 70 ? '🎉' : '💪'}</div>
      <h1 className="text-center font-display text-3xl font-bold">{t('results.title')}</h1>

      <Card className="mt-8 text-center">
        <p className="text-mist-300">{t('results.score', { correct: result.correct, total: result.total })}</p>
        <p className="my-2 font-display text-5xl font-bold text-ember-400">{accuracy}%</p>
        <p className="text-sm text-mist-400">{t('results.accuracy')}</p>
      </Card>

      <div className="mt-8">
        <Button onClick={onHome}>{t('results.backHome')}</Button>
      </div>
    </div>
  );
}
