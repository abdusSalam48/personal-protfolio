import './WordCardStyle.css';
import React from 'react';
// import projectImg1 from '../images/project1.jpg';
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
  return (<div className="project-card">
  <img src = { props.imgsrc  } alt =" show img"/>
  <h2 className ="project-title"> {props.title}</h2>
  <div className="project-details">
  {/* <p>This is text</p> */}
    <p>{props.text}</p>
    <div className="project-btns">
    <NavLink to ={props.view} className="btn">View</NavLink>
    <NavLink to ="url.com" className="btn">Source</NavLink>
    </div>
    
  </div>
</div>



   
  )
}

export default WorkCard

{/* <div className="workCard-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src = {  projectImg1 } alt =" show img"/>
          <h2 className ="project-title"> Project Title</h2>
          <div className="project-details">
            <p>This is text</p>
            <div className="project-btns">
            <NavLink to ="url.com" className="btn">View</NavLink>
            <NavLink to ="url.com" className="btn">Source</NavLink>
            </div>
            
          </div>
        </div>
      </div>
       
    </div> */}