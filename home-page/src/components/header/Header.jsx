import './Header.css'
import CTA from './CTA'
import me from '../../assets/Assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <section id=''>
      <div className = "container header__container">
      <h5>Hello, I am</h5>
      <h1>Anthony</h1>
      <h5 className='text-light'> Software Engineer </h5>
      <CTA />
      <HeaderSocials />
      <div className = "me">
        <img  src={me} alt = "me"/>
      </div>
      <a href='#contact' className='scroll__Down'>Scroll Down</a>

      </div>
    </section>
  )
}

export default Header