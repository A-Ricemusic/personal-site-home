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
    title: 'Project 1',
    description: 'stuff',
    link1: 'GameDevelopementProjects',
    link2: 'GameDevelopementProjects',
    link3: 'GameDevelopementProjects',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Project 2',
    description: 'Stuff',
    link1: 'https://github.com',
    link2: 'https://github.com',
    link3: 'https://github.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Project 3',
    description: 'Stuff',
    link1: 'https://github.com',
    link2: 'https://github.com',
    link3: 'https://github.com',
  },
 
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, link1, link2, link3}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h5 className='portfolio__title'>{title}</h5>
              <p className='portfolio__description'>{description}</p>
              <div className="portfolio__item-cta">
                <a href={link1} className='btn' target='_blank'>Watch Video Breakdown</a>
                <a href={link2} className='btn' target='_blank'>Try Demon</a>
                <a href={link3} className='btn' target='_blank'>Visit Source Code</a>
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