import React from 'react'
import './footer.css'
import {ImLinkedin} from 'react-icons/im'
import {FaGithubSquare} from 'react-icons/fa'
const Footer = () => { 
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Frehiwot</h1>
        <ul className='footer__list'>
          <li><a href='#' className='footer__link'>Home</a></li>
          <li><a href='#about' className='footer__link'>About</a></li>
          <li><a href='#Skills' className='footer__link'>Skills</a></li>
        </ul>
        <div className='footer__social'>
          <a href='http://linkedin.com' className='footer__social-link' target="__blank"><ImLinkedin/></a>
          <a href='http://github.com' className='footer__social-link' target="__blank"><FaGithubSquare/></a>
        </div>
        <span className='footer__copy'>&#169; Frehiwot. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer