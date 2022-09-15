import Image from 'next/future/image';
import Hero from '../../assets/hero.png';

import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import style from './About.module.css';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      {/* container */}
      <div className={` ${style.about__container}`}>
        <div className={style.about__me}>
          <div className={style.about__me_image}>
            <Image
              src={Hero}
              alt='My profile picture'
              width={230}
              height={300}
            />
          </div>
        </div>

        <div className={style.about__content}>
          <div className={style.about__cards}>
            <article className={style.about__card}>
              <FaAward className={style.about__icon} />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className={style.about__card}>
              <FiUser className={style.about__icon} />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className={style.about__card}>
              <VscFolderLibrary className={style.about__icon} />
              <h5>Project</h5>
              <small>80+ Worldwide</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptates deleniti labore reprehenderit cupiditate animi quaerat
            perspiciatis soluta alias magnam eveniet nemo quibusdam quis
            voluptatum eos nisi sapiente, officia ad?
          </p>
          {/* <a href='#contact' className='btn btn-primary'>
            Let us Talk
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
