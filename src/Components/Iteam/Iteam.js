import React from 'react'
import './Iteam.css'
import { Link } from 'react-router-dom'
const Iteam = (props) => {
  return (
    <div className='iteam'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="iteam-price">
            <div className="iteam-price-new">
                Rs {props.new_price}
            </div>
            <div className="iteam-price-old">
                Rs {props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Iteam