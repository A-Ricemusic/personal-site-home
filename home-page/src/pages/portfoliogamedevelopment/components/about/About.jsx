import React from 'react'
import './about.css'
import me from '../../../../assets/Assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Portfolio Projects</h5>
      <h2>Game Development Projects</h2>
      <h3 className='about__description'>
      Mathematics graduate with knowledge of actuarial science, 
      software engineering, and statistical analysis. 
      Has experience in the financial and mortgage profession, 
      with a background in customer care and education.
      </h3>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h4>Roblox Studio</h4>
              <h5>Advanced </h5>
              <p>Anthony has the most experience using 
                Roblox Studio, and feels very confident in his ability to development
                cross-platform games that are fun, enjoyable, and 
                educational in some cases. Anthony feels Extremely comfortable 
                working with the Lua Api, and can integaret Roblox Studio with 
                vs code and git using Rojo. Check out some of his projects below.  </p>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h4>Unity</h4>
              <h5>Some Experience</h5>
              <p>Anthony has the most experience using 
                Roblox Studio, and feels very confident in his ability to development
                cross-platform games that are fun, enjoyable, and 
                educational in some cases. Anthony feels Extremely comfortable 
                working with the Lua Api, and can integaret Roblox Studio with 
                vs code and git using Rojo. Check out some of his projects below.  </p>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h4>Unreal Engige</h4>
              <h5>Some Experience </h5>
              <p>Anthony has the most experience using 
                Roblox Studio, and feels very confident in his ability to development
                cross-platform games that are fun, enjoyable, and 
                educational in some cases. Anthony feels Extremely comfortable 
                working with the Lua Api, and can integaret Roblox Studio with 
                vs code and git using Rojo. Check out some of his projects below.  </p>
            </article>
          </div>
        </div>
    </section>
  )
}

export default About