import React, { useState } from "react";
import { FaGooglePay, FaUniversity, FaMoneyBillWave } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Payment = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [selected, setSelected] = useState("");

  // ✅ Array of payment options
  const paymentOptions = [
    {
      id: "gpay",
      name: "Google Pay",
      icon: <FaGooglePay size={28} className="text-blue-600" />,
    },
    {
      id: "phonepe",
      name: "PhonePe",
      icon: <SiPhonepe size={28} className="text-purple-600" />,
    },
    {
      id: "netbanking",
      name: "Net Banking",
      icon: <FaUniversity size={24} className="text-green-600" />,
    },
    {
      id: "cod",
      name: "Cash on Delivery",
      icon: <FaMoneyBillWave size={24} className="text-yellow-600" />,
    },
  ];

  return (
    <>
      <div className="font-bold text-2xl m-4">Payment Options</div>
      <div className="grid grid-cols-2 gap-6">
        <ul className="grid grid-cols-1 gap-y-4 mt-5 m-4">
          {paymentOptions.map((option) => (
            <li
              key={option.id}
              onClick={() => setSelected(option.name)}
              className={`flex items-center gap-3 shadow-md rounded-xl p-4 cursor-pointer transition
                ${
                  selected === option.name
                    ? "border-2 border-blue-600 bg-blue-50"
                    : "bg-white hover:shadow-xl"
                }`}
            >
              {option.icon}
              {option.name}
            </li>
          ))}
        </ul>

        {/* ✅ Cart Preview */}
        <div className="grid-cols-1 m-4">
          <h2 className="font-semibold text-xl mb-3">Your Cart</h2>
          {cartItems?.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 mb-3 shadow p-3 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link to={'/OrderSuccess'}>
        {selected && (
          <div className="m-4 p-4 bg-green-100 border border-green-400 rounded-lg text-lg">
            ✅ You selected <span className="font-bold">{selected}</span>.
            Proceed to payment.
          </div>
        )}
      </Link>
    </>
  );
};

export default Payment;
