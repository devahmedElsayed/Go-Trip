import React from 'react';
import './Css/Contact.css';
import { IoAlertOutline } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { FiSmartphone } from "react-icons/fi";
import { GoMail } from "react-icons/go";

const CONTACT = () => {
  return (
    <div className='contact'>
      <div className='contactSection'>
        <h2>Contact Us</h2>
      </div>
      <div className='map'>
        <p className='mapicon'><IoAlertOutline /></p>
        <h3>عفوًا، حدث خطأ.</h3>
        <p> تحمِّل هذه الصفحة خرائط Google بشكل صحيح. راجع وحدة تحكم JavaScript للاطلاع على التفاصيل التقنية.</p>
      </div>
      {/* ------- */}
      <div className='touch'>
        <div className="leftTouch">
          <input type="text" placeholder='Enter message'  className='message'/>
          <div className='text-mail'>
            <input className='text-mail-inp' type="text" placeholder='Enter your name'/>
            <input className='text-mail-inp' type="email" placeholder=' email'/>
          </div>
          <div className='subj'>
                <input type="text" placeholder='Enter you subject'/>

          </div>
          <div>      
                <button className='send'>send</button>
          </div>
        </div>
        <div className="rightTouch">
          <div className='phoneIcon'>
          <p className='icon_phone'><TiHomeOutline /></p>
          <div>
            <h3>uttonwood, California.</h3>
            <p className='p_phone'>Rosemead, CA 91770</p>
          </div>
          </div >
          <div className='phoneIcon'>
          <p className='icon_phone'><FiSmartphone /></p>
          <div>
            <h3>+1 253 565 2365</h3>
            <p className='p_phone'>Mon to Fri 9am to 6pm</p>
          </div>
          </div>
          <div className='phoneIcon'>
          <p className='icon_phone'><GoMail /></p>
          <div>
            <h3>support@colorlib.com</h3>
            <p className='p_phone'>Send us your query anytime!</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CONTACT