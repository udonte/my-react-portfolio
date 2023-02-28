import React from 'react'
import CTA from './cta'
import HeaderSocials from './HeaderSocials'
import profileImage from '../../assets/me8.png'

import './header.css'


const Header = () => {
  return (
      <header id='top'>
        <div className="container header__container">
          <h5>Hi, I'm</h5>
          <h1>George Udonte</h1>
          <h5 className="text-light">I'm a Frontend Developer and I build for the Universe.</h5>
          <CTA />
          <HeaderSocials/>
          
          <div className='header__profile-image-container'>
            <img src={profileImage} className='profileImage' alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
  )
}

export default Header
