import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <section id=''>
      <div className = "container header__container">
      <h5>Hello, I am</h5>
      <h1>Anthony</h1>
      <h5 className='text-light'> Unreal Engine 5 Instuctor and Developer</h5>
      <CTA />
      <HeaderSocials />
      </div>
    </section>
  )
}

export default Header