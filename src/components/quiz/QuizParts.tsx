import { useTranslation } from 'react-i18next';
import { localized } from '@/i18n';
import type { Question } from '@/types';
import { Badge } from '@/components/ui';

interface AnswerGridProps {
  question: Question;
  selectedIndex: number | null;
  answered: boolean;
  onSelect: (index: number) => void;
}

export function AnswerGrid({ question, selectedIndex, answered, onSelect }: AnswerGridProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {question.answers.map((answer, i) => {
        const isCorrect = i === question.correct_index;
        const isSelected = i === selectedIndex;

        let style = 'bg-ink-700 border-ink-600 text-mist-100';
        if (answered) {
          if (isCorrect) style = 'bg-good/15 border-good text-mist-100';
          else if (isSelected) style = 'bg-bad/15 border-bad text-mist-100';
          else style = 'bg-ink-700 border-ink-600 text-mist-400 opacity-60';
        }

        return (
          <button
            key={i}
            disabled={answered}
            onClick={() => onSelect(i)}
            className={`flex min-h-[64px] items-center rounded-card border px-4 py-3 text-left text-base transition active:scale-[0.98] disabled:active:scale-100 ${style}`}
          >
            <span className="mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-900/40 text-sm font-medium">
              {String.fromCharCode(65 + i)}
            </span>
            {localized(answer)}
          </button>
        );
      })}
    </div>
  );
}

export function QuestionHeader({ question, current, total }: { question: Question; current: number; total: number }) {
  const { t } = useTranslation();
  return (
    <div className="mb-4 flex items-center justify-between">
      <span className="text-sm text-mist-400">{t('quiz.question', { current, total })}</span>
      <Badge tone="ember">{t(`difficulty.${question.difficulty}`)}</Badge>
    </div>
  );
}

export function ExplanationPanel({
  question,
  isCorrect
}: {
  question: Question;
  isCorrect: boolean;
}) {
  const { t } = useTranslation();
  return (
    <div className="mt-5 rounded-card bg-ink-700 p-5">
      <div className={`mb-2 text-lg font-bold ${isCorrect ? 'text-good' : 'text-bad'}`}>
        {isCorrect ? t('quiz.correct') : t('quiz.incorrect')}
      </div>
      {!isCorrect && (
        <p className="mb-3 text-sm text-mist-300">
          {t('quiz.correctAnswer')}:{' '}
          <span className="font-medium text-mist-100">
            {localized(question.answers[question.correct_index])}
          </span>
        </p>
      )}
      <p className="text-xs font-medium uppercase tracking-wide text-mist-400">{t('quiz.explanation')}</p>
      <p className="mt-1 text-base leading-relaxed text-mist-100">{localized(question.explanation)}</p>
    </div>
  );
}
