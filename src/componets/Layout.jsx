import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <div className="">
        <Navbar />

        <main>
          <Outlet />
        </main>

        
      </div>
    </>
  );
};

export default Layout;
