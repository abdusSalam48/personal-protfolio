import "./PricingCardStyle.css";
import React from 'react'
import {Link} from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="cost">500 Taka</p>
                <p>-10Days-</p>
                <p>-3 pages-</p>
                <p>Feature</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="cost">500 Taka</p>
                <p>-10Days-</p>
                <p>-3 pages-</p>
                <p>Feature</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <p className="cost">500 Taka</p>
                <p>-10Days-</p>
                <p>-3 pages-</p>
                <p>Feature</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Advance -</h3>
                <span className="bar"></span>
                <p className="cost">500 Taka</p>
                <p>-10Days-</p>
                <p>-3 pages-</p>
                <p>Feature</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
           
            
        </div>
    </div>
  )
}

export default PricingCard