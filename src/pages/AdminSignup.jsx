import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AdminSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const adminName = data.name.trim();
    const adminEmail = data.email.trim();
    const adminPassword = data.password.trim();
    const adminConfirmPassword = data.confirmPassword.trim();
    const storedAdmin = localStorage.getItem("admin");
    if (storedAdmin) {
      toast.error("An admin account already exists.");
      return;
    }
    if (adminPassword !== adminConfirmPassword) {
      toast.error("password not matched");
      return;
    }
    if (!adminName && !adminEmail) {
      toast.error("enter name and email");
      return;
    }
    localStorage.setItem("admin", JSON.stringify(data));
    toast.success("Admin registration compleated");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center justify-center h-96 mt-16">
        <div className="flex flex-col shadow-2xl bg-white rounded-xl gap-y-4 w-96 p-5">
          <label htmlFor="name">Enter Name</label>
          <input
            {...register("name", { required: "enter your name" })}
            id="name"
            placeholder="Enter Your Name"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <label htmlFor="email">Enter Email</label>
          <input
            {...register("email", { required: "enter your email" })}
            id="email"
            placeholder="Enter Your Email"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: "enter your password" })}
            id="password"
            type="password"
            placeholder="Enter Your Password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {errors.passowrd && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...register("confirmPassword", {
              required: "enter your confirmPassword",
            })}
            id="confirmPassword"
            type="password"
            placeholder="Confirm Your Password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
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
