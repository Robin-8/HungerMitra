import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch, 
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      toast.error("User already registered");
    } else {
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("User registration is successful");
      navigate("/");
    }
  };

  const password = watch("password"); 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center justify-center h-96 mt-16">
        <div className="flex flex-col shadow-2xl bg-white rounded-xl gap-y-4 w-96 p-5">
          {/* Name */}
          <label htmlFor="name">Enter Name</label>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Name must be at least 3 characters" },
            })}
            id="name"
            placeholder="Enter Your Name"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          {/* Email */}
          <label htmlFor="email">Enter Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            id="email"
            placeholder="Enter Your Email"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d).+$/, // at least one uppercase & one number
                message: "Password must contain at least one uppercase letter and one number",
              },
            })}
            id="password"
            placeholder="Enter Your Password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) => value === password || "Passwords do not match",
            })}
            id="confirmPassword"
            placeholder="Confirm Your Password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}

          
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition text-white font-medium rounded-xl p-2"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
