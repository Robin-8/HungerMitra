import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Search } from "lucide-react";

const HotelDetails = () => {
  const [search, setSearch] = useState("");
  const [sortedOption, setSortedOption] = useState("");

  const { hotelId } = useParams();

  const fetchHotel = async () => {
    const response = await axios.get(
      "https://hungermitra-api.onrender.com/restaurants"
    );

    return response.data.find((hotel) => hotel.id == hotelId);
  };

  const {
    data: hotel,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["hotel", hotelId],
    queryFn: fetchHotel,
  });

  const allItems =
    hotel?.menu.map((item) => ({
      ...item,
      hotelName: hotel.name,
      location: hotel.location,
      hotelImage: hotel.image,
    })) || [];

  let filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  if (sortedOption === "Low-High") {
    filteredItems = [...filteredItems].sort((a, b) => a.price - b.price);
  } else if (sortedOption === "High-Low") {
    filteredItems = [...filteredItems].sort((a, b) => b.price - a.price);
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  if (!hotel) return <p>No hotel found</p>;

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold dark:text-white">{hotel.name}</h1>
        <p className="dark:text-white">{hotel.location}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mx-4 my-6">
        {/* Search Input */}
        <div className="relative w-full sm:w-1/2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search menu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                 bg-gray-50 dark:bg-gray-900 dark:text-white transition"
          />
        </div>

        <select
          value={sortedOption}
          onChange={(e) => setSortedOption(e.target.value)}
          className="w-full sm:w-48 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 
               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
               bg-gray-50 dark:bg-gray-900 dark:text-white transition cursor-pointer"
        >
          <option value="">Sort By</option>
          <option value="High-Low">Price: High to Low</option>
          <option value="Low-High">Price: Low to High</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredItems.map((value) => (
          <div
            key={value.id}
            className="shadow-lg p-4 rounded-lg overflow-hidden group"
          >
            <img
              src={value.image}
              alt={value.name}
              className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110 rounded-lg"
            />
            <h2 className="font-bold mt-2">{value.name}</h2>
            <p className="text-gray-600">₹{value.price}</p>
            <Link to={`/foodDetails/${hotel.id}-${value.id}`}>
              <button className="bg-black text-white font-bold rounded-md mt-2 p-2 px-4 hover:bg-gray-800 transition">
                Food Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default HotelDetails;
