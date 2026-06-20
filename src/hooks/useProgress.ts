import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { fetchCategories, fetchSubcategories } from '@/lib/questionLoader';
import {
  knowledgeShape,
  accuracyAt,
  emptyDifficultyStats,
  type DifficultyStats,
  type KnowledgeShape
} from '@/lib/mastery';
import type { Category, Difficulty, Subcategory } from '@/types';
import { DIFFICULTIES } from '@/types';

export interface SubMastery {
  subcategory: Subcategory;
  mastery: number;
  shape: KnowledgeShape;
  byDifficulty: Record<Difficulty, number>;
  seen: number;
}

export interface CatMastery {
  category: Category;
  mastery: number;
  subs: SubMastery[];
}

export interface ProgressSummary {
  totalAnswered: number;
  totalCorrect: number;
  overallMastery: number;
}

interface ProgressRow {
  subcategory_id: string;
  mastery_score: number;
  questions_seen: number;
  correct_count: number;
  difficulty_stats: Partial<DifficultyStats>;
}

export function useProgress(userId: string | undefined) {
  const [loading, setLoading] = useState(true);
  const [catMasteries, setCatMasteries] = useState<CatMastery[]>([]);
  const [summary, setSummary] = useState<ProgressSummary>({
    totalAnswered: 0,
    totalCorrect: 0,
    overallMastery: 0
  });

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;

    async function load() {
      setLoading(true);

      const [categories, progressRes] = await Promise.all([
        fetchCategories(),
        supabase.from('knowledgeforge_user_progress').select('*').eq('user_id', userId)
      ]);

      const progress = (progressRes.data ?? []) as ProgressRow[];
      const progressBySub = new Map(progress.map((p) => [p.subcategory_id, p]));

      const allSubs = await Promise.all(categories.map((c) => fetchSubcategories(c.id)));

      const result: CatMastery[] = categories.map((category, i) => {
        const subs: SubMastery[] = allSubs[i].map((subcategory) => {
          const row = progressBySub.get(subcategory.id);
          const stats: DifficultyStats = row?.difficulty_stats
            ? mergeStats(row.difficulty_stats)
            : emptyDifficultyStats();
          const byDifficulty = {
            easy: accuracyAt(stats, 'easy'),
            medium: accuracyAt(stats, 'medium'),
            hard: accuracyAt(stats, 'hard')
          } as Record<Difficulty, number>;
          return {
            subcategory,
            mastery: row?.mastery_score ?? 0,
            shape: knowledgeShape(stats),
            byDifficulty,
            seen: row?.questions_seen ?? 0
          };
        });
        const seenSubs = subs.filter((s) => s.seen > 0);
        const mastery = seenSubs.length
          ? seenSubs.reduce((s, x) => s + x.mastery, 0) / seenSubs.length
          : 0;
        return { category, mastery, subs };
      });

      const totalAnswered = progress.reduce((s, p) => s + p.questions_seen, 0);
      const totalCorrect = progress.reduce((s, p) => s + p.correct_count, 0);
      const seen = result.filter((c) => c.mastery > 0);
      const overallMastery = seen.length ? seen.reduce((s, c) => s + c.mastery, 0) / seen.length : 0;

      if (!cancelled) {
        setCatMasteries(result);
        setSummary({ totalAnswered, totalCorrect, overallMastery });
        setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [userId]);

  return { loading, catMasteries, summary };
}

function mergeStats(partial: Partial<DifficultyStats>): DifficultyStats {
  const base = emptyDifficultyStats();
  DIFFICULTIES.forEach((d) => {
    if (partial[d]) base[d] = { seen: partial[d]!.seen ?? 0, correct: partial[d]!.correct ?? 0 };
  });
  return base;
}
