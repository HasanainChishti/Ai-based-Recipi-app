import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home" 
import BlogDetail from './pages/BlogDetail';
import SearchRecipi from './pages/SearchRecipi'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

const [blog,setblog]=useState([]);
  return (
    <div className='bg-gray-200 min-h-screen'>
     {/* <h1 className='bg-red-100'>hshs</h1> */}
     <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Recipi/:id" element={<BlogDetail />} />
    <Route path='/SearchRecipi/:name' element={<SearchRecipi></SearchRecipi>}></Route>
  </Routes>
</BrowserRouter>

    
    </div>
  )
}

export default App
