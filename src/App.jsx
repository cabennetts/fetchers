import React from 'react'
import {Link, Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import './index.css'

import Home from './components/Home/Home'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Faq from './components/faq/Faq'
import Fetchcam from './components/fetchCam/Fetchcam'
import Fetchclub from './components/fetchclub/Fetchclub'
import Login from './components/fetchclub/Login'
import Signup from './components/fetchclub/Signup'
import Footer from './components/footer/Footer'
import Grooming from './components/grooming/Grooming'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Photos from './components/photos/Photos'
import Playtime from './components/playtimeAndBoarding/Playtime'
import Boarding from './components/playtimeAndBoarding/Boarding'
import Reservations from './components/reservations/Reservations'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Staff from './components/staff/Staff'

const App = () => {
  

  return (
    <>
    <BrowserRouter>
    
      <Nav /> 
    
      
      <div className="container">
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/reservations' element={<Reservations />} />
          <Route path='/about' element={<About />} />
          <Route path='/fetchcam' element={<Fetchcam />} />
          <Route path='/services' element={<Services />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/fetchclub' element={<Fetchclub />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/playtime' element={<Playtime />} />
          <Route path='/boarding' element={<Boarding />} />
          <Route path='/grooming' element={<Grooming />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/staff' element={<Staff />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App