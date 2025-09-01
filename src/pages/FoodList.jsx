import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const FoodList = () => {
  const productListing = async () => {
    try {
const response = await axios.get("https://fooddaily.onrender.com/restaurants");

      if (!response) throw new Error("something error is happening");
      return response.data;
    } catch (error) {
      console.log(error, "fetching is not done ");
    }
  };

  const [serach, setSerach] = useState("");

  const {
    data: menu = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: productListing,
  });

  const allItems = menu?.flatMap((restaurant) =>
    restaurant.menu.map((items) => ({
      ...items,
      location: restaurant.location,
      restaurantName: restaurant.name,
      uniqueId: `${restaurant.id}-${items.id}`,
    }))
  );

  let filteredItems = allItems.filter((p) =>
    p.name.toLowerCase().includes(serach.toLowerCase())
  );



  const filter = filteredItems;
  return (
    <>
      <div className="flex justify-center font-bold text-2xl mt-5">
        Poduct Listing
      </div>
      <div className="flex justify-end mx-3 gap-x-2">
        <input
          type="text"
          placeholder="Enter Favourite Food"
          className="p-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition duration-200"
          value={serach}
          onChange={(e) => setSerach(e.target.value)}
        />
     
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 m-6 mt-5">
        {filter.length > 0 ? (
          filter.map((item) => (
            <div key={item.uniqueId} className="shadow-md p-2 rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded-md"
              />
              <p className="font-bold">{item.name}</p>
              <p>Price: {item.price}</p>
              <p className="text-sm text-gray-600"> {item.location}</p>
              <Link to={`/foodDetails/${item.uniqueId}`}>
                <button className="bg-blue-600 text-white p-2 px-3 rounded-md">
                  Food Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-red-500 font-semibold">
            🚫 No matching product found
          </p>
        )}
      </div>
    </>
  );
};

export default FoodList;
