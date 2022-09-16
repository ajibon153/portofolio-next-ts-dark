import style from './Footer.module.css';

import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

// import { FiLinkedin } from 'react-icons/fi';

// import { BsLinkedin } from 'react-icons/bs';
// import { FaGithub } from 'react-icons/fa';
// import { FiDribbble } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <a href='#' className={style.footer__logo}>
        AJIBON
      </a>

      <ul className={style.permalinks}>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonial'>Testimonial</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className={style.footer__socials}>
        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
        <a href='https://Instagram.com'>
          <FiInstagram />
        </a>
        <a href='https://twitter.com'>
          <IoLogoTwitter />
        </a>
      </div>
      <div className={style.footer__copyright}>copyright @AJIBON Portfolio</div>
    </footer>
  );
};

export default Footer;
