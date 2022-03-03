import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { RootState } from '@app/store/index';
import { Login } from '@app/pages/Login';
import { Home } from '@app/pages/Home';
import Form from './pages/form/Form';
import { EditForm } from './pages/form/EditForm';

function AuthedRoute() {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/form/:id" element={<Form />} />
        <Route path="/edit-form/:id" element={<EditForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
