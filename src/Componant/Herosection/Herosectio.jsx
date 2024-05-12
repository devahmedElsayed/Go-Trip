import React from 'react';
import heroImg  from'../../Assest/h1_hero.jpg'
import './Herosection.css';

const Herosectio = () => {
  return (
    <div>
        <img src={heroImg} alt="" className='heroimg' />
        <div className='hero-word'>
          <div className='text'>
          <h1>Find your <span className='linespan'> Next tour!</span></h1>
          <p>Where would you like to go?</p>
          </div>
          <div className='inp-form'>
            <form action="#">
              <input type="search" placeholder='Where would you like to go?' />
              <select name="select" id="select1">
              <option value="">When</option>
              <option value="">time-1</option>
              <option value="">time-2</option>
              <option value="">time-3</option>
              </select>
              <button>search</button>
            </form>
           
          </div>
        </div>
    </div>
  )
}

export default Herosectio;