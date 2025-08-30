import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart, minusQuantity } from "../slice/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // calculate total
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col items-center mt-8">
      {cartItems.length === 0 ? (
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold mb-4">🛒 Your cart is empty</h2>
          <Link
            to="/hotel"
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
          >
            Go to Hotel Page
          </Link>
        </div>
      ) : (
        <div className="shadow-2xl rounded-md w-96 p-4">
          {cartItems.map((item) => (
            <div key={item.id} className="border-b pb-4 mb-4">
              <img
                src={item.image}
                alt="food"
                className="rounded-lg h-20 w-20 mt-2"
              />
              <h3 className="font-semibold">{item.name}</h3>

              <div className="flex items-center gap-x-2 mt-2">
                <button
                  className="bg-black text-white font-bold px-2 rounded-md"
                  onClick={() => dispatch(addToCart(item))}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className={`px-2 rounded-md font-bold 
    ${
      item.quantity === 0
        ? "bg-gray-400 text-gray-200 cursor-not-allowed"
        : "bg-black text-white"
    }`}
                  disabled={item.quantity === 0}
                  onClick={() => dispatch(minusQuantity(item))}
                >
                  -
                </button>

                <button
                  className="bg-red-600 text-white font-semibold rounded-md px-2"
                  onClick={() => dispatch(removeCart(item.id))}
                >
                  Delete
                </button>
              </div>

              <div className="mt-2 font-semibold">
                Price: {item.price} × {item.quantity} ={" "}
                {item.price * item.quantity}
              </div>
            </div>
          ))}

          <div className="mt-4 text-lg font-bold text-center">
            Total: ₹{totalPrice}
            <Link to={"/checkout"}>
              <p className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 mt-4">
                Checkout
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
