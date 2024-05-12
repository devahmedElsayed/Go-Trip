import React from 'react';
import './Css/Blog.css';
import imgblog1 from '../../../Assest/blog1.png'
import imgblog2 from '../../../Assest/blog2.png'
import imgblog3 from '../../../Assest/blog3.png'
import imgblog4 from '../../../Assest/blog4.png'
import imgblog5 from '../../../Assest/blog5.png'
import { GoPersonFill } from "react-icons/go";
import { FaComments } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import catimg1 from '../../../Assest/cat1.png'
import catimg2 from '../../../Assest/cat2.png'
import catimg3 from '../../../Assest/cat3.png'
import catimg4 from '../../../Assest/cat4.png'




const blogData = [
  {
    id:'b1',
    blogimg:imgblog1,
    blogdate:'15',
    blogTitle:'Google inks pact for new 35-storey office',
    blogPar:'That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.',


  },
  {
    id:'b1',
    blogimg:imgblog2,
    blogdate:'15',
    blogTitle:'Google inks pact for new 35-storey office',
    blogPar:'That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.',


  },
  {
    id:'b1',
    blogimg:imgblog3,
    blogdate:'15',
    blogTitle:'Google inks pact for new 35-storey office',
    blogPar:'That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.',


  },
  {
    id:'b1',
    blogimg:imgblog4,
    blogdate:'15',
    blogTitle:'Google inks pact for new 35-storey office',
    blogPar:'That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.',


  },
  {
    id:'b1',
    blogimg:imgblog5,
    blogdate:'15',
    blogTitle:'Google inks pact for new 35-storey office',
    blogPar:'That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.',


  },
]

const BLOG = ( ) => {
  const blogBox =blogData.map((myblog)=>{
    return(
        <div>
            <div className='box_blog' key={myblog.id}>
              <div className='boxBlog_img'>
                    <img src={myblog.blogimg} alt="" />
              </div>
              <div className='boxblog_date'>
                <p>{myblog.blogdate}</p>
                <p>Jan</p>
              </div>
              <div className='blog_text'>
              <h1>{myblog.blogTitle}</h1>
              <p>{myblog.blogPar}</p>
              </div>
              <div className='blog_icon'>
                  <div className='icon_person'>
                    <p><GoPersonFill /></p>
                    <p>Travel, Lifestyle</p>
                  </div>
                  <div>|</div>
                  <div className='icon_comment'>
                    <p><FaComments /></p>
                    <p> 03 Comments</p>
                  </div>
              </div>
            </div>
        </div>
    )
  })

  return (
    <div>
    <div className='blog_section'>
        <h1>Blog Details</h1>
    </div>
    <div className='blogs'>
      <div className='blog_side'>
      <div className='blog1'>
        {blogBox}
      </div>
      <div className='blog2'>
        <div className='left_search'>
        <div className='blog_search' >
        <input type="search"  placeholder='search keyword'/>
        <button><IoIosSearch /></button>
        </div>
        <button className='btn_search'>search</button>
        </div>

        <div className="category">
          <h3>Category</h3>
          <hr />
          <p className="cat_par">Resaurant food(37) </p>
          <hr />

          <p className="cat_par">Travel news(10)</p>
          <hr />

          <p className="cat_par">Modern technology(03)</p>
          <hr />

          <p className="cat_par">Product(11)</p>
          <hr />

          <p className="cat_par">Inspiration 21</p>
          <hr />

          <p className="cat_par">Health Care (21)09</p>
        </div>

        <div className="photos">
          <h3>Recent Post</h3>
          <hr />
              <div className="Photo"> 
                <img src={catimg1} alt="" /> 
                <div>
                <p>From life was you fish...</p>
                <p  className='cat_color'>January 12, 2019</p>
                </div>
                </div>
                <div className="Photo"> 
                    <img src={catimg2} alt="" /> 
                    <div>
                    <p>The Amazing Hubble</p>
                    <p className='cat_color'>02 Hours ago</p> 
                    </div>
                </div>
                <div className="Photo"> 
                  <img src={catimg3} alt="" /> 
                  <div>
                  <p>Astronomy Or Astrology</p>
                  <p  className='cat_color'>03 Hours ago</p> 
                  </div>
                </div>
                <div className="Photo"> 
               <img src={catimg4} alt="" /> 
               <div>
                 <p>Asteroids telescope</p>
                <p  className='cat_color'>01 Hours ago</p>
                </div>
              </div> 
          </div>

        {/*------------------ */}
          <div className='tag_cloud'>
            <h2>Tag Clouds</h2>
            <hr />
            <div className='cloud_box'>
                <div className='cloud'>project</div>
                <div className='cloud'>love</div>
                <div className='cloud'>technology</div>
                <div className='cloud'>travel</div>
                <div className='cloud'>restaurant</div>
                <div className='cloud'>life style</div>
                <div className='cloud'>design</div>
                <div className='cloud'>illustration</div>
                </div>
          </div>
          {/* ---------------- */}
          <div className='feeds'>
            <div >
              <h2>Instagram Feeds</h2>
              <hr />
            </div>
            <div className='imgFeed'>
              <img src={imgblog1} alt="" />
              <img src={imgblog2} alt="" />
              <img src={imgblog3} alt="" />
              <img src={imgblog4} alt="" />
              <img src={imgblog5} alt="" />
              <img src={catimg1} alt="" />
            </div>
          </div>

    {/* --------- */}
      <div className='Newsletter'>
        <div>
          <h2>Newsletter</h2>
          <hr />
        </div>
        <div className='letterinput'>
          <input type="email" placeholder='Enter email' />
          </div>
        <div> 
          <button>SUBSCRIPE</button>
          </div>
      </div>



      </div>
      </div>
    </div>
    </div>
  )
}

export default BLOG;