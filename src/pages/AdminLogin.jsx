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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center justify-center gap-4 mt-10">
        <div className="flex flex-col shadow-2xl bg-white rounded-xl p-2 w-96 h-96">
          {/* Email */}
          <label htmlFor="email">Enter Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // simple email regex
                message: "Enter a valid email",
              },
            })}
            placeholder="Enter Email"
            className="border-2 border-black rounded-md p-2"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          {/* Password */}
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="Enter Password"
            className="border-2 border-black rounded-md p-2"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md mt-4"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdminLogin;
