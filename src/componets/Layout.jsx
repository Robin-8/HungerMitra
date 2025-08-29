import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main>
        <Outlet darkMode={darkMode} setDarkMode={setDarkMode}/>
      </main>
      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
    </div>
  );
};

export default Layout;
