import React, {useState} from 'react'
import './Nav.css'
import {Link, useMatch, useResolvedPath, Router } from 'react-router-dom'
import LOGO from '../../img/fetcherslogo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { menuItems } from "../../menuItems";
import MenuItems from '../MenuItems'

const Nav = () => {
  const [isMobile, setIsMobile] = useState(true);
  
  return (
    
    <nav>
      
      <ul className="menus">
        {/* <li className='logo'><img src={LOGO} ></img></li> */}
        {menuItems.map((menu, index) => {
          const depth = 0;
          return (
            <MenuItems items={menu} key={index} depth={depth} />
          )
        })}
      </ul>
      {/* <div className="container">
        <div className="container__site-title">
          <Link to='/' className='site-title'>
            <img src={LOGO} alt="Fetchers Logo" />
          </Link>
        </div>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links" }>
          
          <Link to="/reservations" className='reservations'>
            <li>Reservations</li>
          </Link>
          <Link to="/about" className='about'>
            <li> About </li>
          </Link>
          <Link to="/fetchcam" className='fetchcam'>
            <li>Fetch cam</li>
          </Link>
          <Link to="/services" className='services'>
            <li>Services</li>
          </Link>
          <Link to="/testimonials" className='testimonials'>
            <li>Testimonials</li>
          </Link>
          <Link to="/fetchclub" className='fetchclub'>
            <li>Fetch Club</li>
          </Link>
          <Link to="/contact" className='contact'>
            <li>Contact</li>
          </Link>
          <Link to="/blog" className='blog'>
            <li>Blog</li>
          </Link>
        </ul>

        <button className='mobile-menu-icon'>
          {isMobile ? (
          <i className='fa-solid fa-time'></i>
          ) : (
          <i className='fa-solid fa-bars'></i>
          )}
        </button>

      </div> */}
    </nav>
  )
}
function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
          {children}
      </Link>
    </li>
  )
}

export default Nav