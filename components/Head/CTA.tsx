import style from './Header.module.css';

// import CV from '../../assets/CV_Aji.pdf';

const CTA = () => {
  return (
    <div className={style.cta}>
      <a
        // href={CV}
        className='btn'
      >
        Download CV
      </a>
      <a href='#' className='btn btn-primary'>
        Let us Talk
      </a>
    </div>
  );
};

export default CTA;
