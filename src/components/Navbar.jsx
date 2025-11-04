// import React from "react";
// import Banner from "../assets/images/Header.png"
// import Hero from "./Hero";
// const Navbar = () => {
//   return (
//     <div className="flex flex-col ">
//     <nav className="h-[150px]  p-5 flex flex-col  bg-white shadow-md  justify-center  ">
//       <nav className="flex justify-evenly  text-gray-900  text-center align-middle ">
//         <h2 className="text-4xl  font-semibold text-start">MyRecipi</h2>

//         {/* <button className=" text-2xl  font-bold">Search</button> */}
//         <input type="text" placeholder="Search recipi" className="text-2xl text-gray-900 bg-gray-200 p-2 rounded-xl" />
//         <ul className="flex  text-2xl  gap-6  font-bold  justify-end items-center mr-20 text-gray-900 ">
//           <button className="text-gray-900 p-2 rounded-xl">Home</button>
      
//    <button className="text-gray-900">Contact</button>
//           <button className="text-gray-900">LogIn</button>
//         </ul>
//       </nav>
// {/* 
//       <div className="flex flex-col items-center p-5 w-full mt-[50px] " >
//         <h1 className="w-full text-4xl md:text-3xl font-bold text-purple-100 text-center">
//           Discover Amazing Articles & Stories
//         </h1>
//          <p className="mt-4 text-2xl text-gray-400">
//           Read curated blogs on Technology, Lifestyle, and Productivity.
//         </p>
//       </div> */}
      
//        {/* <div className="mt-6 flex justify-center space-x-4">
//           <a
//             to="/blogs"
//             className="px-6 py-3 hover:bg-purple-400 text-2xl text-white rounded-md "
//           >
//             Explore Blogs
//           </a>
//           <a
//             to="/write"
//             className="px-6 py-3 border border-purple-600 text-white rounded-md hover:bg-purple-600"
//           >
//             Start Writing
//           </a>
//         </div> */}
//     </nav>
//     {/* <Hero></Hero> */}
//             </div>
//   );
// };
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchRecipi from "../pages/SearchRecipi";
import Body from "./Body";
import { useParams } from "react-router-dom";
const Navbar = ({log}) => {
  const [isOpen, setIsOpen] = useState(false);
   const [search,setSearch]=useState('');
   const [dishValue,setDishValue]=useState('');
   const [guest,setGuest]=useState(0);
   
   console.log(search);
   console.log(dishValue);
   const isLogin=localStorage.getItem('login');
   const navigate=useNavigate();
   function handleKey(e)
   {
     if(e.key==='Enter')
     {
       if(search==="" || search==='null' || search===undefined )
       {
        alert('Please Enter valid Dish name');
        // rerturn;
       
       }
       else
       {
      navigate(`/SearchRecipi/${search}/`);
      
       }
        setDishValue('');
     }
     
   }
   function handleGuestLogin()
   {
      setGuest((prv)=>!prv);
   }
 
  return (
    <nav className="bg-green-400 shadow-md sticky top-0 z-50 sm:w-full md:w-full w-full lg:w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-8">
        <div className="flex justify-between items-center h-30 lg:flex lg:justify-evenly ">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-3xl font-extrabold text-white tracking-wide"
            >
              <span className="bg-gray-100 rounded-3xl border-1 text-green-600">🍲</span>MyRecipi
            </Link>
            </div>
 
          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-center px-4 lg:ml-25 md-10">
            <input
              type="text"
              placeholder="Enter Dish Name..."
               value={dishValue}
              onChange={(e)=> (
                setSearch(e.target.value),
                setDishValue(e.target.value)
                )
               }
               onKeyDown={(e)=>handleKey(e)}
             
              className="w-72 lg:w-70 md:w-46 px-4 py-4 rounded-full border text-black bg-[aliceblue] border-green-300 focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </div>

          {/* Menu Items (Desktop) */}
          <div className="hidden    md:flex md:justify-end  md:w-full lg:flex   lg:w-full items-center space-x-6 text-white font-medium">
            <Link to="/" className="hover:text-orange-200 transition  text-2xl">
              Home
            </Link>
            <button  onClick={()=>{ const section = document.getElementById("recipes");
            if(section)
    section.scrollIntoView({ behavior:"smooth"})}} 
   className="hover:text-orange-200 transition text-2xl">
              Recipes
            </button>
       
        
             <Link to={"/Contact"}> <span className="text-2xl text-white">Contact</span></Link>
            {/* {
            guest?(<ul className=" text-2xl bg-orange-600 mt-4 rounded-2xl">
             
              <button  onClick={()=>setLogin()}  className="text-white text-2xl p-2">GuestLogin</button>
            </ul>):(<button onClick={()=>handleGuestLogin()} className="bg-white text-green-600 px-4 py-2 rounded-full hover:bg-orange-200 transition text-2xl">
              Log In

            </button>)
             } */}
             {
             log?(
            <p className="text-2xl bg-white rounded-full ">👤</p>
             ):(<Link to={"/Login"} className="text-2xl text-white">Login</Link>)
             }
             </div>

          {/* Mobile menu button */}
          <div className="md:hidden   lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-green-700 text-white items-center">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-green-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        <button  onClick={()=>{ const section = document.getElementById("recipes");
            if(section)
    section.scrollIntoView({ behavior:"smooth"})}} 
   className="hover:text-orange-200 transition text-2xl">
              Recipes
            </button>
        
         <input
              type="text"
              placeholder="Search recipes..."
              className="w-72  px-4 py-2 rounded-full border text-black bg-[aliceblue] border-green-300 focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={dishValue}
              onChange={(e)=> (
                setSearch(e.target.value),
                setDishValue(e.target.value)
                )}
          />
          <button  onClick={()=>{const about=document.getElementById('footer');
              about.scrollIntoView({behavior:"smooth"})}}  className="hover:text-orange-200 transition text-2xl">
              About
            </button>
          <button
            to="/login"
            className="block px-4 py-2 bg-white text-green-700 font-semibold hover:bg-orange-200"
            onClick={() => setIsOpen(false)}
          >
            Log In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
// // export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     // bg-gradient-to-r from-green-800 via-green-400 to-green-400
//     <nav className="bg-white  shadow-md mt-2  text-green-600 w-[90%] mx-auto">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-30 text-green-600 ">
//         <div className="flex justify-between h-30">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center text-3xl font-bold">
//             {/* <Link to="/" className="text-2xl font-bold"> */}
//               RecipeApp
//             {/* </Link> */}
//             {/* 🍳 */}
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-6 text-2xl font-semibold">
//             <Link to="/" className="hover:text-orange-300">
//               Home
//             </Link>
//             <Link to="/recipes" className="hover:text-orange-300">
//               Recipes
//             </Link>
//             <Link to="/categories" className="hover:text-orange-300">
//               Categories
//             </Link>
//             <Link to="/about" className="hover:text-orange-300">
//               About
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white focus:outline-none"
//             >
//               {isOpen ? (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-green-700">
//           <Link
//             to="/"
//             className="block px-4 py-2 hover:bg-green-500"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/recipes"
//             className="block px-4 py-2 hover:bg-green-500"
//             onClick={() => setIsOpen(false)}
//           >
//             Recipes
//           </Link>
//           <Link
//             to="/categories"
//             className="block px-4 py-2 hover:bg-green-500"
//             onClick={() => setIsOpen(false)}
//           >
//             Categories
//           </Link>
//           <Link
//             to="/about"
//             className="block px-4 py-2 hover:bg-green-500"
//             onClick={() => setIsOpen(false)}
//           >
//             About
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
