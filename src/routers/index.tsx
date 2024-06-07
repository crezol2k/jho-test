import { useRoutes } from "react-router-dom";
import { AUTH } from "../constant/auth";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";

const RootRoutes = () => {
  const isLoggedIn = localStorage.getItem(AUTH);

  const SwitchRoutes = isLoggedIn ? PrivateRoutes : AuthRoutes;

  return useRoutes([...SwitchRoutes]);
};

export default RootRoutes;
