import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCategories, fetchSubcategories } from '@/lib/questionLoader';
import { localized } from '@/i18n';
import type { Category, Subcategory, PracticeMode } from '@/types';
import { Card, Spinner } from '@/components/ui';
import { Header } from '@/components/layout/Nav';

export function CategoryList() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[] | null>(null);

  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch(() => setCategories([]));
  }, []);

  return (
    <>
      <Header title={t('categories.title')} />
      <div className="space-y-3 px-5 py-4">
        {categories === null ? (
          <Spinner />
        ) : (
          categories.map((cat) => (
            <Card key={cat.id} onClick={() => navigate(`/categories/${cat.id}`)}>
              <div className="flex items-center gap-4">
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-lg font-medium">{localized(cat.name)}</span>
              </div>
            </Card>
          ))
        )}
      </div>
    </>
  );
}

const MODES: PracticeMode[] = ['beginner', 'intermediate', 'advanced', 'mixed', 'adaptive'];

export function ModuleList() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [subs, setSubs] = useState<Subcategory[] | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);

  useEffect(() => {
    if (!categoryId) return;
    fetchSubcategories(categoryId)
      .then(setSubs)
      .catch(() => setSubs([]));
  }, [categoryId]);

  function startQuiz(subId: string, mode: PracticeMode) {
    navigate(`/quiz?sub=${subId}&mode=${mode}`);
  }

  return (
    <>
      <Header title={t('modules.title')} />
      <div className="space-y-3 px-5 py-4">
        {subs === null ? (
          <Spinner />
        ) : (
          subs.map((sub) => (
            <Card key={sub.id}>
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setActiveSub(activeSub === sub.id ? null : sub.id)}
              >
                <span className="text-lg font-medium">{localized(sub.name)}</span>
                <span className="text-mist-400">{activeSub === sub.id ? '▾' : '›'}</span>
              </button>

              {activeSub === sub.id && (
                <div className="mt-4 space-y-2">
                  <p className="text-xs uppercase tracking-wide text-mist-400">{t('modules.chooseMode')}</p>
                  {MODES.map((mode) => (
                    <button
                      key={mode}
                      onClick={() => startQuiz(sub.id, mode)}
                      className="flex w-full items-center justify-between rounded-card bg-ink-600 px-4 py-3 text-left transition active:scale-[0.98]"
                    >
                      <span>{t(`mode.${mode}`)}</span>
                      {mode === 'adaptive' && (
                        <span className="text-xs text-mist-400">{t('mode.adaptiveHint')}</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </Card>
          ))
        )}
      </div>
    </>
  );
}
