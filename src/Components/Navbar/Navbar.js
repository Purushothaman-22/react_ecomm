import React, { useState } from 'react'
import './Navbar.css'
import logo from'../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu,setMenu]=useState('shop')
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>Street Style.in</p>
        </div>
        <ul className='Nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu('mens')}}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>{menu==="mens"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link>{menu==="womens"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr />:<></>}</li>
        </ul>
            <div className='nav-login-carts'>
                <Link to='/login'><button>Log-In</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
    </div>
  )
}

export default Navbar