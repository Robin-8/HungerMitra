import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const existingUser = JSON.parse(localStorage.getItem("user"));
  console.log(existingUser)

  if (!existingUser || existingUser.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
