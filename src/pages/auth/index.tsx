import { FC } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "../../components/login";

const AuthLayout = () => {
  return <Outlet />;
};

const AuthPage: FC = () => {

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path='login' element={<LoginPage />} />
        <Route index element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AuthPage;
