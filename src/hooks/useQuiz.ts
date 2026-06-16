import { useCallback, useEffect, useRef, useState } from 'react';
import {
  fetchQuestions,
  fetchDueReviews,
  recordAnswer
} from '@/lib/questionLoader';
import type { Difficulty, PracticeMode, Question, QuizSessionResult } from '@/types';
import { DIFFICULTIES, DIFFICULTY_RANK } from '@/types';
import { emptyDifficultyStats } from '@/lib/mastery';

const MODE_DIFFICULTIES: Record<PracticeMode, Difficulty[] | undefined> = {
  beginner: ['easy'],
  intermediate: ['medium'],
  advanced: ['hard'],
  mixed: ['easy', 'medium', 'hard'],
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
  const adaptiveLevel = useRef<Difficulty>('medium');

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

      // Adaptive: nudge difficulty up/down one band based on correctness.
      if (mode === 'adaptive') {
        const idx = DIFFICULTY_RANK[adaptiveLevel.current] - 1;
        const nextIdx = Math.max(0, Math.min(DIFFICULTIES.length - 1, idx + (isCorrect ? 1 : -1)));
        adaptiveLevel.current = DIFFICULTIES[nextIdx];
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
