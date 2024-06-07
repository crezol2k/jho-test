import { lazy } from "react";
import { Navigate } from "react-router-dom";
import SuspensedView from "../components/share/suspensed";

const LazyAuthPage = lazy(() => import("../pages/auth"));

const AuthRoutes = [
  {
    path: "/*",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login/*",
    element: (
      <SuspensedView>
        <LazyAuthPage />
      </SuspensedView>
    ),
  },
];

export default AuthRoutes;
