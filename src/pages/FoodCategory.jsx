import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";

const FoodCategory = () => {
  const fetchingFoodItems = async () => {
    try {
      const response = await axios.get("/api/server/restaurants");

      if (!response) throw new Error("fetching not happening");
      return response.data
    } catch (error) {
      console.log(error);
    }
  };

  const {data:menu,error,isLoading}=useQuery({
    queryKey:['menu'],
    queryFn:fetchingFoodItems
  })
  const { category } = useParams();
  const {fooId}=useParams()

  const allItems =
    menu?.flatMap((restaurant) =>
      restaurant.menu.map((items) => ({
        ...items,
        location: restaurant.location,
        restaurantName: restaurant.name,
        uniqueId:`${restaurant.id}-${items.id}`
      }))
    ) || [];
  const filteredItems = allItems.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <>
      <div className="flex  justify-center font-bold text-2xl">
        <h1>Your Selected Food Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {filteredItems?.map((item) => (
          <div key={item.id} className="shadow-2xl m-6">
            <img
              src={item.image}
              alt="food-image"
              className="rounded-2xl h-44 w-56 "
            />
            <p className="font-bold">{item.name}</p>
            <p className=""> Price:{item.price}</p>
            <p>{item.location}</p>
            <Link to={`/foodDetails/${item.uniqueId}`}>
            <button className="bg-blue-600 text-white font-semibold p-2 px-2 rounded-md">Product Detials</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodCategory;
