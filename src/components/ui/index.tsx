import type { ButtonHTMLAttributes, ReactNode } from 'react';

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'outline';
}) {
  const base =
    'w-full rounded-card px-5 py-4 font-medium text-base transition active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100';
  const variants = {
    primary: 'bg-ember-500 text-ink-900 hover:bg-ember-400',
    ghost: 'bg-ink-700 text-mist-100 hover:bg-ink-600',
    outline: 'border border-ink-500 text-mist-100 hover:bg-ink-700'
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Card({
  children,
  className = '',
  onClick
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`rounded-card bg-ink-700 p-5 ${onClick ? 'cursor-pointer active:scale-[0.99] transition' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'ember' }) {
  const tones = {
    neutral: 'bg-ink-600 text-mist-300',
    ember: 'bg-ember-600/20 text-ember-400'
  };
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function Spinner({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-mist-400">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink-500 border-t-ember-500" />
      {label && <p className="text-sm">{label}</p>}
    </div>
  );
}

// A horizontal mastery bar (0–1).
export function MasteryBar({ value }: { value: number }) {
  const pct = Math.round(value * 100);
  const color = pct >= 70 ? 'bg-good' : pct >= 40 ? 'bg-ember-500' : 'bg-bad';
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-ink-600">
      <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${pct}%` }} />
    </div>
  );
}
