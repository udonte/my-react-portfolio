import React from 'react'
import CTA from './cta'
import HeaderSocials from './HeaderSocials'
import profileImage from '../../assets/me2.png'

import './header.css'


const Header = () => {
  return (
      <header id='top'>
        <div className="container header__container">
          <h5>Hello, I'm</h5>
          <h1>George Udonte</h1>
          <h5 className="text-light">Frontend Developer</h5>
          <CTA />
          <HeaderSocials/>
          
          <div className='header__profile-image-container'>
            <img src={profileImage} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
  )
}

export default Header
