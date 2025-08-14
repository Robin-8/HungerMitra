import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full bg-blue-600 p-5">
      <div>
        <h1 className="text-2xl font-bold text-white ml-12">Logo</h1>
      </div>
      <div>
        <ul className="flex font-bold text-white gap-x-4 mr-16">
          <NavLink to={'/home'}>
            <li>Home</li>
          </NavLink>
          <NavLink to={'/contact'}>
            <li>Contact</li>
          </NavLink>
          <NavLink to={'/user'}>
            <li>User</li>
          </NavLink>
          <NavLink to={'/about'}>
            <li>About</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
