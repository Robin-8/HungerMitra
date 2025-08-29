import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";


const OrderSuccess = () => {
  const navigate = useNavigate();
 



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <FaCheckCircle size={80} className="text-green-600 mb-6 animate-bounce" />
      <h1 className="text-3xl font-bold text-green-700">Order Placed Successfully!</h1>
      <p className="text-gray-700 mt-3 text-lg">
        Thank you for your purchase. Your food will be delivered soon 🍽️
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default OrderSuccess;
