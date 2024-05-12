import React, { Fragment } from 'react';
import footerlogo from '../../Assest/logo2_footer.png';
import './Footer.css';
import { FaRegHeart } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaBehance } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";





const Footer = () => {
  return (
    <Fragment>
    <div  className='footer_container'>
        <div className='footer'>
        <div className='foot1'>
           <h2> <img src={footerlogo} alt="" /></h2>
            <p>Lorem iaspsum doldfor sit amvset, consectetur adipisicing cvelit csed do eiusmod tempor incididucvccnt ut labovre.</p>
        </div>
        <div className='foot2'>
            <h3>Quick Links</h3>
            <ul>
                <li>About</li>
                <li>Offers & Discounts</li>
                <li>Get Coupon</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='foot3'>
            <h3>New Products</h3>
            <ul>
                <li>Woman Cloth</li>
                <li>Fashion Accessories</li>
                <li>Man Accessories</li>
                <li>Rubber made Toys</li>
            </ul>
        </div>
        <div className='foot4'>
            <h3>Support</h3>
            <ul>
                <li>Frequently Asked Questions</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Privacy Policy</li>
                <li>Report a Payment Issue</li>
            </ul>
        </div>
        
        </div>

        
    </div>
    <div className='footer_bottom'>
    <div className='footer_b1'>
        Copyright ©2024 All rights reserved | This template is made with <span className='foot_span'><FaRegHeart /></span>  by <span className='foot_span'>Colorlib</span>
    </div>
    <div className='footer_b2'>
    <CiTwitter  className='icon_foot'/>
    <CiFacebook className='icon_foot'/>
    <FaBehance  className='icon_foot'/>
    <TbWorld    className='icon_foot'/>

    </div>
</div>
</Fragment>
  )
}

export default Footer