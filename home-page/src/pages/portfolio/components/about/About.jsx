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
              <p> Anthony possesses extensive experience in 3D modeling, animation, and game development, with a strong portfolio of projects built in Blender, Unreal Engine 5, and Roblox Studio. Notably, he has developed professional experiences using Unreal Editor for Fortnite, which have been featured in prominent esports tournaments and events. His diverse project portfolio also includes creating and managing a WordPress website to enhance user experience, SEO performance, and backend functionality, as well as developing Python web applications that streamline business operations.

Anthony's innovative approach and ability to implement advanced strategies, combined with his technical expertise and creative mindset, make him a valuable asset in both game and web development projects. His collaborative nature and strong communication skills ensure effective teamwork and successful project outcomes, consistently delivering high-quality results that drive growth and engagement.</p>
            </article>
          </div>
        </div>
    </section>
  )
}

export default About