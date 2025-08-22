import { ShoppingCart } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
   localStorage.getItem("user",JSON.stringify());
   const existingUser = JSON.parse(localStorage.getItem('user'))
   
  return (
    <nav className="flex justify-between items-center w-full shadow-2xl bg-white p-5">
      <Link to={"/"}>
        <div className="flex items-center gap-x-2 font-bold text-white text-xl">
          <img
            src="/logo-chef.webp"
            alt="logo-header"
            className="w-12 h-12 rounded-2xl\"
          />
          <p className="text-black">HungerMitra</p>
        </div>
      </Link>

      <div>
        <ul className="flex font-bold text-black gap-x-4 mr-16">
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li>Contact</li>
          </NavLink>
          <NavLink to={"/cart"}>
            <li className="flex items-center">
              {cartItems.length} Cart <ShoppingCart />
            </li>
          </NavLink>
          {existingUser ? (
            <p>Welcom, {existingUser.name}</p>
          ) : (
            <Link to={'/signup'}>
              <button className="font-semibold text-white">Signup</button>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
