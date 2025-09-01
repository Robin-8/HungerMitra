import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const existingUser = JSON.parse(localStorage.getItem("user"));

  if (!existingUser || existingUser.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
