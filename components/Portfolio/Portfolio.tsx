import Link from 'next/link';
import Image from 'next/future/image';

import IMG1 from '../../assets/img1.webp';
import IMG2 from '../../assets/img2.webp';
import IMG3 from '../../assets/img3.webp';
import IMG4 from '../../assets/img4.webp';
import IMG5 from '../../assets/img5.webp';
import IMG6 from '../../assets/img6.webp';

import style from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={style.portfolio__container}>
        <article className={style.portfolio__item}>
          <div className={style.portfolio__item_image}>
            <Image src={IMG1} alt='portfolio1' />
            <h3>This is a portfolio item title</h3>
            <Link href='http://github.com' className='btn' passHref>
              <a target='_blank'>Github</a>
            </Link>
            <Link
              href='http://jibon.my.id'
              className='btn btn-primary'
              passHref
            >
              <a target='_blank'>Live Demo</a>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
