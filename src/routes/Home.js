import React from 'react'
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Work from "../components/Work";
import Footer from "../components/Footer";

//component create shortcut => rafce then enter

const Home = () => {
  return (
    <div>Homee
        <Navbar />
        <HeroImg />
        <Work />
        <Footer />
    </div>
  )
}

export default Home