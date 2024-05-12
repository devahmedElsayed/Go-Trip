import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assest/logo.png';
import { Link } from 'react-router-dom';
import { CgMenuCheese } from "react-icons/cg";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    let [open,setOpen]= useState(false)
    const handleMenuClick = () => {
        setOpen(!open);
    };
  

return (
        <nav className='nav shadow-md w-full fixed top-0 left-0 bg-white justify-between  items-center z-50   '>
            
            <div className='logo-pic md:flex py-4 md:px-10 px-7      '>
                <div className='flex items-center '>
                                <img className='ml-4' src={logo} alt="" />

                </div>
            </div>
            <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                {open ? <IoClose onClick={handleMenuClick} /> : <CgMenuCheese onClick={handleMenuClick} />}
            </div>
            <ul className={`md:flex md:item-center md:pb-0 pb-12 absolute md:static bg-white w-full md:z-auto z-[-1] left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100': 'top-[-490px] '} md:opacity-100`}>
                <li className='md:ml-8 text-xl md:my-0 my-7'> <Link className=' no-underline text-blue-900 mr-10 items-center hover:text-yellow-400 duration-500 md:h-auto' to="/">HOME</Link></li>
                <li className='md:ml-8 text-xl md:my-0 my-7'> <Link className='no-underline text-blue-900 mr-10 items-center hover:text-yellow-400 duration-500 md:h-auto' to="/About">ABOUT US</Link></li>
                <li className='md:ml-8 text-xl md:my-0 my-7'> <Link className='no-underline text-blue-900 mr-10 items-center hover:text-yellow-400 duration-500 md:h-auto' to="/Package">PACKAGE</Link></li>
                <li className='md:ml-8 text-xl md:my-0 my-7'> <Link className='no-underline text-blue-900 mr-10 items-center hover:text-yellow-400 duration-500 md:h-auto' to="/Blog">BLOG</Link></li>
                <li className='md:ml-8 text-xl md:my-0 my-7'> <Link className='no-underline text-blue-900 mr-10 items-center hover:text-yellow-400 duration-500 md:h-auto' to="/Page">PAGES</Link></li>
                <li className='md:ml-8 text-xl md:my-0 my-7'> <Link className='no-underline text-blue-900 mr-10 items-center hover:text-yellow-400 duration-500 md:h-auto' to="/Contact">CONTACT US</Link></li>
            </ul>
        </nav>
)
}

export default Navbar;