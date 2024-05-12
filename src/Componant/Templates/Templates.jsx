import React from 'react';
import './Templates.css';

const Templates = (props) => {
    const templateBox = props.mytemp.map((mytempbox)=>{
        return(
          <div className="card" key={mytempbox.id}>
             <div className="card-dad">
                <div className='imgbox'>
            <img src={mytempbox.image} alt="" className='tempimg'/>
            </div>
            <div className='star'>
           <p className='starColor'>{mytempbox.star}</p>
           <p className='starText'>{mytempbox.dgree}</p>
           </div >
           <h2 className='head-temp'>{mytempbox.headTitle}</h2>
           <div className='div_salary'>
            <p className='cost'>{mytempbox.salary}</p>
            <p className='person'>{mytempbox.person}</p>
            </div>
            <hr  className='timeLine'/>
            <div className='timer'>
                <div className='time'> 
            <p>{mytempbox.timer}</p>
            <p>{mytempbox.time}</p>
            </div>
            <div className='location'>
            <p>{mytempbox.loc_icon}</p>
            <p>{mytempbox.location}</p>
            </div>
            </div>
          </div>
          </div>
        )
      })
  return (
    <div className='card_template'>
            <p className='card_p'>FEATURED TOURS PACKAGES</p>
            <h2 className='card_h'>Favourite Places</h2>
            <div className='card-container'>
        {templateBox}
        </div>
    </div>
  )
}

export default Templates