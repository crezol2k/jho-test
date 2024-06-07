import { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "../../components/login";
import Dashboard from "../dashboard";
import { AUTH } from "../../constant/auth";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const auth = localStorage.getItem(AUTH);
  return auth ? children : <Navigate to='/login' />;
};

const AuthPage: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        <Route
          path='/'
          element={
            <PrivateRoute>
              <Navigate to='/dashboard' />
            </PrivateRoute>
          }
        />

        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </Router>
  );
};

export default AuthPage;

