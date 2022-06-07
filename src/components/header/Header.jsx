import React from 'react'
import './header.css'
import {VscAccount} from 'react-icons/vsc'
import {IoIosMenu} from 'react-icons/io'
import LOGO from '../../img/fetcherslogo.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        <div className="logo">
          <img src={LOGO} alt="Fetchers Logo" />
        </div>

        <div className="account">
          <VscAccount />
          <IoIosMenu />
        </div>

      </div>  
    </header>
  )
}

export default Header