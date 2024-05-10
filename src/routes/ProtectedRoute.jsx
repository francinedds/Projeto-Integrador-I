import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  const auth = localStorage.getItem("auth");
  return auth !== null;
};

const ProtectedRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
