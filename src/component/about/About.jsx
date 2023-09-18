import React from 'react'
import profileImage from '../../assets/me7.jpeg'
import { FaAward, FaUsers, FaLaptopCode } from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'

import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profileImage} alt="About-me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards-container">
            <article className="about__card">
            <FaLaptopCode className='about__icon' />
            <h5>Industry</h5>
            <small>Knowledge</small>
          </article>

          <article className="about__card">
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>1yr+ Working</small>
          </article>

          {/* <article className="about__card">
            <FaUsers className='about__icon' />
            <h5>Clients</h5>
            <small>20+ Clients</small>
          </article> */}

          <article className="about__card">
            <AiFillFolderOpen className='about__icon' />
            <h5>Projects</h5>
            <small>5+ Completed</small>
          </article>
          </div>

          <p>
            George is a Frontend Developer, with skills in Technical Writing & Project Management, who enjoys building products and applications that solve human problems. With a background in Customer Service, Tech Training & Support, Graphic Design, Content Writing, and Product Support, George is able to add value and build a dynamic career by developing scalable tech solutions that address specific user needs.
            <br />
            <br />
            He is experienced in building and maintaining websites, implementing responsive designs, optimizing website performance and collaborating with any development team to implement new features and fix bugs.
            <br />
            <br />
            George is always looking for opportunities to learn and improve his skills in order to become a world-class Developer in the tech space. His interests include Product Design, Product Development, and Product Management.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
