import style from './Services.module.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      {/* container */}
      <div className={` ${style.services__container}`}>
        {/* UI/UX Design */}
        <article className={style.service}>
          <div className={style.service__head}>
            <h3>UI/UX Design</h3>
          </div>

          <ul className={style.service__list}>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}
        <article className={style.service}>
          <div className={style.service__head}>
            <h3>Web Development</h3>
          </div>

          <ul className={style.service__list}>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* Design Graphic */}
        <article className={style.service}>
          <div className={style.service__head}>
            <h3>Design Graphic</h3>
          </div>

          <ul className={style.service__list}>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
