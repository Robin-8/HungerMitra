import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  const singleUser = async () => {
    const response = await axios.get(`https://fakestoreapi.com/users/${id}`);
    return response.data;
  };

  const {
    data: single,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["singleUser", id],
    queryFn: singleUser,
    enabled: !!id,
  });

  if (isLoading) return <p>Loading user...</p>;
  if (isError) return <p>Error loading user</p>;

  return (
    <div className="p-10 shadow-lg rounded-lg bg-white w-96 h-44 mx-auto mt-12">
      <h2 className="text-3xl uppercase font-bold mb-2 flex justify-center ">
        {single.name.firstname} {single.name.lastname}
      </h2>
      <div className="flex flex-col justify-center items-center">
        <p>Email: {single.email}</p>
        <p>City: {single.address.city}</p>
        <p>Username: {single.username}</p> 
      </div>
        <Link to={"/user"}>
          <button className="bg-blue-600 px-5 rounded-sm text-white font-bold p-2 mt-12 flex mx-auto">
            Back to User Page
          </button>
        </Link>
    </div>
  );
};

export default UserDetails;
