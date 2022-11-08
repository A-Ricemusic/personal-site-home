import React from 'react'
import './about.css'
import {CgGames} from 'react-icons/cg'


const About = () => {
  return (
    <section id='about'>
      <h5>Portfolio Projects</h5>
      <h2>Game Development Projects</h2>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <CgGames className='about__icon'/>
              <h4>Anthony's game development experience</h4>
              <p>Anthony has the most experience using 
                Roblox Studio, and feels very confident in his ability to development
                cross-platform games that are fun, enjoyable, and 
                educational. Anthony feels extremely comfortable 
                working with the Lua Api, and can integrate Roblox Studio with 
                VS Code and Git using Rojo. Anthony also has some experience with Unity and Unreal Engine 5. 
                 Check out some of his projects below.  </p>
            </article>
          </div>
        </div>
    </section>
  )
}

export default About