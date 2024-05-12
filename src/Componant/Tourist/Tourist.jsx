import React, { Fragment } from 'react';
import './Tourist.css';

const Tourist = (props) => {
    const touristbox = props.bloog.map((myblog)=>{
        return(
                <div className="blog" key={myblog.id}>
                    <div className='tour_img'>
                    <img src={myblog.tourImg} alt="" />
                    </div>
                    <div className='blog_bottom'>
                    <div className='date'>
                    <p>{myblog.date}</p>
                    <p>Now</p>
                    </div>
                    <div className='travel'>
                        <p>| Traveling</p>
                        <p className='big_text'>{myblog.tour_p }</p>
                        <p>READ MORE »</p>
                    </div>
                    </div>
                </div>
        )
    })

return (
    <Fragment>
        <div className='title_head'>
        <p>OUR RECENT NEWS</p>
        <h2>Tourist Blog</h2>
        </div>
        <div className='blog_div'>
        {touristbox}
    </div>
    </Fragment>
)
}

export default Tourist;