import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks/useAuth';
import { useProgress, type CatMastery } from '@/hooks/useProgress';
import { localized } from '@/i18n';
import type { Difficulty } from '@/types';
import { Card, Spinner, MasteryBar, Badge } from '@/components/ui';
import { Header } from '@/components/layout/Nav';

export function Progress() {
  const { t } = useTranslation();
  const { session } = useAuth();
  const { loading, catMasteries, summary } = useProgress(session?.user.id);

  if (loading) {
    return (
      <>
        <Header title={t('progress.title')} />
        <Spinner label={t('common.loading')} />
      </>
    );
  }

  const hasData = summary.totalAnswered > 0;

  return (
    <>
      <Header title={t('progress.title')} />
      <div className="space-y-4 px-5 py-4">
        {!hasData ? (
          <Card>
            <p className="text-center text-mist-400">{t('progress.noData')}</p>
          </Card>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-3">
              <StatCard label={t('progress.overall')} value={`${Math.round(summary.overallMastery * 100)}%`} />
              <StatCard label={t('progress.answered')} value={summary.totalAnswered} />
              <StatCard
                label={t('progress.accuracy')}
                value={`${summary.totalAnswered ? Math.round((summary.totalCorrect / summary.totalAnswered) * 100) : 0}%`}
              />
            </div>

            <h2 className="pt-2 font-display text-xl">{t('progress.knowledgeMap')}</h2>
            {catMasteries
              .filter((c) => c.subs.some((s) => s.seen > 0))
              .map((cat) => (
                <CategoryBlock key={cat.category.id} cat={cat} />
              ))}
          </>
        )}
      </div>
    </>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-card bg-ink-700 p-3 text-center">
      <p className="font-display text-2xl font-bold text-ember-400">{value}</p>
      <p className="mt-1 text-xs text-mist-400">{label}</p>
    </div>
  );
}

function CategoryBlock({ cat }: { cat: CatMastery }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const seenSubs = cat.subs.filter((s) => s.seen > 0);

  return (
    <Card>
      <button className="w-full" onClick={() => setOpen(!open)}>
        <div className="mb-2 flex items-center justify-between">
          <span className="flex items-center gap-2 text-lg font-medium">
            <span>{cat.category.icon}</span>
            {localized(cat.category.name)}
          </span>
          <span className="text-mist-300">{Math.round(cat.mastery * 100)}%</span>
        </div>
        <MasteryBar value={cat.mastery} />
      </button>

      {open && (
        <div className="mt-4 space-y-4">
          {seenSubs.map((sub) => (
            <div key={sub.subcategory.id}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm">{localized(sub.subcategory.name)}</span>
                <Badge>{t(`shape.${sub.shape}`)}</Badge>
              </div>
              <MasteryBar value={sub.mastery} />
              <DifficultyRow byDifficulty={sub.byDifficulty} />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

function DifficultyRow({ byDifficulty }: { byDifficulty: Record<Difficulty, number> }) {
  const { t } = useTranslation();
  // Group into easy (1-2), medium (3), hard (4-5).
  const easy = (byDifficulty[1] + byDifficulty[2]) / 2;
  const medium = byDifficulty[3];
  const hard = (byDifficulty[4] + byDifficulty[5]) / 2;
  const cells = [
    { label: t('progress.easy'), v: easy },
    { label: t('progress.medium'), v: medium },
    { label: t('progress.hard'), v: hard }
  ];
  return (
    <div className="mt-2 grid grid-cols-3 gap-2">
      {cells.map((c) => (
        <div key={c.label} className="rounded-lg bg-ink-600 px-2 py-1.5 text-center">
          <p className="text-xs text-mist-400">{c.label}</p>
          <p className="text-sm font-medium">{Math.round(c.v * 100)}%</p>
        </div>
      ))}
    </div>
  );
}
