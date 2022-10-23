import './Header.css'
import CTA from './CTA'
import ImageMe from '../../Assets/ImageMe.Jpeg'
import HeaderSocials from './HeaderSocials'
import { BsTextCenter } from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className = "container header__container">
      <h5>Hello, I am</h5>
      <h1>Anthony</h1>
      <h5 className='text-light'> Software Engineer </h5>
      <CTA />
      <HeaderSocials />
      <div className = "me">
        <img  src={ImageMe} alt = "me"/>
      </div>
      <a href='#contact' className='scroll__Down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header