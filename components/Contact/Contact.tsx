import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';

import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

import style from './Contact.module.css';
import { useRouter } from 'next/router';

import LoadingComponent from '../Loading/Loading';

const Contact = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const Service_ID: string = process.env.EMAILJS_SERVICE_ID ?? '';
    const Template_ID: string = process.env.EMAILJS_TEMPLATE_ID ?? '';
    const Emjs_Key: string = process.env.EMAILJS_PUBLIC_KEY ?? '';

    await emailjs
      .sendForm(Service_ID, Template_ID, formRef.current!, Emjs_Key)
      .then(
        (result: any) => {
          if (result.text) {
            Swal.fire('Success!', 'Send message success!', 'success');

            router.push(window.location.origin + '#sendmail');
            formRef.current!.name.value = '';
            formRef.current!.email.value = '';
            formRef.current!.message.value = '';
          } else fail(result);
        },
        (error) => {
          fail(error);
        }
      );

    setIsLoading(false);

    function fail(error: { [key: string]: string }) {
      console.log(error.text);
      alert(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.text,
      });
    }
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
            style={{ height: '200px' }}
          />
          {IsLoading ? (
            <div
              className={`btn btn-primary ${style.custom__button} ${
                IsLoading ? style.custom__button_disable : ''
              }`}
            >
              <LoadingComponent />
            </div>
          ) : (
            <button
              type='submit'
              id='sendmail'
              className={`btn btn-primary ${style.custom__button}`}
              onClick={sendEmail}
            >
              Send Message
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
