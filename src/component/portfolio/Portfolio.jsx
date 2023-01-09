import React from 'react'
import portfolio1 from '../../assets/chatgpt.PNG'
import portfolio2 from '../../assets/restaurant.png'
import portfolio3 from '../../assets/setterapp.PNG'


import './portfolio.css'

const data = [
  {
    id: 1,
    image: portfolio1,
    title: 'ChatGPT-3 Website',
    github: 'https://github.com/udonte/gpt3-website',
    demo: 'https://github.com/udonte/gpt3-website'
  },
  {
    id: 2,
    image: portfolio2,
    title: 'Gericht Restaurant Website',
    github: 'https://github.com/udonte/restaurant-app',
    demo: 'https://georgiesrestaurant.netlify.app/'
  },
  {
    id: 3,
    image: portfolio3,
    title: 'SetterApp (Adtech Solution)',
    github: 'https://github.com/Tiidelab-Fellowship/setter-app-react-fe',
    demo: 'https://setterapp.vercel.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio_item-image">
                  <img src={image} alt="first portfolio" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio