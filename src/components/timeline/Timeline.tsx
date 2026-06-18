import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { formatYear, timelineTickStep } from '@/lib/timeline';

// ============================================================
// Reusable horizontal timeline.
//
// Responsive + touch-friendly. Supports BCE/CE years, event markers, a
// draggable placement marker, zoom, and highlighting the correct answer vs the
// user's guess. Kept generic (no game logic) so future learning modes —
// ordering, drag-sorting, cause/effect — can reuse it.
// ============================================================

export type MarkerTone = 'event' | 'user' | 'correct' | 'neutral';

export interface TimelineMarker {
  year: number;
  label?: string;
  tone: MarkerTone;
}

interface TimelineProps {
  // The full data domain (absolute min/max years). Negative = BCE.
  bounds: [number, number];
  markers?: TimelineMarker[];
  // Enable the draggable placement marker (Medium mode).
  draggable?: boolean;
  // Controlled value of the placement marker.
  value?: number | null;
  onChange?: (year: number) => void;
  // Lock interaction (e.g. after the answer is submitted).
  disabled?: boolean;
}

const TONE_COLOR: Record<MarkerTone, string> = {
  event: '#f97316', // ember-500
  user: '#60a5fa', // blue-400
  correct: '#22c55e', // good
  neutral: '#6b7280' // mist
};

export function Timeline({ bounds, markers = [], draggable = false, value, onChange, disabled = false }: TimelineProps) {
  const [lo, hi] = bounds;
  // Zoom window inside the data domain. Starts showing the whole domain.
  const [view, setView] = useState<[number, number]>(bounds);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  // Reset the view whenever the domain changes (new event/scope).
  useEffect(() => {
    setView(bounds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lo, hi]);

  const [vMin, vMax] = view;
  const span = Math.max(1, vMax - vMin);

  const pctOf = useCallback((year: number) => ((year - vMin) / span) * 100, [vMin, span]);

  const ticks = useMemo(() => {
    const step = timelineTickStep(span);
    const start = Math.ceil(vMin / step) * step;
    const out: number[] = [];
    for (let y = start; y <= vMax; y += step) out.push(y);
    return out;
  }, [vMin, vMax, span]);

  const yearFromClientX = useCallback(
    (clientX: number): number => {
      const el = trackRef.current;
      if (!el) return vMin;
      const rect = el.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      return Math.round(vMin + ratio * span);
    },
    [vMin, span]
  );

  function handlePointer(clientX: number) {
    if (!draggable || disabled || !onChange) return;
    onChange(yearFromClientX(clientX));
  }

  function zoom(factor: number) {
    const center = value != null ? value : (vMin + vMax) / 2;
    const half = (span * factor) / 2;
    let nMin = Math.round(center - half);
    let nMax = Math.round(center + half);
    // Clamp to the data domain.
    if (nMin < lo) {
      nMax += lo - nMin;
      nMin = lo;
    }
    if (nMax > hi) {
      nMin -= nMax - hi;
      nMax = hi;
    }
    nMin = Math.max(lo, nMin);
    nMax = Math.min(hi, nMax);
    if (nMax - nMin >= 4) setView([nMin, nMax]);
  }

  const canZoomOut = vMin > lo || vMax < hi;

  return (
    <div className="select-none">
      <div className="mb-2 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => zoom(0.5)}
          className="h-7 w-7 rounded-full border border-ink-500 text-mist-200 active:scale-95"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => zoom(2)}
          disabled={!canZoomOut}
          className="h-7 w-7 rounded-full border border-ink-500 text-mist-200 disabled:opacity-40 active:scale-95"
          aria-label="Zoom out"
        >
          −
        </button>
      </div>

      <div
        ref={trackRef}
        className={`relative h-24 w-full touch-none rounded-card bg-ink-800 ${draggable && !disabled ? 'cursor-pointer' : ''}`}
        onPointerDown={(e) => {
          if (!draggable || disabled) return;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          setDragging(true);
          handlePointer(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging) handlePointer(e.clientX);
        }}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
      >
        {/* Axis line */}
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-ink-500" />

        {/* Ticks */}
        {ticks.map((y) => (
          <div key={y} className="absolute top-1/2 -translate-x-1/2" style={{ left: `${pctOf(y)}%` }}>
            <div className="mx-auto h-2 w-px bg-ink-500" />
            <div className="mt-1 whitespace-nowrap text-center text-[10px] text-mist-400">{formatYear(y)}</div>
          </div>
        ))}

        {/* Event / answer markers */}
        {markers.map((m, i) => {
          const left = pctOf(m.year);
          if (left < -2 || left > 102) return null;
          const color = TONE_COLOR[m.tone];
          const above = m.tone === 'user';
          return (
            <div key={`${m.tone}-${m.year}-${i}`} className="absolute top-1/2 -translate-x-1/2" style={{ left: `${left}%` }}>
              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: above ? -28 : 6, width: 2, height: 22, background: color }}
              />
              <div
                className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-ink-800"
                style={{ background: color }}
              />
              {m.label && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-1 text-[10px] font-medium"
                  style={{ top: above ? -44 : 30, color }}
                >
                  {m.label}
                </div>
              )}
            </div>
          );
        })}

        {/* Draggable placement marker */}
        {draggable && value != null && (
          <div className="absolute top-1/2 -translate-x-1/2" style={{ left: `${pctOf(value)}%` }}>
            <div className="absolute left-1/2 h-16 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-blue-400" />
            <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink-800 bg-blue-400 shadow-lg" />
          </div>
        )}
      </div>
    </div>
  );
}
