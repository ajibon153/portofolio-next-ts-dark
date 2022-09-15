import Link from 'next/link';
import Image from 'next/future/image';

import style from './Portfolio.module.css';

import PortfolioData from './Portfolio_data';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={style.portfolio__container}>
        {PortfolioData.map((data, i) => (
          <article key={i} className={style.portfolio__items}>
            <Image
              className={style.portfolio__item_image}
              src={data.image}
              alt={data.title}
              width={230}
              height={180}
            />
            <h3>This is a portfolio item title</h3>
            <div className={style.portfolio__item_cta}>
              <Link href={data.github} passHref>
                <a target='_blank' className='btn'>
                  Github
                </a>
              </Link>
              <Link href={data.demo} passHref>
                <a target='_blank' className='btn btn-primary'>
                  Live Demo
                </a>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
