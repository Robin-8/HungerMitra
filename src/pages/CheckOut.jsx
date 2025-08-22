import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="grid grid-cols-2">
      <div className="grid col-span-1  bg-white">
        <h1>Select delivary addres</h1>
        <form action="" className="flex flex-col gap-y-4 shadow-2xl m-4">
          <p className="font-bold text-xl items-center">Enter Your Addres</p>
          <input type="text" placeholder="Addres" />
          <input type="text" placeholder="Flat/Door" />
          <input type="text" placeholder="Landmark" />
          <input type="number" placeholder="Mob No" />
          <Link to={"/orderDetails"}>
            <button className="bg-blue-600 p-2 px-2 rounded-md text-white font-semibold ">
              Order Place
            </button>
          </Link>
        </form>
      </div>
      <div className="grud col-span-1 bg-white">
        {cartItems?.map((item) => (
          <div>
            <img src={item.image} alt="image in cart" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
