import React, { Fragment } from 'react';
import './Css/PagesStyle.css';
import Company from '../../Company/Company';
import Icons from '../Icons/Icons';
import { IoPersonSharp } from "react-icons/io5";
import { BsCreditCard } from "react-icons/bs";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { RiThumbUpLine } from "react-icons/ri";
import Slidevideo from '../../../Slidevideo/Slidevideo';
import Founder from '../../Founder/Founder';


const AboutUs = () => {
  const myIcons = [
    { id: 1, cons: <IoPersonSharp />, title: "8000+ Our Local", par: " Guides" },
    { id: 2, cons: <BsCreditCard />, title: " 100% Trusted Tour", par: " Agency" },
    { id: 3, cons: <MdOutlinePermContactCalendar />, title: " 28+ Years of Travel", par: "Experience " },
    { id: 4 , cons: <RiThumbUpLine />, title: " 8000+ Our Local", par: " Guides" },
  ];

  return (
    <Fragment>
      <div className='sectionAbout'>
        <h1>About Us</h1>
      </div>
      <Company />
      <Icons myicons={myIcons} />
      <Slidevideo/>
      <Founder/>
    </Fragment>
  );
}

export default AboutUs;
