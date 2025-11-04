import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=({setLog})=>{
    const [ulogin,usetLogin]=useState(0);
    const  navigate=useNavigate();
   return (
          <div className="login flex  items-center min-h-screen justify-center bg-green-50">
            {
          ulogin?(<div className="flex flex-col pt-4 p-4  w-80 h-70 bg-white shadow-lg rounded-2xl ">
            <h3 className="text-2xl text-green-400 items-center text-center font-semibold ">  Login</h3>
         
      <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Login SuccessFully");
            //  const data=new FormData(form); 
            //  console.log("data",data);
             setLog(true);
            navigate('/')
          }}
          className="flex flex-col gap-6"
        >
        
          <input
            type="text"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
          >
           Login
          </button>
        </form>
        


          </div>):(
            <div className="flex flex-col pt-4 p-4  w-80 h-90 bg-white shadow-lg rounded-2xl ">

            <h3 className="text-2xl text-green-400 items-center text-center font-semibold ">SignUp</h3>
       
      <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("SignUp SuccessFully");
            //  const data=new FormData(); 
            //  console.log("data",data);
              setLog(true);
            navigate('/')
          }}
          className="flex flex-col gap-6"
        >
       
          <input
            type="text"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />
             <input
            type="password"
            placeholder="enter Password"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
          >
           SignUp
          </button>
        </form>
        <h7>Already signup? <button className="text-green-400" onClick={()=>usetLogin(!ulogin)}>Login</button></h7>
    
         

          </div>)
          
}
          </div>
   )
} 
export default Login;