import { useMemo } from 'react';
import { WORLD_PATHS, CONTINENT_VIEWBOX } from '@/content/geo/worldPaths';

export type CountryStatus = 'idle' | 'highlight' | 'correct' | 'wrong' | 'selected';

const FILL: Record<CountryStatus, string> = {
  idle: '#2e2e54', // ink-500 — quizable land
  highlight: '#f97316', // ember-500 — current target
  correct: '#22c55e', // good
  wrong: '#ef4444', // bad
  selected: '#ff9e5e' // ember-400 — picked in explore
};
const BACKGROUND_FILL = '#232342'; // ink-600 — non-quizable land (context)
const STROKE = '#0f0f1a'; // ink-900

interface CountryMapProps {
  continent: string;
  // Quizable countries on this continent, keyed by iso3.
  quizable: Set<string>;
  // Per-country status overrides (e.g. the highlighted target, a pick result).
  status?: Record<string, CountryStatus>;
  // Fired when a quizable country is tapped (omit to make the map display-only).
  onPick?: (iso3: string) => void;
}

export function CountryMap({ continent, quizable, status = {}, onPick }: CountryMapProps) {
  const viewBox = CONTINENT_VIEWBOX[continent] ?? [0, 0, 2000, 1000];
  const interactive = Boolean(onPick);

  // Build the path list once; identity is stable so only fills re-evaluate.
  const entries = useMemo(() => Object.entries(WORLD_PATHS), []);

  return (
    <svg
      viewBox={viewBox.join(' ')}
      className="h-auto w-full touch-none select-none"
      role="img"
      aria-label={`Map of ${continent}`}
    >
      {entries.map(([iso3, d]) => {
        const isQuizable = quizable.has(iso3);
        const st = status[iso3] ?? (isQuizable ? 'idle' : undefined);
        const fill = st ? FILL[st] : BACKGROUND_FILL;
        // Countries already answered correctly are locked in — not clickable.
        const clickable = interactive && isQuizable && st !== 'correct';
        return (
          <path
            key={iso3}
            d={d}
            fill={fill}
            stroke={STROKE}
            strokeWidth={0.5}
            vectorEffect="non-scaling-stroke"
            className={clickable ? 'cursor-pointer transition-[fill] duration-150' : 'transition-[fill] duration-150'}
            onClick={clickable ? () => onPick!(iso3) : undefined}
          />
        );
      })}
    </svg>
  );
}
