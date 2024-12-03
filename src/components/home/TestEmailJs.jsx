import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export const TestEmailJs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z58dq8s', 'template_kut58wy', form.current, {
        publicKey: 'N_TYdDnerS4n2JiUw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <h2 className='text-5xl text-black text-center pb-5 pr-10 pt-10'>Email js</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </>


  );
};