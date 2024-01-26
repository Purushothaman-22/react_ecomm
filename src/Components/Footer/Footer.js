import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import instagram_icon from '../Assests/instagram_icon.png'
import pintester_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Street Style.in</p>
        </div>
        <ul className="footer-link">
            <l1>Company</l1>
            <l1>Products</l1>
            <l1>Offices</l1>
            <l1>About Us</l1>
            <l1>Contact Us</l1>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copywrite">
            <hr />
            <p>CopyWrite @ 2024 - All Rights Reserved/P.S Studio</p>
        </div>
    </div>
  )
}

export default Footer