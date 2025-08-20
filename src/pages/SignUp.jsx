import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
   const {register,handleSubmit, formState:{errors}}= useForm()
   const navigate=useNavigate()

   const onSubmit=(data)=>{
     const existingUser = localStorage.getItem('user')
     if(existingUser){
      toast.error('User already register')
     }else{
      localStorage.setItem('user',JSON.stringify(data))
      toast.success('user registration is successful')
      navigate('/')
     }
   }
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="flex flex-col items-center justify-center h-96 mt-16">
        <div className="flex flex-col shadow-2xl bg-white rounded-xl gap-y-4 w-96 p-5">
          <label htmlFor="name">Enter Name</label>
          <input
            {...register("name", { required: "name required" })}
            id="name"
            placeholder="Enter Your Name"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <label htmlFor="email">Enter Email</label>
          <input
            {...register("email", { required: "email required" })}
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
            {...register("password", { required: "password required" })}
            id="password"
            placeholder="Enter Your Password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...register("confirmPassword", {
              required: "confirm password required",
            })}
            id="confirmPassword"
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

export default SignUp;
