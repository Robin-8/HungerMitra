import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const UserManager = () => {
  // Step 1: function that POSTs to json-server
  const createUser = async (newUser) => {
    const response = await axios.post("http://localhost:4000/users", newUser);
    return response.data;
  };

  // Step 2: useMutation hook
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log("User created:", data);
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
  });

  // Step 3: example usage
  const handleCreateUser = () => {
    mutation.mutate({
      id:4,
      name: "Ann",
      email: "ann888@gmail.com",
      password: 123,
      role: "admin", // or "admin"
    });
  };

  return (
    <div>
      <button
        onClick={handleCreateUser}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create User
      </button>
    </div>
  );
};

export default UserManager;
