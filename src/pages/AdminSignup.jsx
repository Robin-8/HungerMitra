import React from "react";

const AdminSignup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // login logic
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center h-96 mt-16">
        <div className="flex flex-col shadow-2xl bg-white rounded-xl gap-y-4 w-96 p-5">
          <label htmlFor="name">Enter Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label htmlFor="email">Enter Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Your Password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Your Password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition text-white font-medium rounded-xl p-2"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdminSignup;
