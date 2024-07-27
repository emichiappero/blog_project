import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ component: Component }) => {
  const { user } = useAuth();

  console.log("ProtectedRoute - User:", user);

  return user ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
