import { ShoppingCart, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const existingUser = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="w-full bg-white shadow-2xl fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-x-2 font-bold">
          <img
            src="/logo-chef.webp"
            alt="logo-header"
            className="w-10 h-10 rounded-2xl"
          />
          <p className="text-black text-lg sm:text-xl">HungerMitra</p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-6 font-bold text-black">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/hotel"}>Hotels</NavLink>
          <NavLink to={"/cart"} className="flex items-center gap-x-1">
            <ShoppingCart />
            <span>{cartCount}</span>
          </NavLink>
          {existingUser ? (
            <p>{existingUser.name}</p>
          ) : (
            <Link to={"/signup"}>
              <button className="font-semibold text-white bg-blue-600 px-3 py-1 rounded-lg">
                Signup
              </button>
            </Link>
          )}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 text-lg"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </ul>

        {/* Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full">
          <ul className="flex flex-col items-start px-4 py-4 gap-y-4 font-bold text-black">
            <NavLink to={"/"} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to={"/hotel"} onClick={() => setMenuOpen(false)}>
              Hotels
            </NavLink>
            <NavLink
              to={"/cart"}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-x-1"
            >
              <ShoppingCart />
              <span>{cartCount}</span>
            </NavLink>
            {existingUser ? (
              <p>{existingUser.name}</p>
            ) : (
              <Link to={"/signup"} onClick={() => setMenuOpen(false)}>
                <button className="font-semibold text-white bg-blue-600 px-3 py-1 rounded-lg">
                  Signup
                </button>
              </Link>
            )}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-0 text-lg"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
