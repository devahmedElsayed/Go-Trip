import React ,{useEffect} from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './Componant/Herosection/Page/Home';
import Navbar from './Navbar/Navbar';
import Footer from './Componant/Footer/Footer';
import AboutUs from './Componant/Herosection/Page/AboutUs'
import PACKAGE from './Componant/Herosection/Page/PACKAGE'
import BLOG from './Componant/Herosection/Page/BLOG'
import CONTACT from './Componant/Herosection/Page/CONTACT'
import PAGES from './Componant/Herosection/Page/PAGES'
import { IoArrowUpOutline } from "react-icons/io5";



function App() {
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById('btn_scroll');
      if (btn) {
        btn.style.display = window.scrollY >= 400 ? 'block' : 'none';
      }
    };

    const handleBtnClick = () => {
      window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', handleScroll);
    const btn = document.getElementById('btn_scroll');
    if (btn) {
      btn.addEventListener('click', handleBtnClick);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (btn) {
        btn.removeEventListener('click', handleBtnClick);
      }
    };
  }, []);
  return (
      <BrowserRouter>
        <Navbar/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<AboutUs category='AboutUs' />} />
              <Route path='/Package' element={<PACKAGE category='PACKAGE' />} />
              <Route path='/Blog' element={<BLOG category='BLOG' />} />
              <Route path='/Page' element={<PAGES category='PAGES' />} />
              <Route path='/Contact' element={<CONTACT category='CONTACT' />} />
            

            </Routes>
            <button id='btn_scroll'><IoArrowUpOutline /></button>

        <Footer/>

      </BrowserRouter>
  );
}

export default App;
