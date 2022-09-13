import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Card = (props: any) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (typeof window !== undefined)
      if (modal) document.body.classList.add('active-modal');
      else document.body.classList.remove('active-modal');
  }, [modal]);

  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <Image
            src={props.image}
            alt=''
            onClick={toggleModal}
            width={20}
            height={20}
          />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <Image src={props.image} alt='' width={20} height={20} />
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate distinctio assumenda explicabo veniam temporibus
                eligendi.
              </p>
              <p>
                Consectetur adipisicing elit. Cupiditate distinctio assumenda.
                dolorum alias suscipit rerum maiores aliquam earum odit, nihil
                culpa quas iusto hic minus!
              </p>
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i className='far fa-thumbs-up'></i>
                </button>
                <button className='btn_shadow'>
                  VIEW PROJECT<i className='fas fa-chevron-right'></i>
                </button>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
