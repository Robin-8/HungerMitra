import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart } from "../slice/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="shadow-2xl rounded-md w-96">
        {cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="food-image" className="rounded-lg" />
            <h3>{item.title}</h3>
            <p>Qty: {item.quantity}</p>
            <button onClick={() => dispatch(addToCart(item))}>+</button>
            <button
              className="bg-red-600 text-white font-semibold"
              onClick={() => dispatch(removeCart(item.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
