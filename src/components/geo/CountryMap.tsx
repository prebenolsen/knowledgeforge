import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

const MIN_SCALE = 1;
const MAX_SCALE = 8;
// How far (in client px) a pointer may travel before a tap counts as a drag.
const TAP_SLOP = 6;

interface CountryMapProps {
  continent: string;
  // Quizable countries on this continent, keyed by iso3.
  quizable: Set<string>;
  // Per-country status overrides (e.g. the highlighted target, a pick result).
  status?: Record<string, CountryStatus>;
  // Fired when a quizable country is tapped (omit to make the map display-only).
  onPick?: (iso3: string) => void;
}

// Pan/zoom transform applied to the whole map: displayed = translate + scale * content.
interface Transform {
  k: number; // scale
  x: number; // translate x (viewBox units)
  y: number; // translate y (viewBox units)
}

const IDENTITY: Transform = { k: 1, x: 0, y: 0 };

export function CountryMap({ continent, quizable, status = {}, onPick }: CountryMapProps) {
  const viewBox = CONTINENT_VIEWBOX[continent] ?? [0, 0, 2000, 1000];
  const [vbMinX, vbMinY, vbW, vbH] = viewBox;
  const interactive = Boolean(onPick);

  // Build the path list once; identity is stable so only fills re-evaluate.
  const entries = useMemo(() => Object.entries(WORLD_PATHS), []);

  const svgRef = useRef<SVGSVGElement>(null);
  // The pan/zoom transform. Lives in component state so it SURVIVES parent
  // re-renders (answering a question, picking a target, showing feedback all
  // re-render the game without remounting the map) — the view never resets.
  const [transform, setTransform] = useState<Transform>(IDENTITY);

  // Only reset the view when the continent actually changes.
  useEffect(() => {
    setTransform(IDENTITY);
  }, [continent]);

  // Active touch/pointer points, keyed by pointerId (client coordinates).
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const lastPan = useRef<{ x: number; y: number } | null>(null); // last single-pointer pos
  const downPoint = useRef<{ x: number; y: number } | null>(null); // where the press began
  const pinchDist = useRef<number | null>(null); // last two-pointer distance
  const moved = useRef(false); // gesture exceeded TAP_SLOP → suppress the tap

  // Map a client (screen) point to the SVG's displayed coordinate space,
  // accounting for the default xMidYMid-meet letterboxing.
  const toViewBox = useCallback(
    (clientX: number, clientY: number) => {
      const svg = svgRef.current;
      if (!svg) return { x: 0, y: 0 };
      const r = svg.getBoundingClientRect();
      const s = Math.min(r.width / vbW, r.height / vbH);
      const offX = (r.width - vbW * s) / 2;
      const offY = (r.height - vbH * s) / 2;
      return {
        x: vbMinX + (clientX - r.left - offX) / s,
        y: vbMinY + (clientY - r.top - offY) / s
      };
    },
    [vbMinX, vbMinY, vbW, vbH]
  );

  // Clamp scale to range and translation so the map always fills the view
  // (no empty borders, can't pan the content off-screen).
  const clamp = useCallback(
    (next: Transform): Transform => {
      const k = Math.min(Math.max(next.k, MIN_SCALE), MAX_SCALE);
      const maxX = vbMinX * (1 - k);
      const minX = (vbMinX + vbW) * (1 - k);
      const maxY = vbMinY * (1 - k);
      const minY = (vbMinY + vbH) * (1 - k);
      return {
        k,
        x: Math.min(Math.max(next.x, minX), maxX),
        y: Math.min(Math.max(next.y, minY), maxY)
      };
    },
    [vbMinX, vbMinY, vbW, vbH]
  );

  // Scale by `factor` while keeping the displayed point under (fx, fy) fixed.
  const zoomAround = useCallback(
    (factor: number, fx: number, fy: number) => {
      setTransform((prev) =>
        clamp({
          k: prev.k * factor,
          x: fx - factor * (fx - prev.x),
          y: fy - factor * (fy - prev.y)
        })
      );
    },
    [clamp]
  );

  const onPointerDown = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    svgRef.current?.setPointerCapture(e.pointerId);
    if (pointers.current.size === 1) {
      lastPan.current = { x: e.clientX, y: e.clientY };
      downPoint.current = { x: e.clientX, y: e.clientY };
      moved.current = false;
    } else if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinchDist.current = Math.hypot(a.x - b.x, a.y - b.y);
      moved.current = true; // two fingers is never a tap
    }
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      if (!pointers.current.has(e.pointerId)) return;
      pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

      if (pointers.current.size >= 2) {
        // Pinch: zoom around the midpoint of the first two fingers.
        const [a, b] = [...pointers.current.values()];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        const prev = pinchDist.current;
        pinchDist.current = dist;
        if (prev && dist > 0) {
          const mid = toViewBox((a.x + b.x) / 2, (a.y + b.y) / 2);
          zoomAround(dist / prev, mid.x, mid.y);
        }
        moved.current = true;
        return;
      }

      // One finger: pan. Shift the translate by the finger's displayed delta.
      const last = lastPan.current;
      if (!last) return;
      const cur = toViewBox(e.clientX, e.clientY);
      const prevVb = toViewBox(last.x, last.y);
      lastPan.current = { x: e.clientX, y: e.clientY };
      setTransform((p) => clamp({ k: p.k, x: p.x + (cur.x - prevVb.x), y: p.y + (cur.y - prevVb.y) }));

      // A press only counts as a drag once it travels past the tap threshold,
      // so a normal tap still registers as a country pick.
      const start = downPoint.current;
      if (start && Math.hypot(e.clientX - start.x, e.clientY - start.y) > TAP_SLOP) {
        moved.current = true;
      }
    },
    [toViewBox, zoomAround, clamp]
  );

  const onPointerUp = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    pointers.current.delete(e.pointerId);
    svgRef.current?.releasePointerCapture?.(e.pointerId);
    if (pointers.current.size < 2) pinchDist.current = null;
    if (pointers.current.size === 1) {
      // Resume panning from the remaining finger without a jump.
      const [p] = [...pointers.current.values()];
      lastPan.current = { x: p.x, y: p.y };
    } else if (pointers.current.size === 0) {
      lastPan.current = null;
      downPoint.current = null;
    }
  }, []);

  // Wheel zoom (desktop / trackpad). Native non-passive listener so we can
  // preventDefault and stop the page from scrolling under the map.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const f = toViewBox(e.clientX, e.clientY);
      zoomAround(Math.exp(-e.deltaY * 0.0015), f.x, f.y);
    };
    svg.addEventListener('wheel', onWheel, { passive: false });
    return () => svg.removeEventListener('wheel', onWheel);
  }, [toViewBox, zoomAround]);

  return (
    <svg
      ref={svgRef}
      viewBox={viewBox.join(' ')}
      className="h-auto w-full touch-none select-none"
      role="img"
      aria-label={`Map of ${continent}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <g transform={`translate(${transform.x} ${transform.y}) scale(${transform.k})`}>
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
              // Ignore the tap if the gesture was a pan/pinch, not a real pick.
              onClick={clickable ? () => !moved.current && onPick!(iso3) : undefined}
            />
          );
        })}
      </g>
    </svg>
  );
}
