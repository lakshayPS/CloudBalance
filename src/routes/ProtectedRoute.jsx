import React from "react";
import { Navigate } from "react-router-dom";
import MainContent from "../components/layout/MainContent";
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
