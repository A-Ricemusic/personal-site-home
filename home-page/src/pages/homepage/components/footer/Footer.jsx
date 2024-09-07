import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      {/* Suppress the eslint warning if necessary */}
      <a href="/personal-site-home" className='footer__logo'>Anthony Rice</a>

      <ul className='permalinks'>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="/personal-site-home">Home</a>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#about">About</a>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#experience">Experience</a>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
