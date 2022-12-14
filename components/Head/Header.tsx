import Head from 'next/head';
// import Image from 'next/image';
import Image from 'next/future/image';

import CTA from './CTA';
import Social from './Social';

import Hero from '../../assets/hero.png';

import style from './Header.module.css';

const Header = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={style.header} id='header'>
        {/* container */}
        <div className={` ${style.header__container}`}>
          <h5>Hello I am</h5>
          <h1>Aji Muhammad Fauji</h1>
          <h5 className='text-light'>Front-End Developer</h5>
          <Social />
          <CTA />

          <div className={style.me}>
            <Image src={Hero} alt='me' width={352} height={483} />
          </div>

          <a href='#contact' className={style.scroll__down}>
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
