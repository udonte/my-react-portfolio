import React from "react";
import portfolio1 from "../../assets/portfolio/olusola.png";
import portfolio2 from "../../assets/portfolio/balancee.png";
import portfolio3 from "../../assets/portfolio/mavlin.png";
import portfolio4 from "../../assets/portfolio/gurugeeks.png";
import portfolio5 from "../../assets/portfolio/campipal.png";
import portfolio6 from "../../assets/portfolio/guruline.png";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: portfolio1,
    title: "Olusola Owonikoko Website",
    details: "Website for US-based Social Entrepreneur Olusola Owonikoko",
    // github: "https://github.com/udonte/mel-imprints-website",
    demo: "https://olusolaowonikoko.com/",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Balancee Web Application",
    details: "Vehicle repair platform provide automotive solutions to users",
    // github: "https://github.com/udonte/gpt3-website",
    demo: "https://balancee.app/",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Mavlin Corporate Website",
    github: "https://github.com/udonte/mavlin-website",
    details:
      "Corporate website for Mavlin, a canadian based oil and gas company",
    demo: "https://www.mavlin.ca/",
  },
  {
    id: 4,
    image: portfolio4,
    title: "Gurugeeks Academy Web App",
    details:
      "Web Application for the Gurugeeks Academy catering for students and instructors",
    // github: "https://github.com/Tiidelab-Fellowship/setter-app-react-fe",
    demo: "https://gurugeeksacademy.com/",
  },
  {
    id: 5,
    image: portfolio5,
    title: "Campipal",
    details: "Edtech platform solution created for tertiary student in campus",
    github: "https://github.com/wahabtaofeeqo/campipal-web",
    demo: "https://https://campipal.com/.netlify.app/",
  },
  {
    id: 6,
    image: portfolio6,
    title: "Guruline Store",
    details: "E-commerce store for Guruline",
    github: "https://github.com/udonte/guruline",
    demo: "https://guruline-ecommerce.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, details, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio_item-image">
                <img src={image} alt="first portfolio" />
              </div>
              <h3>{title}</h3>
              <h6>{details}</h6>
              <div className="portfolio__item-cta">
                {github && (
                  <a href={github} className="btn" target="blank">
                    Github
                  </a>
                )}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live link
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
