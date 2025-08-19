import { ShoppingCart } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);
  return (
    <nav className="flex justify-between items-center w-full bg-yellow-400 p-5">
      <div className="flex items-center gap-x-2 font-bold text-white text-xl">
        <img src='/logo-chef.webp' alt="logo-header" className="w-12 h-12 rounded-2xl"/>
        <p>HungerMitra</p>
      </div>
      <div>
        <ul className="flex font-bold text-white gap-x-4 mr-16">
          <NavLink to={'/'}>
            <li>Home</li>
          </NavLink>
          <NavLink to={'/contact'}>
            <li>Contact</li>
          </NavLink>
          <NavLink to={'/user'}>
            <li>User</li>
          </NavLink>
          <NavLink to={'/cart'}>
            <li className="flex items-center">{cartItems.length} Cart <ShoppingCart/></li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
