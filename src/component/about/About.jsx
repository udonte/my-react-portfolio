import React from 'react'
import profileImage from '../../assets/me2.png'
import { FaAward, FaUsers } from 'react-icons/fa'
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
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>

          <article className="about__card">
            <FaUsers className='about__icon' />
            <h5>Clients</h5>
            <small>10+ Clients</small>
          </article>

          <article className="about__card">
            <AiFillFolderOpen className='about__icon' />
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
          </div>

          <p>
            George Udonte is a Frontend Developer, UI Designer and Technical Writer, who enjoys building product and applications that solve human problems.
            <br />
            <br />
            George has a work background in Customer Service, Tech training & Support, Graphic Designer, Content Writer, and Product Support. He is currently on track in using these experiences to add value and build a dynamic career by developing scalable tech solutions to address specific human needs.
            <br />
            <br />
            He is constantly honing his skills in order to become a world-class Product Engineer in the tech space.
            His interests includes Product Design, Product Development and Product Development.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
