import './WordCardStyle.css';
import React from 'react';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';
// import projectImg1 from '../images/project1.jpg';
// import { NavLink } from 'react-router-dom';

const Work = () => {
  return (
    <div className="workCard-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, index)=>{
            return (
                <WorkCard 
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                text ={val.text}
                view={val.view}
                />
            )
        })}
        
      </div>
    </div>
  )
}

export default Work