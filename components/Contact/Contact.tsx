import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';

import emailjs from 'emailjs-com';

import style from './Contact.module.css';

interface EmailMe {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log('formRef.current', formRef.current);

    let name = formRef.current!.name.valueOf;
    console.log('name', name);

    let email = formRef.current!.email.value;
    console.log('email', email);

    let message = formRef.current!.message.value;
    console.log('message', message);

    emailjs
      .sendForm(
        'service_pmck7pj',
        'template_oir24m8',
        formRef.current!,
        'fqu4v0ID7sDOY6rm4'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={style.contact__container}>
        <div className={style.contact__options}>
          <article className={style.contact__option}>
            <MdOutlineEmail className={style.contact__option_icon} />
            <h4>Email</h4>
            <h5>dummy@gmail.com</h5>
            <Link href='mailto:dummyemail@gmail.com' passHref>
              <a target='_blank'>Send a message</a>
            </Link>
          </article>
          <article className={style.contact__option}>
            <BsWhatsapp className={style.contact__option_icon} />
            <h4>Whatsapp</h4>
            <h5>+62 877 1923 2494</h5>
            <Link
              href='https://api.whatsapp.com/send?phone=6287719232494'
              passHref
            >
              <a target='_blank'>Send a message</a>
            </Link>
          </article>
        </div>
        <form className={style.contact__form} ref={formRef}>
          <input
            type='text'
            name='name'
            placeholder='Your full name'
            required
          />
          <input type='email' name='email' placeholder='Your email' required />
          <textarea
            name='message'
            // row={7}
            placeholder='your message'
            required
          />
          <button type='submit' className='btn btn-primary' onClick={sendEmail}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
