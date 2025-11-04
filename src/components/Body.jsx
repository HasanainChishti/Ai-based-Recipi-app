import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Allblogs } from "../data/data";
import Hero from "./Hero";
import veg from "../assets/images/veg.png"
import nonVeg from "../assets/images/nonVeg.png"
const Body = () => {
  const all = [
    { id: 1, name: "North Indian" },
    { id: 2, name: "South Indian" },
    { id: 3, name: "chinese" },
    { id: 4, name: "Indian Dessert" },
    { id: 5, name: "Indian Beverage" },
  ];
  const [cat, setCat] = useState("North India");
  // const [recipi,setRecipe]=useState([]);
  let recipi;
  console.log(cat);
  
   recipi=Allblogs.filter((item)=>(item.region==cat))
 console.log(Allblogs);
 
   console.log(recipi);
   
  // filterBlogs=Allblogs.filter((blog)=> blog.category==cat)
  //  console.log(filterBlogs);

  const [activeCategory, setActiveCategory] = useState(all[0].name);

  const handleClick = (cat) => {
    setActiveCategory(cat);
    // onCategorySelect(cat);
   
    setCat(cat);
  };
  return (
    <>
    {/* <Hero></Hero> */}
    <div id="recipes" className=" flex  flex-col justify-center  items-center   mx-auto  w-[100%] mt-10">
      
      <div    className="  overflow-x-auto py-4 rounded-xl px-4   flex  gap-3  w-[80%] mx-auto justify-start text-center">
        {all.map((cat, index) => (
          <button
            key={index}
            onClick={() => handleClick(cat.name)}
            className={`px-4 py-2 rounded-full text-xl font-medium whitespace-nowrap 
            ${
              activeCategory === cat.name
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-green-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="   w-[80%] place-items-center  grid  justify-center align-middle grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-0 lg:grid-cols-3 lg:gap-10 items-center mb-5  mt-3 r pt-5">
        
     
      {
      recipi.map((meal) => (
        <Link to={`/Recipi/${meal.id}`}>
        <div
          key={meal.idMeal}
        
          className=" shadow-md bg-gray-50 h-65 w-60 rounded-xl flex flex-col relative"
        >
          <img
            src={meal.image}
            alt={meal.strMeal||null}  
           className="object-cover w-75 h-50  rounded-xl relative bg-black"
          />
          {/* <span className="text-xl text-white-300 font-bold  absolute top-1"> {meal.type}</span> */}
          {/* <img src={meal.type} alt={meal.type} className="h-10 w-10 absolute top-2 " /> */}
         <div className="details flex flex-col p-1 text-2xl gap-2 items-center ">
           <h3 >{meal.name}</h3>
          {/* <h2>{meal.category}</h2> */}
         </div>
        </div>
        </Link>
      ))}
    </div>
        
      </div>
   </>
  );
};

export default Body;
