import React, { Fragment } from 'react';
import './Css/PagesStyle.css';
import Templates from '../../Templates/Templates';
import img1 from '../../../Assest/services1.jpg'
import img2 from '../../../Assest/services2.jpg'
import img3 from '../../../Assest/services3.jpg'
import img4 from '../../../Assest/services4.jpg'
import img5 from '../../../Assest/services5.jpg'
import img6 from '../../../Assest/services6.jpg'
import { IoMdStar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";

const PACKAGE = () => {
  const mytemplates = [
      {   
        id:'1',
      image:img1 ,
      star:<IoMdStar />,
      dgree:'8.0 Superb',
      headTitle:'The Dark Forest Adventure',
      salary:'$1870',
      person:'/ Per Person',
      timer:<MdAccessTime />,
      time: '3 Days',
      loc_icon:<IoLocationSharp />,
      location:'Los Angeles', 
      },
      {
        id:'2',
        image:img2 ,
        star:<IoMdStar />,
        dgree:'8.0 Superb',
        headTitle:'The Dark Forest Adventure',
        salary:'$1870',
        person:'/ Per Person',
        timer:<MdAccessTime />,
        time: '3 Days',
        loc_icon:<IoLocationSharp />,
        location:'Los Angeles',
      },
      {
        id:'3',
        image:img3 ,
        star:<IoMdStar />,
        dgree:'8.0 Superb',
        headTitle:'The Dark Forest Adventure',
        salary:'$1870',
        person:'/ Per Person',
        timer:<MdAccessTime />,
        time: '3 Days',
        loc_icon:<IoLocationSharp />,
        location:'Los Angeles',
      },
      {
        id:'4',
        image:img4 ,
        star:<IoMdStar />,
        dgree:'8.0 Superb',
        headTitle:'The Dark Forest Adventure',
        salary:'$1870',
        person:'/ Per Person',
        timer:<MdAccessTime />,
        time: '3 Days',
        loc_icon:<IoLocationSharp />,
        location:'Los Angeles',
      },
      {
        id:'5',
        image:img5 ,
        star:<IoMdStar />,
        dgree:'8.0 Superb',
        headTitle:'The Dark Forest Adventure',
        salary:'$1870',
        person:'/ Per Person',
        timer:<MdAccessTime />,
        time: '3 Days',
        loc_icon:<IoLocationSharp />,
        location:'Los Angeles',
      },
      {
        id:'6',
        image:img6 ,
        star:<IoMdStar />,
        dgree:'8.0 Superb',
        headTitle:'The Dark Forest Adventure',
        salary:'$1870',
        person:'/ Per Person',
        timer:<MdAccessTime />,
        time: '3 Days',
        loc_icon:<IoLocationSharp />,
        location:'Los Angeles',
      },
      
  ];
  return (
    <Fragment>
      <div className='sectionPack'>
              <h1 >Our Packages</h1>
    </div>
    <Templates mytemp={mytemplates}/>
    </Fragment>
    
  )
}

export default PACKAGE;