import React from "react";
import { useSelector } from "react-redux";

const OrderAdmin = () => {
  const orderDetials = useSelector((state) => state.cart.items);
  console.log(orderDetials, "orderDetails");
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Order Details</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
              <th className="px-6 py-3">Order ID</th> 
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Items</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          {orderDetials?.map((item) => (
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{item.id}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4">2025-08-27</td>
                <td className="px-6 py-4">
                  <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default OrderAdmin;
