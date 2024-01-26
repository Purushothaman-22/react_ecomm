import React from 'react'
import "./Heroo.css"
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from "../Assests/arrow.png"
import hero_image from '../Assests/hero_image.png'
const Heroo = () => {
  return (
    <div className='hero'>
        <div className="hero_left">
            <h2>New Arrivals</h2>
            <div>
            <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
        </div>
        <p>Collections</p>
        <p>For Every One</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collections</div>
           <img src={arrow_icon} alt="" /> 
        </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Heroo