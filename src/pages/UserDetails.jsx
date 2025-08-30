import React from "react";

const UserDetails = () => {
  const existingUser = JSON.parse(localStorage.getItem("user"));

  if (!existingUser) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold">No user found</h2>
        <p>Please login or signup first.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">User Details</h2>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Field</th>
            <th className="border border-gray-300 px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Name</td>
            <td className="border border-gray-300 px-4 py-2">{existingUser.name}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Email</td>
            <td className="border border-gray-300 px-4 py-2">{existingUser.email}</td>
          </tr>
          {/* Add more fields if you save them in localStorage */}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
