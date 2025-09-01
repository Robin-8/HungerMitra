import { Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const fetchingFoodItems = async () => {
    try {
      const response = await axios.get("https://fooddaily.onrender.com/restaurants");

      if (!response) throw new Error("fetching is not working");
      console.log(response, "reshpone here");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const {
    data: menu,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: fetchingFoodItems,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  return (
    <div className="min-h-screen w-full flex flex-col bg-orange-500 dark:bg-black">
      <div className="flex flex-col text-6xl mx-auto mt-16 ">
        <h1 className="font-bold text-white text-sm sm:text-2xl md:text-4xl lg:text-6xl">
          Order food & groceries. Discover
        </h1>
        <h1 className="font-bold text-white text-sm sm:text-2xl md:text-4xl lg:text-6xl">
          best restaurants. HungerMitra!
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-10 max-w-6xl mx-auto gap-24">
          <div className="shadow-md bg-white rounded-2xl mt-8 p-6 h-60 w-60 relative overflow-hidden group">
            <Link to={`hotel`}>
              <h4 className="font-bold text-2xl text-gray-500 uppercase ">
                Food Time
              </h4>
              <p className="text-gray-500 mt-2 text-sm uppercase ">
                from restaurants
              </p>
              <img
                src="/logo-chef.webp"
                alt=""
                className="w-32 h-32 object-contain absolute bottom-2 right-2 transform transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          </div>
          <div className="shadow-md bg-white rounded-2xl mt-8 p-6 h-60 w-60 relative overflow-hidden group">
            <Link>
              <h4 className="font-bold text-2xl text-gray-500 uppercase">
                Grocery
              </h4>
              <p className="text-gray-500 mt-2 text-sm uppercase">
                from stores near you
              </p>
              <img
                src="/logo-chef.webp"
                alt=""
                className="w-32 h-32 object-contain absolute bottom-2 right-2 transform transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          </div>

          <div className="shadow-md bg-white rounded-2xl mt-8 p-6 h-60 w-60 relative overflow-hidden group">
            <Link>
              <h4 className="font-bold text-2xl text-gray-500 uppercase ">
                Dineout
              </h4>
              <p className="text-gray-500 mt-2 text-sm uppercase ">
                Eat Out & Save more
              </p>
              <img
                src="/logo-chef.webp"
                alt=""
                className="w-32 h-32 object-contain absolute bottom-2 right-2 transform transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-white mt-10 mx-auto underline">
        Some top food category for you
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-5 ">
        {menu?.map((restaurant) =>
          restaurant.menu?.map((item) => (
            <Link key={item.id} to={`foodCategory/${item.category}`}>
              <div className="flex flex-col items-center gap-y-3 ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-full h-32 w-32 object-cover transform transition-transform duration-300 hover:scale-110"
                />
                <p className="font-bold text-center">{item.category}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
