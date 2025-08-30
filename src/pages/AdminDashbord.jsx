import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const existingAdmin = JSON.parse(localStorage.getItem("admin"));

  if (!existingAdmin) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          No admin found 🚫
        </h2>
        <p className="mb-4">Please signup or login as an admin first.</p>
        <div className="flex gap-4">
          <Link
            to="/layout/adminSignup"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Signup
          </Link>
          <Link
            to="/layout/adminLogin"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full bg-blue-600 text-white font-bold text-3xl flex justify-center">
        Welcome {existingAdmin.name} to Admin Dashboard
      </div>
      <h1 className="mt-5">Do you want to see user orders? Click below</h1>
      <Link
        className="bg-black text-white font-bold rounded-lg px-2"
        to="/layout/orderAdmin"
      >
        Click Here
      </Link>
    </>
  );
};

export default AdminDashboard;
