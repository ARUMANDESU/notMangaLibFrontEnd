import React from "react";
import { useAuth } from "../store/StoreContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectTo = "/login" }: { redirectTo: string }) => {
  const auth = useAuth();
  if (!auth) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
