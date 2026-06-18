import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui';
import { LanguageToggle } from '@/components/layout/LanguageToggle';

export function Login() {
  const { t } = useTranslation();
  const { signInWithGitHub, signInWithPassword, signUpWithPassword } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [confirmSent, setConfirmSent] = useState(false);

  async function handleSubmit() {
    if (!email || !password) return;
    setError('');
    setBusy(true);
    try {
      if (mode === 'signup') {
        const { needsConfirmation } = await signUpWithPassword(email, password);
        if (needsConfirmation) setConfirmSent(true);
        // Otherwise the auth listener swaps the view automatically.
      } else {
        await signInWithPassword(email, password);
      }
    } catch {
      setError(mode === 'signup' ? t('auth.signUpError') : t('auth.signInError'));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-full flex-col px-6 py-10">
      <div className="flex justify-end">
        <LanguageToggle />
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <div className="mb-2 text-5xl">🔥</div>
        <h1 className="font-display text-4xl font-bold">{t('app.name')}</h1>
        <p className="mt-2 text-mist-300">{t('app.tagline')}</p>

        <p className="mt-8 text-sm leading-relaxed text-mist-400">{t('auth.intro')}</p>

        {confirmSent ? (
          <p className="mt-10 rounded-card bg-ink-700 p-4 text-center text-sm text-good">
            {t('auth.confirmSent')}
          </p>
        ) : (
          <div className="mt-10 space-y-3">
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder={t('auth.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-card border border-ink-500 bg-ink-800 px-5 py-4 text-base text-mist-100 placeholder:text-mist-400 focus:border-ember-500 focus:outline-none"
            />
            <input
              type="password"
              autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
              placeholder={t('auth.passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') void handleSubmit();
              }}
              className="w-full rounded-card border border-ink-500 bg-ink-800 px-5 py-4 text-base text-mist-100 placeholder:text-mist-400 focus:border-ember-500 focus:outline-none"
            />

            {error && <p className="text-sm text-bad">{error}</p>}

            <Button onClick={() => void handleSubmit()} disabled={busy}>
              {mode === 'signup' ? t('auth.signUpPassword') : t('auth.signInPassword')}
            </Button>

            <button
              type="button"
              onClick={() => {
                setError('');
                setMode(mode === 'signup' ? 'signin' : 'signup');
              }}
              className="w-full text-center text-sm text-mist-400 underline-offset-2 hover:underline"
            >
              {mode === 'signup' ? t('auth.haveAccount') : t('auth.needAccount')}
            </button>

            <div className="flex items-center gap-3 py-1 text-xs text-mist-500">
              <span className="h-px flex-1 bg-ink-600" />
              {t('auth.or')}
              <span className="h-px flex-1 bg-ink-600" />
            </div>

            <Button variant="outline" onClick={() => void signInWithGitHub()}>
              <span className="mr-2">⌨️</span>
              {t('auth.signInGithub')}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
