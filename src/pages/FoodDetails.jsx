import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../slice/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const FoodDetails = () => {
  const navigate = useNavigate();
  const existingUser = localStorage.getItem("user");
  const { foodId } = useParams();
  const dispatch = useDispatch();

  const singleProductDetials = async () => {
    try {
      const response = await axios.get("http://localhost:4000/restaurants");
      if (!response) throw new Error("failed to fetch single product details");
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
    queryFn: singleProductDetials,
  });

  const allItems =
    menu?.flatMap((restaurant) =>
      restaurant?.menu?.map((items) => ({
        ...items,
        restaurantName: restaurant.name,
        rating: restaurant.rating,
        location: restaurant.location,
        uniqueId: `${restaurant.id}-${items.id}`,
      }))
    ) || [];

  const singleProduct = allItems.find((item) => item.uniqueId === foodId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  if (!singleProduct) return <p>No product found</p>;

  return (
    <div className="flex flex-col items-center mt-9">
      <div className="shadow-2xl bg-white p-4 rounded-lg w-96 overflow-hidden group">
        <img
          src={singleProduct.image}
          alt={singleProduct.name}
          className="h-64 w-96 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110"
        />
        <h2 className="font-bold text-xl mt-4">{singleProduct.name}</h2>
        <p className="text-gray-600">⭐ {singleProduct.rating}</p>
        <p className="text-gray-500">{singleProduct.location}</p>
        <p className="text-green-600 font-semibold">
          Price: ₹{singleProduct.price}
        </p>

        <Link to={existingUser ? "/cart" : "/signup"}>
          {existingUser ? (
            <button
              onClick={() => {
                dispatch(addToCart(singleProduct));
                toast.success("Item added to cart");
              }}
              className="bg-yellow-400 text-white font-semibold p-2 px-4 rounded-md mt-3 hover:bg-yellow-500 transition"
            >
              Add To Cart
            </button>
          ) : (
            <button
              onClick={() => {
                toast.error("Please signup first");
                navigate("/signup");
              }}
              className="bg-red-500 text-white font-semibold p-2 px-4 rounded-md mt-3 hover:bg-red-600 transition"
            >
              Signup to Add
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default FoodDetails;
