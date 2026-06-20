// ============================================================
// Language Learning — interactive scenario runner.
//
// Drives a Scenario's ordered steps: dialogue lines (with an inline teach
// glossary), response choices (with feedback), and sentence-build steps (reusing
// the sentence-build exercise via ExerciseHost). The scenario is the module's
// "main feature": a real-world simulation that strings vocabulary, choices, and
// construction into one flow.
// ============================================================

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { localized } from '@/i18n';
import { Button, Card } from '@/components/ui';
import { sentenceById } from '@/lib/lang/registry';
import { buildWordBank } from '@/lib/lang/scenario';
import type { Exercise, LanguageDefinition, Scenario, ScenarioChoiceOption } from '@/types';
import { ExerciseHost } from './ExerciseHost';

interface Props {
  lang: LanguageDefinition;
  scenario: Scenario;
  onFinish: (score: number) => void; // score 0–1
  onQuit: () => void;
}

export function ScenarioRunner({ lang, scenario, onFinish, onQuit }: Props) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [seen, setSeen] = useState(0);
  const [correct, setCorrect] = useState(0);
  const step = scenario.steps[index];

  // Lines pass no argument (not graded); choice/build steps pass correctness.
  function advance(wasCorrect?: boolean) {
    const nextSeen = seen + (wasCorrect !== undefined ? 1 : 0);
    const nextCorrect = correct + (wasCorrect ? 1 : 0);
    setSeen(nextSeen);
    setCorrect(nextCorrect);
    if (index + 1 >= scenario.steps.length) {
      onFinish(Number((nextSeen > 0 ? nextCorrect / nextSeen : 1).toFixed(3)));
    } else {
      setIndex((i) => i + 1);
    }
  }

  return (
    <div className="flex min-h-full flex-col px-5 py-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-mist-300">{localized(scenario.name)}</span>
        <span className="text-sm text-mist-400">
          {t('language.scenario.step', { current: index + 1, total: scenario.steps.length })}
        </span>
        <button onClick={onQuit} className="text-sm text-mist-400">
          ✕
        </button>
      </div>

      {step.kind === 'line' && <LineStep step={step} onNext={() => advance()} />}
      {step.kind === 'choice' && <ChoiceStep prompt={localized(step.prompt)} options={step.options} onNext={advance} />}
      {step.kind === 'build' && <BuildStep lang={lang} step={step} onNext={advance} />}
    </div>
  );
}

// ---- Dialogue line -----------------------------------------

function LineStep({
  step,
  onNext
}: {
  step: Extract<Scenario['steps'][number], { kind: 'line' }>;
  onNext: () => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <div className="text-xs uppercase tracking-wide text-mist-500">{localized(step.speaker)}</div>
      <Card className="bg-ink-600">
        <p className="font-display text-2xl">{step.text}</p>
        <p className="mt-2 text-sm text-mist-400">{localized(step.translation)}</p>
      </Card>
      {step.teach.length > 0 && (
        <Card className="space-y-1 border border-ember-600/30 bg-transparent">
          <p className="mb-1 text-xs uppercase tracking-wide text-ember-400">{t('language.scenario.newWords')}</p>
          {step.teach.map((g, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-mist-100">{g.term}</span>
              <span className="text-mist-400">{localized(g.translation)}</span>
            </div>
          ))}
        </Card>
      )}
      <Button onClick={onNext}>{t('language.scenario.continue')}</Button>
    </div>
  );
}

// ---- Response choice ---------------------------------------

function ChoiceStep({
  prompt,
  options,
  onNext
}: {
  prompt: string;
  options: ScenarioChoiceOption[];
  onNext: (correct: boolean) => void;
}) {
  const { t } = useTranslation();
  const [picked, setPicked] = useState<number | null>(null);
  const chosen = picked != null ? options[picked] : null;

  return (
    <div className="space-y-4">
      <div className="rounded-card bg-ink-600 p-4 text-center text-lg">{prompt}</div>
      <div className="space-y-2">
        {options.map((o, i) => {
          const state = picked == null ? 'idle' : o.correct ? 'correct' : i === picked ? 'wrong' : 'idle';
          const tone =
            state === 'correct'
              ? 'border-good bg-good/15 text-good'
              : state === 'wrong'
                ? 'border-bad bg-bad/15 text-bad'
                : 'border-ink-500 text-mist-100 hover:bg-ink-700';
          return (
            <button
              key={i}
              disabled={picked != null}
              onClick={() => setPicked(i)}
              className={`w-full rounded-card border px-4 py-3 text-left transition active:scale-[0.99] ${tone}`}
            >
              <div>{o.text}</div>
              <div className="text-xs text-mist-400">{localized(o.translation)}</div>
            </button>
          );
        })}
      </div>
      {chosen && (
        <>
          <div className={`rounded-card p-3 text-sm ${chosen.correct ? 'bg-good/15 text-good' : 'bg-bad/15 text-bad'}`}>
            {localized(chosen.feedback)}
          </div>
          <Button onClick={() => onNext(chosen.correct)}>{t('language.scenario.continue')}</Button>
        </>
      )}
    </div>
  );
}

// ---- Sentence-build step (reuses the exercise component) ----

function BuildStep({
  lang,
  step,
  onNext
}: {
  lang: LanguageDefinition;
  step: Extract<Scenario['steps'][number], { kind: 'build' }>;
  onNext: (correct: boolean) => void;
}) {
  const sentence = sentenceById(lang, step.sentenceId);
  if (!sentence) {
    // Missing content — skip rather than block the scenario.
    return null;
  }
  const exercise: Exercise = {
    type: 'sentence-build',
    sentenceId: sentence.id,
    prompt: localized(sentence.translation),
    bank: buildWordBank(lang, sentence, step.distractorComponentIds),
    answer: sentence.componentIds
  };
  return <ExerciseHost exercise={exercise} onComplete={(r) => onNext(r.correct)} />;
}
