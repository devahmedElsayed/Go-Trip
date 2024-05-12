import React from 'react'
import Herosectio from '../Herosectio'
import { IoPersonSharp } from "react-icons/io5";
import { BsCreditCard } from "react-icons/bs";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { RiThumbUpLine } from "react-icons/ri";
import Icons from '../Icons/Icons';
import img1 from '../../../Assest/services1.jpg'
import img2 from '../../../Assest/services2.jpg'
import img3 from '../../../Assest/services3.jpg'
import img4 from '../../../Assest/services4.jpg'
import img5 from '../../../Assest/services5.jpg'
import img6 from '../../../Assest/services6.jpg'
import { IoMdStar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import Templates from '../../Templates/Templates';
import Slidevideo from '../../../Slidevideo/Slidevideo';
import Company from '../../Company/Company';
import Founder from '../../Founder/Founder';
import tourImg1 from '../../../Assest/home-blog1.jpg';
import tourImg2 from '../../../Assest/home-blog2.jpg';
import Tourist from '../../Tourist/Tourist';





const icon =[
  {
    id:'i1',
    cons:<IoPersonSharp />,
    title:'8000+ Our Local',
    par:'Guides',

  },
  {
    id:'i2',
    cons:<BsCreditCard />,
    title:'100% Trusted Tour',
    par:'Agency',

  },
  {
    id:'i3',
    cons:<MdOutlinePermContactCalendar />  ,
    title:'28+ Years of Travel',
    par:'Experience',

  },
  {
    id:'i4',
    cons:<RiThumbUpLine />    ,
    title:'8000+ Our Local',
    par:'Guides',

  },
]
  const temp=[
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
    
  ]
  const tour=[
    {
      id:'t1',
      tourImg:tourImg1,
      date:'24',
      tour_p:'Tips For Taking A Long-Term Trip With Kids.',
    },
    {
      id:'t2',
      tourImg:tourImg2,
      date:'24',
      tour_p:'Tips For Taking A Long-Term Trip With Kids.',
    },
  ]
  

const Home = () => {
  return (
    <div>
        <Herosectio/>
        <Icons myicons={icon} mytemp={temp}/>
        <Templates mytemp={temp}/>
        <Slidevideo/>
        <Company />
        <Founder/>
        <Tourist  bloog={tour} />
    </div>
  )
}

export default Home;