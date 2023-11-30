import "./HeroImg2Style.css";
// import Image2 from "../images/heroimg_2.jpg"
import React, { Component } from 'react';
// arrow function to pass values but this will not happen in this case. we have to create a class component and we have to extends that component so that we can pass the values in the different pages 
class HeroImg2 extends Component{
  render(){
       return (
          <div className="hero-img2">
               <div className="heading">
                  <h1>{this.props.heading}</h1>
                  {/* <img className="hero-img" src={ Image2 } alt ="developmentImage"/> */}
                  <p>{this.props.text}</p>
               </div>
          </div>
        )

  }
}

// const HeroImg2 = () => {

//   return (
//     <div className="hero-img2">
//          {/* arrow function to pass values but this will not happen in this case. we have to create a class component and we have to extends that component so that we can pass the values in the different pages */}

//          <div className="heading">
//             <h1>{this.props.heading}</h1>
//             {/* <img className="hero-img" src={ Image2 } alt ="developmentImage"/> */}
//             <p>{this.props.text}</p>
//          </div>
//     </div>
//   )
// }

export default HeroImg2