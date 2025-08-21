import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 const navigate = useNavigate()
  const onSubmit = (data) => {
   const trimedEmail = data.email.trim()
   const trimedPassword = data.password.trim()
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      toast.error("No user found signup first");
      return;
    }
    const presentUser = JSON.parse(storedUser);
    
    if (
      trimedEmail === presentUser.email &&
      trimedPassword=== presentUser.password
    ) {
      toast.success("User login successful");
      navigate('/')
    } else {
      toast.error("Invalid Password or Email");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center justify-center gap-4 mt-10 ">
        <div className="flex flex-col shadow-2xl bg-white rounded-xl p-2 w-96 h-96">
          <label htmlFor="email">Enter Email</label>
          <input
            {...register("email", { required: true })}
            placeholder="Enter Email"
            className="border-2 border-black rounded-md p-2 "
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <label htmlFor="password">Enter Password</label>
          <input
            {...register("password", { required: true })}
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

export default Login;
