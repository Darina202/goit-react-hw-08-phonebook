import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUser } from '../redux/auth/auth-operations';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import PublicRoutes from './PublicRoutes/PublicRoutes';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const PhonebookPage = lazy(() =>
  import('../pages/PhonebookPage/PhonebookPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<PublicRoutes />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="contacts" element={<PhonebookPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
