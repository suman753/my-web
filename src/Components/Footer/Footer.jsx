import React from 'react'
import './Footer.css'
import logo1 from '../../assets/logo1.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <hr/>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo1} alt="" />
                <p>Hi, I’m Suman , A Full-Stack Developer who enjoys solving problems with technology. Let’s connect and create something awesome together!</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="emial" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">SUBSCRIBE</div>
            </div>
        </div> 
        <hr/> 
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                &copy; 2025 Suman Datta.All rights reserved.
            </div>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>   
    </div>
  )
}

export default Footer
