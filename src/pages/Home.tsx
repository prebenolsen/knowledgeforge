import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { countDueReviews } from '@/lib/questionLoader';
import { Button, Card, Spinner } from '@/components/ui';
import { Header } from '@/components/layout/Nav';

export function Home() {
  const { t } = useTranslation();
  const { session, profile } = useAuth();
  const navigate = useNavigate();
  const [due, setDue] = useState<number | null>(null);

  useEffect(() => {
    if (!session) return;
    countDueReviews(session.user.id)
      .then(setDue)
      .catch(() => setDue(0));
  }, [session]);

  return (
    <>
      <Header title={t('app.name')} />
      <div className="space-y-4 px-5 py-4">
        <h2 className="font-display text-2xl">{t('home.greeting')}</h2>

        {due === null ? (
          <Spinner />
        ) : (
          <Card className="bg-ink-600">
            <p className="text-sm text-mist-300">{t('home.dueToday')}</p>
            {due > 0 ? (
              <>
                <p className="my-2 font-display text-4xl font-bold text-ember-400">{due}</p>
                <Button onClick={() => navigate('/review')}>{t('home.startReview', { count: due })}</Button>
              </>
            ) : (
              <p className="mt-2 text-mist-400">{t('home.noReviews')}</p>
            )}
          </Card>
        )}

        <Card onClick={() => navigate('/categories')}>
          <div className="flex items-center justify-between">
            <span className="text-lg">📚 {t('home.browse')}</span>
            <span className="text-mist-400">›</span>
          </div>
        </Card>

        <Card onClick={() => navigate('/atlas')}>
          <div className="flex items-center justify-between">
            <span className="text-lg">🗺️ {t('geo.title')}</span>
            <span className="text-mist-400">›</span>
          </div>
        </Card>

        <Card onClick={() => navigate('/timeline')}>
          <div className="flex items-center justify-between">
            <span className="text-lg">📜 {t('timeline.title')}</span>
            <span className="text-mist-400">›</span>
          </div>
        </Card>

        <Card onClick={() => navigate('/concepts')}>
          <div className="flex items-center justify-between">
            <span className="text-lg">🧠 {t('concepts.title')}</span>
            <span className="text-mist-400">›</span>
          </div>
        </Card>

        {!profile?.placement_complete && (
          <Card onClick={() => navigate('/placement')} className="border border-ember-600/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg">🎯 {t('home.takePlacement')}</p>
                <p className="text-sm text-mist-400">{t('home.placementHint')}</p>
              </div>
              <span className="text-mist-400">›</span>
            </div>
          </Card>
        )}
      </div>
    </>
  );
}
