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
    title: 'Project 1',
    description: 'stuff',
    video: 'https://github.com',
    isVideo: true,
    demo: 'https://github.com',
    isDemo: true,
    code: 'https://github.com',
    isCode: true
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description',
    video: 'https://github.com',
    isVideo: true,
    demo: 'https://github.com',
    isDemo: true,
    code: 'https://github.com',
    isCode: true
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description',
    video: 'https://github.com',
    isVideo: true,
    demo: 'https://github.com',
    isDemo: true,
    code: 'https://github.com',
    isCode: true
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Description',
    video: 'https://github.com',
    isVideo: true,
    demo: 'https://github.com',
    isDemo: true,
    code: 'https://github.com',
    isCode: true
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Description',
    video: 'https://github.com',
    isVideo: true,
    demo: 'https://github.com',
    isDemo: true,
    code: 'https://github.com',
    isCode: true
  },
 
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, title, description, video, isVideo, demo, isDemo, code, isCode}) => {
            return (
              <article key={id} className='portfolio__item'>
              <h5 className='portfolio__title'>{title}</h5>
              <p className='portfolio__description'>{description}</p>
              <div className="portfolio__item-cta">
               {isVideo && <a href={video} className='btn' target='_blank'>Watch Video Breakdown</a>}
               {isDemo && <a href={demo} className='btn' target='_blank'>Try Demo</a>}
               {isCode && <a href={code} className='btn' target='_blank'>Source Code</a>}
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