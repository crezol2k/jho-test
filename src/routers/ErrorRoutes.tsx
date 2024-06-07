import { lazy } from "react";
import SuspensedView from "../components/share/suspensed";

const LazyErrorPage = lazy(() => import("../pages/error.page"));

const ErrorRoutes = [
  {
    path: "/error/*",
    element: (
      <SuspensedView>
        <LazyErrorPage />
      </SuspensedView>
    ),
  },
  {
    path: "/*",
    element: (
      <SuspensedView>
        <LazyErrorPage />
      </SuspensedView>
    ),
  },
];

export default ErrorRoutes;
