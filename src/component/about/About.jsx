import React from "react";
import profileImage from "../../assets/me7.jpeg";
import { FaAward, FaUsers, FaLaptopCode } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";

import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profileImage} alt="About-me" />
          </div>
        </div>

        <div className="about__content">
          {/*  
          <div className="about__cards-container">
            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5>Industry</h5>
              <small>Knowledge</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1yr+ Working</small>
            </article>

            {/* <article className="about__card">
            <FaUsers className='about__icon' />
            <h5>Clients</h5>
            <small>20+ Clients</small>
          </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small> " "
            </article>
          </div>
          */}

          <p>
           As a frontend developer, I have a diverse skill set, including technical writing and project management, and I'm passionate about creating solutions that address real-world challenges. With a background in customer service, tech training and support, graphic design, content creation, and product support, I bring a unique perspective to every project.
            <br />
            <br />
            I excel in building and maintaining websites, implementing responsive designs, and optimizing website performance. My collaborative nature makes me a valuable asset to any development team, where I contribute ideas, implement new features, and resolve issues efficiently.
            <br />
            <br />
            I am committed to continuous learning and strive to become a top-tier developer in the tech industry.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
