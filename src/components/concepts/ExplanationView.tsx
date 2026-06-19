// ============================================================
// Mental Models & Paradoxes — the "Explain" view.
//
// This is what sets the activity apart from a quiz: every concept opens a proper
// educational explanation built to create understanding, not to test recall. The
// seven sections map onto the Concept.explanation shape (plus title and related
// links). Shown both after answering and on demand via the "Explain" button.
// ============================================================

import { useTranslation } from 'react-i18next';
import { Button, Card } from '@/components/ui';
import { localized } from '@/i18n';
import { conceptName, relatedConcepts } from '@/lib/concepts';
import type { Concept } from '@/types';

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-mist-400">{label}</p>
      <p className="mt-1 text-mist-100">{children}</p>
    </div>
  );
}

export function ExplanationView({ concept, onClose }: { concept: Concept; onClose: () => void }) {
  const { t } = useTranslation();
  const e = concept.explanation;
  const related = relatedConcepts(concept);

  return (
    <div className="space-y-4">
      <div>
        <p className="font-display text-2xl text-ember-400">{conceptName(concept)}</p>
        <p className="mt-1 text-mist-200">{localized(e.summary)}</p>
      </div>

      <Card className="space-y-4">
        <Section label={t('concepts.explain.whyInteresting')}>{localized(e.whyInteresting)}</Section>
        <Section label={t('concepts.explain.whyIntuitionFails')}>{localized(e.whyIntuitionFails)}</Section>
        <Section label={t('concepts.explain.example')}>{localized(e.example)}</Section>
        <Section label={t('concepts.explain.realWorld')}>{localized(e.realWorld)}</Section>
      </Card>

      {concept.simulation && (
        <Card className="bg-ink-600">
          <p className="text-sm text-mist-200">🧪 {t('concepts.explain.simulationAvailable')}</p>
        </Card>
      )}

      {related.length > 0 && (
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-mist-400">
            {t('concepts.explain.related')}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {related.map((r) => (
              <span key={r.id} className="rounded-full bg-ink-600 px-3 py-1 text-sm text-mist-200">
                {conceptName(r)}
              </span>
            ))}
          </div>
        </div>
      )}

      <Button onClick={onClose}>{t('concepts.explain.close')}</Button>
    </div>
  );
}
