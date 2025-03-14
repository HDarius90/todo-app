import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingSpinner from './components/loading-spinner/loading-spinner.component';

const Navigation = lazy(
  () => import('./routes/navigation/navigation.component')
);
const Home = lazy(() => import('./routes/home/home.component'));
const Authentication = lazy(
  () => import('./routes/authentication/authentication.component')
);

const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
