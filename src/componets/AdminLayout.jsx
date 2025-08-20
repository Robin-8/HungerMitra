import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { Toaster } from "react-hot-toast";
const AdminLayout = () => {
  return (
    <div className="flex">
      <AdminNavbar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AdminLayout;
