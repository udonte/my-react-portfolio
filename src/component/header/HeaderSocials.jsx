import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/george-udonte/"><BsLinkedin/> </a>
      <a href="https://github.com/udonte"><BsGithub/></a>
      <a href="https://twitter.com/GeorgeUdonte"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials
