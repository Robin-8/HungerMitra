import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

import { Link } from "react-router-dom";

const User = () => {
  const userFetching = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/users");
      console.log(response.data);
      return response.data;
    } catch (error) {}
  };
  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: userFetching,
  });
  return(
    <>
    {isLoading && <p className="text-2xl font-bold text-center mt-10">Loading...</p>}
    {isError && <p>Error</p>}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5 ">
      {users.map((user)=>(
        <div key={user.id} className="shadow-2xl bg-white p-5 flex flex-col items-center"> 
             <ul>
              <li className="text-3xl font-bold underline"> {user.name.firstname.toUpperCase()}</li>
             </ul>
            <Link to={`/userDetails/${user.id}`}>
             <button className="bg-blue-600 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-300 px-3 mt-5">View Details</button>
             </Link>
        </div>
        
      ))}
      
    </div>
    </>
  )
};

export default User;
