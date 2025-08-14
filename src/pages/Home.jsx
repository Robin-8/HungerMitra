import React from "react";

const Home = () => {
  return (
    <>
     <h1 className="text-4xl font-bold flex justify-center mx-auto p-2 mt-5">
          Home Page
        </h1>
      <div className="flex justify-center  max-h-full mt-16">
       
        <div className="shadow-2xl bg-white  rounded-3xl p-28 flex-col justify-center">
          <h1 className="font-bold text-3xl ">Welcome to Home</h1>
          <p>
            Are you looking for users go to user page and find which user you
            want
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
