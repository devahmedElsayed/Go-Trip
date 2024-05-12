import React from 'react';
import './Slidevideo.css';
import { IoMdPlay } from "react-icons/io";


const Slidevideo = () => {
  return (
    <div className='slidervideo'>
        <div className='icon_link'>
    <div className='video_play'>     
         <a href="https://www.youtube.com/watch?v=1aP-TXUpNoU"> <IoMdPlay  className='yout_icon' /> </a>

</div>

        </div>
        <div className='text_slider'>
          <div className='slider_p'>
             <p >
              LOVE WHERE YOU'RE GOING IN THE PERFECT TIME
              </p>
          </div>
             
              <div className='slider_h'>
              <h1 >Tripo is a World Leading Online</h1>
              <h1 >Tour Booking Platform </h1>

              </div>
        </div>

    </div>
  )
}

export default Slidevideo