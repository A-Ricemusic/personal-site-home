import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'> Socials
    <a href='https://www.linkedin.com' target= '__blank' >  Linkedin {BsLinkedin}</a>
    <a href='https://www.github.com' target= '__blank' > Github</a>
    </div>
  )
}

export default HeaderSocials