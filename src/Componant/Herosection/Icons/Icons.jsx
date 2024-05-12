import React, { Fragment } from 'react';
import './Icons.css';

const Icons = (props) => {
  const box_icon=props.myicons.map((myboxIcon)=>{
    return(
      <div className="iconBox" key={myboxIcon.id}>
        <p className='cons'>{myboxIcon.cons}</p>
        <p>{myboxIcon.title}</p>
        <p>{myboxIcon.par}</p>
      </div>
    )
  });
   
  
  return (
    <Fragment>
      {/* icons */}
    <div className='div1'>
              {box_icon}
    </div>
   
    </Fragment>
  )
}

export default Icons;