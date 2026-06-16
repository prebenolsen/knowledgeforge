import { useCallback, useEffect, useRef, useState } from 'react';
import {
  fetchQuestions,
  fetchDueReviews,
  recordAnswer
} from '@/lib/questionLoader';
import type { Difficulty, PracticeMode, Question, QuizSessionResult } from '@/types';
import { emptyDifficultyStats } from '@/lib/mastery';

const MODE_DIFFICULTIES: Record<PracticeMode, Difficulty[] | undefined> = {
  beginner: [1, 2],
  intermediate: [3],
  advanced: [4, 5],
  mixed: [1, 2, 3, 4, 5],
  adaptive: undefined // handled dynamically
};

interface UseQuizArgs {
  userId: string;
  subcategoryId?: string;
  mode?: PracticeMode;
  reviewMode?: boolean;
  sessionSize?: number;
}

export function useQuiz({ userId, subcategoryId, mode = 'mixed', reviewMode = false, sessionSize = 10 }: UseQuizArgs) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [result, setResult] = useState<QuizSessionResult>(() => ({
    total: 0,
    correct: 0,
    byDifficulty: emptyDifficultyStats() as QuizSessionResult['byDifficulty']
  }));
  const startRef = useRef<number>(Date.now());

  // Adaptive difficulty: track a running target level.
  const adaptiveLevel = useRef<Difficulty>(2);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      let qs: Question[];
      if (reviewMode) {
        qs = await fetchDueReviews(userId, sessionSize);
      } else {
        const difficulties = MODE_DIFFICULTIES[mode];
        qs = await fetchQuestions({ subcategoryId, difficulties, limit: sessionSize });
      }
      if (!cancelled) {
        setQuestions(qs);
        setLoading(false);
        startRef.current = Date.now();
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [userId, subcategoryId, mode, reviewMode, sessionSize]);

  const current = questions[index];

  const select = useCallback(
    async (choice: number) => {
      if (answered || !current) return;
      const timeMs = Date.now() - startRef.current;
      const isCorrect = choice === current.correct_index;

      setSelectedIndex(choice);
      setAnswered(true);

      setResult((r) => {
        const d = current.difficulty;
        const byDifficulty = { ...r.byDifficulty };
        byDifficulty[d] = {
          seen: byDifficulty[d].seen + 1,
          correct: byDifficulty[d].correct + (isCorrect ? 1 : 0)
        };
        return { total: r.total + 1, correct: r.correct + (isCorrect ? 1 : 0), byDifficulty };
      });

      // Adaptive: nudge difficulty based on correctness.
      if (mode === 'adaptive') {
        adaptiveLevel.current = Math.max(
          1,
          Math.min(5, adaptiveLevel.current + (isCorrect ? 1 : -1))
        ) as Difficulty;
      }

      // Persist to Supabase (fire and forget; UI already advanced state).
      try {
        await recordAnswer({ userId, question: current, selectedIndex: choice, timeMs });
      } catch (e) {
        console.error('Failed to record answer', e);
      }
    },
    [answered, current, mode, userId]
  );

  const next = useCallback(() => {
    setSelectedIndex(null);
    setAnswered(false);
    startRef.current = Date.now();
    setIndex((i) => i + 1);
  }, []);

  const isLast = index >= questions.length - 1;
  const isComplete = !loading && (questions.length === 0 || index >= questions.length);

  return {
    loading,
    current,
    index,
    total: questions.length,
    selectedIndex,
    answered,
    result,
    isLast,
    isComplete,
    select,
    next
  };
}
