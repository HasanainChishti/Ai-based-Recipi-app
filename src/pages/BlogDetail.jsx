import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Allblogs } from "../data/data";
import Markdown from "react-markdown";
import { Link } from "react-router";
// ✅ Correct import
import { GoogleGenerativeAI } from "@google/generative-ai";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const BlogDetail = () => {
  const { id } = useParams();
  const item = Allblogs.find((item) => item.id == id);
  let cat=item.category;
  console.log(cat ,"cat is");
  
  const otherItem=Allblogs.filter((item)=>item.category==cat);
  console.log("other",otherItem);
  
  // ✅ Correct usage of class
  const genAI = new GoogleGenerativeAI("AIzaSyAKTEeZLuKPVND_g46b8FS2388oBSdK24M");

  const [data, setData] = useState("");
 const [lang, setLang] = useState("hindi");
  // async function getResponce(input) {
  //   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  //   const result = await model.generateContent(input);
  //   const text = result.response.text();
  //   setData(text);
  // }
// ✅ Your API key
  // const genAI = new GoogleGenerativeAI("YOUR_API_KEY_HERE");
console.log(lang);

  async function getResponce(input) {
    try {
      // Model select
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      // Prompt send
      const result = await model.generateContent(input);

      // Text extract
      const text = result.response.text();
      console.log(text,lang);
    setData(text);
      
    } catch (err) {
      console.error("Gemini Error:", err);
      // setError("Something went wrong: " + err.message);
    }
  }
  useEffect(() => {
    if (item?.name) {
        getResponce(`${item.name} banane ka  tarika ${lang} me`);
    }
  }, [item?.name,lang]);


// async function cnvLang(lang) {
//   try {
//     const response = await fetch(`https://api.mymemory.translated.net/get?q=${data}!&langpair='hindi'|${lang}`);
//     // , {
//     //   method: "POST",
//     //   body: JSON.stringify({
//     //     q: data,      // aapka state variable
//     //     source: "hi",
//     //     target: lang,
//     //     format: "text"
//     //   }),
//     //   headers: { "Content-Type": "application/json" }
//     // });

//     let result = await response.json();
//     setData(result.translatedText); // translated string

//   } catch (error) {
//     console.error("Translation failed:", error);
//   }
// }

  return (
    <>
    <div className="bg-gray-50 min-h-screen  flex flex-col ">
           <Navbar></Navbar>
        
      <div className="  flex flex-col   justify-center align-middle bg-gray-100 w-[40%]  sm:flex sm:flex-row  sm:w-[60%] sm:h-auto     md:w-[80%]   md:flex md:flex-row  mx-auto md:gap-5  mt-10  shadow-md  rounded-xl h-80 ">
       
       <div className="image w-[100%]  object-cover flex sm:justify-start sm:w-[50%] md:w-[30%] md:h-[50vh]">
         <img
          src={item?.image} 
          alt=""
          className="shadow-md text-white bg-gray-900 w-[100%] h-[40vh] rounded-xl "
        />
       </div>
        <div className=" w-[100%] items-start  justify-center align-middle  text-black flex flex-col sm:w-[50%]  md:w-[50%] sm:text-start h-[40vh]   gap-1 mx-auto bg-gray-100">
          {/* <h3 className="text-4xl">Details</h3> */}
          <h3 className=" text-3xl ">{item.name}</h3>
          <p className="">{item.category}</p>
          </div>
      </div > 
           {/* <div className="button w-[80%] text-gray-900 flex p-4 mx-auto justify-start mt-10  gap-5">
          <button onClick={()=>setLang('Hindi')} className="text-white p-2 text-2xl ">Hindi</button>
          <button onClick={()=>setLang("Gujrati")}>Gujrati</button>
          <button onClick={()=>setLang("English")}>English</button>
         
         </div>  */}


         {
          data?(
            <>
                 <div id="recipes" className="details text-xl bg-gray-100 text-black h-auto  w-[80%] pl-10 pt-10 pb-10 shadow-md mx-auto  items-center">
      
        <Markdown>{data}</Markdown>)
       
      </div>
      
      <h3 className="text-5xl font-sans text-black mt-10 text-start w-[80%] mx-auto"> {`Similar ${item.category} Food Recipi`}</h3>

      <div className=" w-[80%] flex  flex-nowrap  overflow-x-scroll mx-auto gap-6 mt-2  bg-gray-200 p-2 mb-10 ">
          {
              Allblogs.filter((food)=>food.category==cat).map((food)=>(
                           <Link to={`Recipe/${food.id}`}>
            <div className=" flex h-70 w-65  bg-white text-gray-900 flex-col p-1 shadow-md rounded-xl">
             
              <img src={food.image} alt="" className="  h-40  w-60 " />
                {/* <div className="flex justify-between p-2"> */}
                   <h3 className="p-1 text-2xl font-semibold">{food.name}</h3>
               <h5 className="p-1 text-xl  text-gray-800 font-semibold">{food.category}Food</h5>
               {/* <span className="text-gray-600 font-normal text-xl">({food.type})</span> */}
                {/* </div> */}
           

            </div>
            </Link>
              ))
             }
            
      </div>
      </>
          ):(
                    <div id="recipes" className="bg-gray-200 h-[100%] w-[80%] flex flex-col mx-auto pl-10 gap-2 pb-5">
                      <p>{item.name} Banane ki vidhi</p>

                      <ul className="flex gap-3 flex-col mx-auto">
                        <p>Ingrediants</p>
                      <h3 className=" w-[125] md:w-[250px] bg-gray-400 p-2 text-gray-400"> ing</h3>
                       <h3 className="w-[125] md:w-[250px] bg-gray-400 p-2 text-gray-400"> ing</h3>
                        <h3 className="w-[125] md:w-[250px] bg-gray-400 p-2 text-gray-400"> ing</h3>
                          <h3 className="w-[125] md:w-[250px] bg-gray-400 p-2 text-gray-400"> ing</h3>
                          <h3 className="w-[125] md:w-[250px] bg-gray-400 p-2 text-gray-400"> ing</h3>
                      </ul>
                      <ol className="flex flex-col gap-3 mx-auto"> 
                        <p>Steps</p>
                        <h3 className="w-[200px] md:w-[500px] bg-gray-100 p-3">Step 1 </h3>
                        <h3 className="w-[250px] md:w-[500px] bg-gray-100 p-3">Step 2 </h3>
                        <h3 className="w-[250px] md:w-[500px] bg-gray-100 p-3">Step 3 </h3>
                        <h3 className="w-[250px] md:w-[500px] bg-gray-100 p-3">Step 4 </h3>
                        <h3 className="w-[250px] md:w-[500px] bg-gray-100 p-3">Step 5 </h3>
                      </ol>
                      </div>
          )
         }
    
    </div>
    <Footer></Footer>
    </>
  );
};

export default BlogDetail;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { Allblogs } from "../data/data";
// import Markdown from "react-markdown";
// import { GoogleGenerativeAI } from "@google/generative-ai"
// const BlogDetail = () => {
//   let { id } = useParams();
//   console.log(id);
//   let item = Allblogs.find((item) => item.id == id);

//   console.log("yes", item.name);

//   // const ai = new GoogleGenerativeAI({
//   //   apiKey: "AIzaSyBTVgxzRUkNfQcu3TpkOvoEnAvRVzpi69I",
//   // });
  
//   const ai = new GoogleGenAI({
//     apiKey: "AIzaSyBTVgxzRUkNfQcu3TpkOvoEnAvRVzpi69I",
//   });
//   const [data, setData] = useState("");
//   let text = "";
//   async function getResponce(input) {
//     // setData((prv) => [...prv, { role: "user", content: `${input}` }]);
//     // setLoading(true);

// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// const result = await model.generateContent(input);
// const text = result.response.text();
// setData(text);
//     // setLoading(false);

//     text = response.text;
//     // console.log(text);
//     setData(text);
//     // JSON parse
//     // setData((prv) => [...prv, { role: "ai", content: `${text}` }]);
//     // try {
//     //   const recipe = JSON.parse(text); // ingredients aur steps array milenge
//     //   // console.log(recipe.ingredients);
//     //   // console.log(recipe.steps);
//     //   // console.log("all",recipe);

//     //   // return recipe;
//     //   setData(recipe)
//     // } catch (err) {
//     //   console.error("Invalid JSON from AI:", err);
//     // }

//     // console.log(JSON[response.text]);
//   }
//   getResponce(`${item.name} banane ka tarika `);

//   return (
//     <div className=" bg-gray-800 min-h-screen">
//       <div className="pl-20 pr-20 flex justify-between">
//         <img
//           src={item.image}
//           alt=""
//           className="shadow-md text-white bg-gray-900 w-[40vw]  h-[50vh]"
//         />
//         {/* <div className='flex items-start bg-red-500'>
//                  <h3 className="p-1 text-3xl font-semibold text-gray-100">{item.name}<span className="text-gray-300 font-normal text-xl">({item.type})</span></h3>
//                <h5 className="p-1 text-xl  text-gray-100 font-semibold">{item.category}Food</h5>
//             </div> */}
//       </div>

//       <div className="details text-xl text-white  p-30">
//         <Markdown>{data}</Markdown>
//         <p>hahaha</p>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;

// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import { Allblogs } from "../data/data";

// const BlogDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const blog = Allblogs.find((b) => b.id === parseInt(id));

//   if (!blog) return <div className="p-8 text-white">Blog not found!</div>;

//   return (
//     <div className="bg-gray-800 min-h-screen text-white p-6">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
//       >
//         ← Back
//       </button>

//       <img
//         src={blog.coverImage}
//         alt={blog.title}
//         className="w-full max-h-96 object-cover rounded-lg mb-6"
//       />

//       <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
//       <p className="text-gray-300 mb-4">
//         Category: <span className="font-semibold">{blog.category}</span>
//       </p>
//       <div className="flex gap-2 flex-wrap mb-6">
//         {blog.tags.map((tag) => (
//           <span
//             key={tag}
//             className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded-full"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       <div
//         className="text-gray-200 blog-content"

//       >
//         {
//           blog.content
//         }
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;
