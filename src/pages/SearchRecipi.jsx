import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router";
import Markdown from "react-markdown";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SearchRecipi = () => {
  const { name } = useParams();
    if(name==null || name=="" || name==undefined)
      {
        alert('please Enter valid dish name')
        // Navigate
      }
  const [data, setData] = useState("");
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAKTEeZLuKPVND_g46b8FS2388oBSdK24M"
  );

  async function getResponce(input) {
    try {
      // Model select
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      // Prompt send
      const result = await model.generateContent(input);

      // Text extract
      const text = result.response.text();
      //    console.log(text,lang);
      setData(text);
    } catch (err) {
      console.error("Gemini Error:", err);
      // setError("Something went wrong: " + err.message);
    }
  }
  useEffect(() => {
    if (name) {
      getResponce(`${name} banane ka simple tarika hindi me`);
      setData("");
    }
  }, [name]);
  return (
    //  <h1>yes this is page </h1>
           
    <div>
        <Navbar></Navbar>
      {
        data?(<div id="recipes" className="w-[70%] mx-auto h-auto bg-gray-800 text-gray-200 mt-20 pl-10">
          <Markdown>{data}</Markdown>
        </div>):
        (
               <div id="recipes" className="bg-gray-800 h-[100%] w-[80%] flex flex-col mx-auto pl-10 gap-2 pb-5">
                      <p>{name} Banane ki vidhi</p>

                      <ul className="flex gap-3 flex-col">
                        <p>Ingrediants</p>
                      <h3 className="w-[125] md:w-[250px] bg-gray-400 p-2 text-gray-400"> ing</h3>
                       <h3 className="w-[125] md:w-[250px] bg-gray-400 p-2 text-gray-400"> ing</h3>
                        <h3 className="w-[125] md:w-[250px] bg-gray-400 p-2 text-gray-400"> ing</h3>
                          <h3 className="w-[125] md:w-[250px] bg-gray-400 p-2 text-gray-400"> ing</h3>
                          <h3 className="w-[125] md:w-[250px] bg-gray-400 p-2 text-gray-400"> ing</h3>
                      </ul>
                      <ol className="flex flex-col gap-3 "> 
                        <p>Steps</p>
                        <h3 className="w-[200px] md:w-[500px] bg-gray-100 p-3">Step 1 </h3>
                        <h3 className="w-[200px] md:w-[500px] bg-gray-100 p-3">Step 2 </h3>
                        <h3 className="w-[200px] md:w-[500px] bg-gray-100 p-3">Step 3 </h3>
                        <h3 className="w-[200px] md:w-[500px] bg-gray-100 p-3">Step 4 </h3>
                        <h3 className="w-[200px] md:w-[500px] bg-gray-100 p-3">Step 5 </h3>
                      </ol>
                      </div>
        )
      }
      <Footer></Footer>
    </div>
  );
};
export default SearchRecipi;
