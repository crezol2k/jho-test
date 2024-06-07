import { lazy } from "react";
import { Navigate } from "react-router-dom";
import SuspensedView from "../components/share/suspensed";
import RootLayout from "../layout/Root.layout";

const LazyDashboardPage = lazy(() => import("../pages/dashboard"));

const PrivateRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/*",
        element: <Navigate to="/dashboard" />,
      },

      // Dashboard
      {
        path: "/dashboard",
        element: (
          <SuspensedView>
            <LazyDashboardPage />
          </SuspensedView>
        ),
      },
    ],
  },
];

export default PrivateRoutes;
