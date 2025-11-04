import React from 'react'
import Navbar from "../components/Navbar"
import Body from "../components/Body"
import Footer from "../components/Footer"
import Hero from '../components/Hero'
const Home = ({log}) => {
  return (
    <div>
        <Navbar log={log}></Navbar>
         <Hero></Hero>
        <Body></Body>
        <Footer></Footer>
    </div>
  )
}

export default Home
