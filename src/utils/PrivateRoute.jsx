import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserDataContext } from "../context/UserDataContext";

const PrivateRoute = () => {
  const [userData] = useUserDataContext();
  return userData?.authenticationToken ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
