import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ROUTES } from './configs/routes';
import ProtectedRoute from './modules/common/components/ProtectedRoute';
import EditorPage from './modules/editor/pages/EditorPage';

const HomePage = lazy(() => import('./modules/home/pages/HomePage'));
const ContactPage = lazy(() => import('./modules/home/pages/ContactPage'));
const LoginPage = lazy(() => import('./modules/auth/pages/LoginPage'));
const SignUpPage = lazy(() => import('./modules/auth/pages/SignUpPage'));

interface Props {}

export const Routes = (props: Props) => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Switch location={location}>
        <Route path={ROUTES.login} component={LoginPage} />
        <Route path={ROUTES.signUp} component={SignUpPage} />
        <Route path={ROUTES.editor} component={EditorPage} />
        <ProtectedRoute path={ROUTES.home} component={HomePage} />
        <Route path={ROUTES.contact} component={ContactPage} />

        <Route path="/" component={LoginPage} />
      </Switch>
    </Suspense>
  );
};
