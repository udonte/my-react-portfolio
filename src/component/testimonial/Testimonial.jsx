import React from 'react'
import testimonialImage1 from '../../assets/esohe.png'
import testimonialImage2 from '../../assets/preston.png'
import testimonialImage3 from '../../assets/eniola.png'

import './testimonial.css'

//import Swiper core and required modules
import { Pagination } from 'swiper'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: testimonialImage1,
    name: "Esohe Oriakhe",
    position: "Legal and Compliance | Fintech and Payments | Startup Advisory",
    review: "George is very dedicated to work and highly skilled in tech. As a client of his. I always enjoyed his services and after-service support he rendered, whenever needed."
  },
  {
    avatar: testimonialImage2,
    name: "Preston Sule",
    position: "CEO/Chief Customer Officer - Inter-Link Moving & Storage Ltd",
    review: "He is very skilled in project execution and management of a team group. Strongly recommended for any employer that might need his service."
  },
  {
    avatar: testimonialImage3,
    name: "Eniola Omotayo",
    position: "Human Resource Administrator | Business Ethics",
    review: "George is hardworking and very diligent. He is also proactive and delivers timely. I have worked with him and I can attest for his professionalism and strong work ethics."
  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container' 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, position, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt="client pic" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <h6 className='client__position'>{position}</h6>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial
