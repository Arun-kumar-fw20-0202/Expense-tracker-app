import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};
