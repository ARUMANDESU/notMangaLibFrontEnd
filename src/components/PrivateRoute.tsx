import React from "react";
import { useAuth } from "../context/StoreContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectTo = "/singin" }: { redirectTo: string }) => {
  const auth = useAuth();
  if (!auth) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
