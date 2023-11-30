import './AboutContentStyle.css';
import React from 'react';
import { Link } from "react-router-dom";
import aboutImg1 from "../images/aboutImg1.jpg";
import aboutImg2 from "../images/aboutImg2.jpg";


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1> Who Am I </h1>
            <p>I'm a react font-end developer. I create responsive secure websites for my clients.</p>
            <Link to ="/contact">
            <button className='btn'>Contact</button></Link>

        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src = { aboutImg1 } className='img' alt="true"/>
                </div>
                <div className='img-stack bottom'>
                    <img src = { aboutImg2 } className='img' alt="true"/>
                </div>
            </div>
        </div>
        
   </div>
  )
}

export default AboutContent