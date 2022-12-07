import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import {AiFillAppstore} from 'react-icons/ai'
import { useState } from 'react'
const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  const[Toggle, showMenu]=useState(false)
  return (
    <header className='header_n'>
      <nav className='nav container'>
        <a href='index.html' className='nav__log'>Frehiwot</a>
        <div className={Toggle? "nav__menu show-menu":"nav__menu"}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#' onClick={()=>setActiveNav('#')} className={activeNav=== '#'? 'active-link':'nav__link'} >
                <i className='nav__icon'></i><AiOutlineHome/> Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav=== '#about'? 'active-link':'nav__link'} >
                <i className='nav__icon'></i><AiOutlineUser/>About
              </a>
            </li>
            <li className='nav__item'>
              <a href='#Skills' onClick={()=>setActiveNav('#Skills')} className={activeNav=== '#Skills'? 'active-link':'nav__link'}>
                <i className='nav__icon'></i><BiBookBookmark/>Skills
              </a>
            </li>
            
            <li className='nav__item'>
              <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav=== '#contact'? 'active-link':'nav__link'}>
                <i className='nav__icon'></i><AiOutlineMessage/>Contact
              </a>
            </li>
          </ul>
          <i className='nav__close' onClick={()=>showMenu(!Toggle)}><AiOutlineCloseSquare/></i>
        </div>
        <div className='nav__toggle' onClick={()=>showMenu(!Toggle)}>
          <AiFillAppstore/>
        </div>
      </nav>
    </header>
  )
}

export default Nav