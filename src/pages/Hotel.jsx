import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Hotel = () => {
  const hotelData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/restaurants");
      if (!response) throw new Error("fetching not working");
      return response.data;
    } catch (error) {
      throw new Error("somthing error happen");
    }
  };
  const {
    data: hotels = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["hotels"],
    queryFn: hotelData,
  });
  return (
    <>
      <h1 className="font-bold flex justify-center mt-3 text-2xl dark:text-white">
        Avilable Hotels
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-4">
        {hotels?.map((resturant) => (
          <Link key={resturant.id} to={`/hotelDetails/${resturant.id}`}>
            <div className="shadow-2xl bg-white rounded-lg gap-4 mt-5 overflow-hidden group hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
              <img
                key={resturant.id}
                src={resturant.image}
                alt="hotelImage"
                className=" w-64 h-48 object-fit rounded-lg"
              />
              <p className="font-bold ">{resturant.name}</p>
              <p>{resturant.rating}</p>
              <p>{resturant.location}</p>
              <p>{resturant.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Hotel;
