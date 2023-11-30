// import logo from './logo.svg';
// import './App.css';
import React from "react";
import "./index.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
    {/* <div>
      <h1> This is my Protfolio Website</h1>

    </div> */}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/project" element={<Project />} />
      <Route path = "/about" element={<About />} />
      <Route path ="/contact" element={<Contact />} />
      
    </Routes>
    </>
    

  );
}

export default App;
