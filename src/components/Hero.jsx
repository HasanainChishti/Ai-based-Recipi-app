import React from "react";

const Hero = () => {
  return (
    <section className=" shadow-md relative rounded-xl  bg-gradient-to-r from-green-400 via-green-200 to-green-400 mt-20  mx-auto h-130 w-auto  sm:w-[50%]  sm:h-[40%] md:w-[60%] md:h-[75%] lg:w-[80%]  lg:h-full flex justify-center align-middle"  >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80" // food/recipe banner
        alt="Recipe Banner"
        className="absolute inset-0 w-full h-full  object-cover opacity-30 rounded-xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 drop-shadow-lg">
          Discover & Cook Delicious Recipes 🍳
        </h1>
      
<h2 className="mt-8 hidden   sm:block text-lg sm:text-xl md:text-2xl lg:text-2xl text-green-900 max-w-2xl">
  Explore thousands of recipes from Indian, Italian, Chinese, Desserts & Beverages. 
  Get step-by-step guides with ingredients instantly!
</h2>

{/* Small screens */}
<h2 className="mt-0 block  text-2xl font-semibold sm:hidden">
  Explore recipes from Here
</h2>
        <div className="mt-8 flex gap-4">
          {/* <input
            type="text"
            placeholder="Search recipes..."
            className="px-4 py-3 rounded-full w-72 md:w-96  border-green-600 border-2 text-black bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600"
          /> */}
          {/* <button className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-950 transition">
            Search
          </button> */}
        </div> 
      </div>
    </section>
  );
};

export default Hero;