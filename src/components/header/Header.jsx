import React from 'react'
import './header.css'
import CTA from './CTA'
import Headersocials from './Headersocials'
import fre from '../../assets/fre.PNG'
const Header = () => {
  return (
    <section className='header'>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Frehiwot Gemechu</h1>
        <h5 className="text-align">backend developer</h5>
        <CTA />
        <Headersocials/>
        <div className='me'>
          <img src={fre} alt="frehiwot gemechu"/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </section>
  )
}

export default Header