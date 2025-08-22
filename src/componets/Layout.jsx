import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main> 
        <Outlet />
      </main>
      <Toaster position="top-right" reverseOrder={false} />
      <Footer/>
    </div>
  );
};

export default Layout;
