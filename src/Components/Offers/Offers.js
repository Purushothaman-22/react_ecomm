import React from 'react'
import './Offers.css'
import exclusive_image from '../Assests/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
        <h1>Exclusive Updates</h1>
        <h1>Offers For You</h1>
        <p>Only On Trending Products </p>
        <button>Check Me</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />

        </div>
    </div>
  )
}

export default Offers