import React from 'react'
import './about.css'
import {CgGames} from 'react-icons/cg'


const About = () => {
  return (
    <section id='about'>
      <h5>Portfolio Projects</h5>
      <h2>Projects</h2>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <CgGames className='about__icon'/>
              <h4>Anthony's experience and projects</h4>
              <p>Anthony considers himself 
                to be a full stack developer 
                with extensive knowledge of 
                Python and Javascript. 
                Anthony prefers building frontend using react and bootstrap, 
                and generally prefers django or flask for develop backend. However,
                Anthony also has experience using Aspen .net, springboot, node and express, vue js, angular, 
                and other popular web frameworks. Anthony also has experience using MySql 
                and Mongo Db for database management and structure. Along with web development, Anthony also has extensive 
                experience in game development. He considers himself an expert in Roblox Studio 
                game development and creation, with some experience using Unity and Unreal engine 5</p>
            </article>
          </div>
        </div>
    </section>
  )
}

export default About