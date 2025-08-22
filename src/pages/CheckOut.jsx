import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
      <div className="grid col-span-1 bg-white items-center justify-center">
        {cartItems?.map((item) => (
          <div className="shadow-2xl bg-white">
            <img
              src={item.image}
              alt="image in cart"
              className="w-2/3 h-56 object-contain"
            />
            <p>
              {" "}
              Price: {item.price} × {item.quantity} ={" "}
              {item.price * item.quantity}
            </p>
              <p>Total Price :{totalPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
