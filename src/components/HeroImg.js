import "./HeroImgStyle.css";
import React from 'react';
import Image from "../images/heroimg.jpg"
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="hero-img" src={ Image } alt ="developmentImage"/>
            
        </div>
        <div className="content">
            <p>Hi, I'm a Software Developer</p>
            <h1>React Developer</h1>
            <div>
                <Link to ="/project" className="btn">Projet</Link>
                <Link to ="/contact" className="btn btn-light">Contact</Link>

            </div>
        </div>
    </div>
  )
}

export default HeroImg