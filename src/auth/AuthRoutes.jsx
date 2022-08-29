import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Login from "../routes/Login";
import { authenticatedState } from "../recoil/store";

const AuthRoutes = () => {
  const location = useLocation();
  const authenticated = useRecoilValue(authenticatedState);
  return authenticated ? <Outlet /> : <Login to={location.pathname} />;
};
export default AuthRoutes;
