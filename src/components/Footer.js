import "./FooterStyle.css";
import React from 'react';
import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                <div >
                    <p>Dhaka</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
            +8801782691592</h4>
            
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
            abdussalam4812@gmail.com</h4>
            
            </div>
        </div>
        <div className="right">
            <h4> This is my social contact link</h4>
            <p>This is my protfolio website .i discover my new project
            </p>
            <div className="social">
            <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} />
            <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} />

            <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}} />


            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer