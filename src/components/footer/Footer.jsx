import React from 'react'
import './footer.css'
import LOGO from '../../img/fetcherslogo.png'
import IMG1 from '../../img/expertise2017.png'
import IMG2 from '../../img/olathe-chamber-of-commerce.jpeg'

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="box__container">
        <li><img src={LOGO} alt="" /></li>
        <li><a href="https://www.expertise.com/mo/kansas-city/dog-daycares"><img src={IMG1} alt="" /></a> </li>
        <li><img src={IMG2} alt="" /></li>
        <li><div className="contact__info">
          <ul>
            <li><h3>CONTACT INFORMATION</h3></li>
            <li><small>585 N Central St., Olathe, KS 66061</small></li>
            <li><small>Phone: 913-768-9663</small></li>
            <li><small>Fax: 913-948-7303</small></li>
            <li><small>Email: info@fetchersplayandstay.com</small></li>
          </ul>
        </div></li>
      </div>
      <div className="copyright__container">
        <div className="copyright">
          <small>&copy; 2019 Fetchers, Inc | All rights reserved. | Designed by Caleb Bennetts</small>
        </div>
      
      </div>
    </div>
  )
}

export default Footer