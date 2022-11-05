import React from 'react'
import './portfolio.css'
import IMG1 from '../../../../assets/Assets/portfolio1.png'
import IMG2 from '../../../../assets/Assets/portfolio2.png'
import IMG3 from '../../../../assets/Assets/portfolio3.png'
//import IMG4 from '../../assets/portfolio4.jpg'
//import IMG5 from '../../assets/portfolio5.png'
//import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Game Development Projects',
    link: 'GameDevelopementProjects',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Python Projects',
    link: 'https://github.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'React Js Projects',
    link: 'https://github.com',
  },
 
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, link}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={link} className='btn' target='_blank'>Learn More</a>
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