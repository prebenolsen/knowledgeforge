import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui';
import { LanguageToggle } from '@/components/layout/LanguageToggle';

export function Login() {
  const { t } = useTranslation();
  const { signInWithGitHub, signInWithEmail, signInWithPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showEmail, setShowEmail] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  async function handlePassword() {
    if (!email || !password) return;
    setError('');
    setBusy(true);
    try {
      await signInWithPassword(email, password);
      // On success the auth listener swaps the view; nothing else to do here.
    } catch {
      setError(t('auth.signInError'));
    } finally {
      setBusy(false);
    }
  }

  async function handleMagicLink() {
    if (!email) return;
    setError('');
    await signInWithEmail(email);
    setSent(true);
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

        <div className="mt-10 space-y-3">
          <Button onClick={() => void signInWithGitHub()}>
            <span className="mr-2">⌨️</span>
            {t('auth.signInGithub')}
          </Button>

          {!showEmail ? (
            <Button variant="outline" onClick={() => setShowEmail(true)}>
              {t('auth.signInEmail')}
            </Button>
          ) : sent ? (
            <p className="rounded-card bg-ink-700 p-4 text-center text-sm text-good">
              {t('auth.linkSent')}
            </p>
          ) : (
            <div className="space-y-3">
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
                autoComplete="current-password"
                placeholder={t('auth.passwordPlaceholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') void handlePassword();
                }}
                className="w-full rounded-card border border-ink-500 bg-ink-800 px-5 py-4 text-base text-mist-100 placeholder:text-mist-400 focus:border-ember-500 focus:outline-none"
              />

              {error && <p className="text-sm text-bad">{error}</p>}

              <Button onClick={() => void handlePassword()} disabled={busy}>
                {t('auth.signInPassword')}
              </Button>

              <button
                type="button"
                onClick={() => void handleMagicLink()}
                className="w-full text-center text-sm text-mist-400 underline-offset-2 hover:underline"
              >
                {t('auth.sendLink')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
