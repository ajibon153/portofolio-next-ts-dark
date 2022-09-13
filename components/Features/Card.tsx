import React from 'react';
import Link from 'next/link';

const Card = (props: any) => {
  return (
    <>
      <div className='box btn_shadow'>
        <img src={props.image} alt='' />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <Link href='/'>
          <i className='fas fa-arrow-right'></i>
        </Link>
      </div>
    </>
  );
};

export default Card;
