import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AdminSignup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const storedAdmin = localStorage.getItem("admin");

    if (storedAdmin) {
      toast.error("An admin account already exists.");
      return;
    }

    // Save admin
    localStorage.setItem("admin", JSON.stringify(data));
    toast.success("Admin registration completed");
  };

  // Watch password field for confirm validation
  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center justify-center h-96 mt-16">
        <div className="flex flex-col shadow-2xl bg-white rounded-xl gap-y-4 w-96 p-5">
          {/* Name */}
          <label htmlFor="name">Enter Name</label>
          <input
            {...register("name", { required: "Enter your name" })}
            id="name"
            placeholder="Enter Your Name"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          {/* Email */}
          <label htmlFor="email">Enter Email</label>
          <input
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            id="email"
            placeholder="Enter Your Email"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          {/* Password */}
          <label htmlFor="password">Password</label>
          <input
            {...register("password", {
              required: "Enter your password",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d).+$/,
                message:
                  "Password must include at least 1 uppercase letter and 1 number",
              },
            })}
            id="password"
            type="password"
            placeholder="Enter Your Password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          {/* Confirm Password */}
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            id="confirmPassword"
            type="password"
            placeholder="Confirm Your Password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className=" bg-green-600 hover:bg-green-700 text-white font-semibold p-2 px-4 rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdminSignup;
