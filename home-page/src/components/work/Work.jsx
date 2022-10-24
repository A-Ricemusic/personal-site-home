import React from 'react'
import './work.css'




const data = [
  {
    id: 1,
    title: 'ESPC – Tampa, FL – Programming Instructor and Game Developer',
    subheading: 'Coding/programming academy',
    time: '2022-present',
    description1: 'Assisted the web development team in the creation and maintenance of the company website.',
    description2: 'Organized lesson plans and curriculum to teach computer science concepts and techniques such as object oriented programming, code optimization, and other computer science fundamentals.',
    description3: 'Used Javascript inside of Google Sheets to automate various processes to maximize efficiency in the work environment.',
  },
  {
    id: 2,
    title: 'Mathnasium – Tampa, FL – Assistant Center Director and teacher',
    subheading: 'Tutoring center and franchise  specializing in K-12 math education.',
    time: '2021-2022',
    description1: 'Organized customer information in Excel to be used in various business functions.',
    description2: 'Developed strong communication and teaching skills, and the ability to explain complex concepts in a simple way.',
    description3: 'Worked with a marketing specialist to innovate strategies and techniques for customer acquisition.',
  },
 
 
]


const Work = () => {
  return (
    <section id='work'>
      <h5>My Work Experience</h5>
      <h2>Work</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, title,subheading,time, description1, description2,description3}) => {
            return (
              <article key={id} className='portfolio__item'>
                <h2>Job Title</h2>
              <h2>{title}</h2>
              <h2>Description</h2>
              <h3>{subheading}</h3>
              <h2>Time Peroid</h2>
              <h3>{time}</h3>
              <h2>Job Functions</h2>
              <ul>
                <li>{description1}</li>
                <br></br>
                <li>{description2}</li>
                <br></br>
                <li>{description3}</li>
              </ul>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Work