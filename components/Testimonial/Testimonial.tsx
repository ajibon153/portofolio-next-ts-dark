import Image from 'next/future/image';
import style from './Testimonial.module.css';
import TestimonialData from './Testimonial_data';

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Client</h5>
      <h2>Testimonial</h2>
      <Swiper
        className={style.testimonial__container}
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={2}
        pagination={{ clickable: true }}
        navigation
      >
        {TestimonialData.map((testi, i) => (
          <SwiperSlide key={i} className={style.testimonial}>
            <Image
              className={style.client__avatar}
              src={testi.image}
              alt='testi1'
              width={100}
              height={100}
            />
            <h5 className={style.client__name}>{testi.client}</h5>
            <small className={style.client__review}>{testi.desc}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
