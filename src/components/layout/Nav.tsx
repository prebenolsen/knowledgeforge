import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LanguageToggle } from './LanguageToggle';

export function Header({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-ink-900/90 px-5 py-4 backdrop-blur">
      <h1 className="text-xl font-bold">{title}</h1>
      <LanguageToggle />
    </header>
  );
}

const NAV = [
  { to: '/', key: 'home', icon: '🏠' },
  { to: '/categories', key: 'learn', icon: '📚' },
  { to: '/review', key: 'review', icon: '🔁' },
  { to: '/progress', key: 'progress', icon: '📊' }
] as const;

export function BottomNav() {
  const { t } = useTranslation();
  return (
    <nav
      className="sticky bottom-0 z-10 grid grid-cols-4 border-t border-ink-700 bg-ink-800"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {NAV.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 py-3 text-xs transition ${
              isActive ? 'text-ember-400' : 'text-mist-400'
            }`
          }
        >
          <span className="text-lg">{item.icon}</span>
          {t(`nav.${item.key}`)}
        </NavLink>
      ))}
    </nav>
  );
}
