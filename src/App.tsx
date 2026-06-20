import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/hooks/useAuth';
import { Spinner } from '@/components/ui';
import { BottomNav } from '@/components/layout/Nav';
import { Login } from '@/pages/Login';
import { Home } from '@/pages/Home';
import { CategoryList, ModuleList } from '@/pages/Browse';
import { Quiz, Review } from '@/pages/Quiz';
import { PlacementTest } from '@/pages/PlacementTest';
import { Progress } from '@/pages/Progress';

// The Atlas bundles a large map dataset — load it on demand only.
const Atlas = lazy(() => import('@/pages/Atlas'));
// The Timeline bundles its own event dataset — load it on demand too.
const TimelinePage = lazy(() => import('@/pages/Timeline'));
// Mental Models & Paradoxes bundles its own concept dataset — load on demand.
const ConceptsPage = lazy(() => import('@/pages/Concepts'));
// Language Learning bundles its own language content — load on demand too.
const LanguagePage = lazy(() => import('@/pages/Language'));

// Routes where the bottom nav should be hidden (focused/full-screen flows).
const FULLSCREEN = ['/quiz', '/review', '/placement', '/atlas', '/timeline', '/concepts', '/language'];

function Shell() {
  const { session, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!session) return <Login />;

  const hideNav = FULLSCREEN.some((p) => location.pathname.startsWith(p));

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col">
      <main className="flex-1">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/:categoryId" element={<ModuleList />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/review" element={<Review />} />
            <Route path="/placement" element={<PlacementTest />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/atlas" element={<Atlas />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/concepts" element={<ConceptsPage />} />
            <Route path="/language" element={<LanguagePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      {!hideNav && <BottomNav />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Shell />
      </HashRouter>
    </AuthProvider>
  );
}
