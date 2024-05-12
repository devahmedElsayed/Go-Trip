import React from 'react';
import './Company.css';
import supportimg from '../../Assest/support-img.jpg';

const Company = () => {
  return (
    <div className='support'>
        <div className='sup_left'>
            <img src={supportimg} alt=""  className='sup_img'/>

            <div className='borderimg'>

            </div>
            <div className='since'>SINCE 1992</div>
        </div>
        <div className='sup_right'>
            <div>
            <span>ABOUT OUR COMPANY</span>
            <h2>We are Go Trip</h2>
            <h2>Ravels Support Company</h2>
            </div>
            <div className='sup_text'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam voluptatum quisquam rerum quaerat, nostrum dignissimos aliquam natus laborum assumenda sunt, quos voluptatibus veritatis repudiandae sit nulla facere necessitatibus similique maxime.</p>

            </div>
            <div className='check_sup'>       
                <input type="checkbox" name="check1"/>

            <label for="check1">    Lorem ipsum dolor sit amet.</label>
                <br/>
                <input type="checkbox"  name="check2"/>
                <label for="check2">    Lorem ipsum dolor sit amet.</label>
                <br/>
                <input type="checkbox"  name="check3"/>
                <label for="check3">    Lorem ipsum dolor sit amet.</label>
                <br/>
                <input type="checkbox"  name="check4"/>
                <label for="check4">    Lorem ipsum dolor sit amet.</label>


            </div>
            <button> ABOUT US</button>
        </div>

    </div>
  )
}

export default Company