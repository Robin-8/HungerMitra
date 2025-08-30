import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const HotelDetails = () => {
  const [search, setSearch] = useState("");
  const [sortedOption, setSortedOption] = useState("");

  const { hotelId } = useParams();

  const fetchHotel = async () => {
    const response = await axios.get(`http://localhost:4000/restaurants`);
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

      <div className="flex items-center justify-end mr-2">
        <input
          type="text"
          placeholder="Search menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 my-4 rounded-md focus:border-blue-500  focus:ring-blue-500"
        />
        <select
          value={sortedOption}
          onChange={(e) => setSortedOption(e.target.value)}
          className="border p-2 my-4 rounded-md focus:border-blue-500  focus:ring-blue-500"
        >
          <option value="">Sort By</option>
          <option value="High-Low">Price:High to Low</option>
          <option value="Low-High">Price:Low to High</option>
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
