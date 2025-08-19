import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const FoodList = () => {
  const productListing = async () => {
    try {
      const response = await axios.get("http://localhost:4000/restaurants");
      if (!response) throw new Error("something error is happening");
      return response.data;
    } catch (error) {
      console.log(error, "fetching is not done ");
    }
  };

  const [serach, setSerach] = useState("");
  const [sortedOption, setSortedOption] = useState("");

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

  if (sortedOption === "Low-High") {
    filteredItems = [...filteredItems].sort((a, b) => a.price - b.price);
  } else if (sortedOption === "High-Low") {
    filteredItems = [...filteredItems].sort((a, b) => b.price - a.price);
  }

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
        <select
          value={sortedOption}
          onChange={(e) => setSortedOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="High-Low">Price:High to Low</option>
          <option value="Low-High">Price:Low to High</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 m-6 mt-5">
        {filter?.map((item) => (
          <div key={item.uniqueId} className="shadow-md p-2 rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover rounded-md"
            />
            <p className="font-bold">{item.name}</p>
            <p>Price: {item.price}</p>
            <p className="text-sm text-gray-600">📍 {item.location}</p>
            <Link to={`/foodDetails/${item.uniqueId}`}>
              <button className="bg-blue-600 text-white ">Food Detials</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodList;
