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
        <h1 className="font-bold text-lg flex justify-center underline">Select delivary addres</h1>
        <form action="" className="flex flex-col gap-y-4 shadow-2xl m-4">
          <p className="font-bold text-xl items-center">Enter Your Addres</p>
          <input type="text" placeholder="Addres" />
          <input type="text" placeholder="Flat/Door" />
          <input type="text" placeholder="Landmark" />
          <input type="number" placeholder="Mob No" />
          <Link to={"/payment"}>
            <button className="bg-green-600 p-2 px-2 rounded-md text-white font-semibold ">
              Proceed to Pay
            </button>
          </Link>
        </form>
      </div>
      <div className="grid col-span-1 bg-white items-center justify-center ">
        {cartItems?.map((item) => (
          <div className="shadow-2xl bg-white rounded-md">
            <img
              src={item.image}
              alt="image in cart"
              className="w-full h-56 object-contain rounded-md "
            />
            <p className="font-semibold mt-5">
              {" "}
              Price: {item.price} × {item.quantity} ={" "}
              {item.price * item.quantity}
            </p>
              <p className="font-semibold">Total Price :{totalPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
