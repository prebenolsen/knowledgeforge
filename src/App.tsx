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

// Routes where the bottom nav should be hidden (focused/full-screen flows).
const FULLSCREEN = ['/quiz', '/review', '/placement'];

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/:categoryId" element={<ModuleList />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/review" element={<Review />} />
          <Route path="/placement" element={<PlacementTest />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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
