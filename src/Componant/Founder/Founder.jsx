import React from 'react';
import imgtest from '../../Assest/testimonial.png';
import hometest from '../../Assest/Homepage_testi.png';
import './Founder.css';

const Founder = () => {
  return (
    <div className='founder'>
        <div className='founder_top'>
            <img src={imgtest} alt="" />

        </div>
        <div className='founder_center'>
            <p>Logisti Group is a representative logistics operator providing full range of ser of customs clearance and transportation worl.</p>

        </div>
                    <div className='founder_bottom'>
                <img src={hometest} alt="" />
                <div>  <span>Jessya Inn</span>
                <p>
                    
                    Co Founder
                    </p>
                    </div>
              
        </div>
        
    </div>
  )
}

export default Founder