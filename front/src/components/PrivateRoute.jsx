// PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const adminLoggedIn = localStorage.getItem("adminLoggedIn");
  return adminLoggedIn ? children : <Navigate to="/admin" replace />;
};

export default PrivateRoute;
