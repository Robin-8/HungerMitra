import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const adminEmail = data.email.trim();
    const adminPassword = data.password.trim();

    const existingAdmin = localStorage.getItem("admin");

    if (!existingAdmin) {
      toast.error("Admin not found. Please register first");
      return;
    }

    const parsedAdmin = JSON.parse(existingAdmin);

    if (
      adminEmail === parsedAdmin.email &&
      adminPassword === parsedAdmin.password
    ) {
      toast.success("Login successful");
      navigate("/adminDashbord");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Admin Login
        </h2>

        {/* Email */}
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
        )}

        {/* Password */}
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">
            {errors.password.message}
          </p>
        )}

        {/* Button */}
        <button
          type="submit"
          className=" bg-green-600 hover:bg-green-700 text-white font-semibold p-2 px-4 rounded-lg transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
