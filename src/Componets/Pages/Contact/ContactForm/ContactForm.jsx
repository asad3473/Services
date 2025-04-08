import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import Contact1 from '../../../images/contact.png';

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        () => {
          setIsSending(false);
          toast.success('Your message has been sent successfully!');
        },
        (error) => {
          setIsSending(false);
          toast.error('There was an error sending your message. Please try again later.');
        }
      );
  };

  return (
    <section className=''>
      <div className='mx-auto px-4 font-ui-sans-serif'>
        <div className='text-center mb-20 mt-20'>
          <h6 className='text-lg font-semibold text-black'>LET’S GET TO WORK</h6>
          <h2 className='text-3xl font-bold text-black'>Contact Us</h2>
        </div>
        <div className='flex gap-4 flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full mb-8 lg:mb-0'>
            <div className='border border-[#008bd0] shadow-2xl p-8 rounded-lg'>
              <img
                src={Contact1}
                alt='Contact'
                className='w-full h-auto mb-4 rounded-md'
              />
              <p className='text-gray-600 mb-4'>
                We provide free estimates via email or on-site visits. Our estimates
                are completely free of charge! Simply fill out the form or reach out
                to us at{' '}
                <a href='mailto:support@ideatech.ae' className='text-[#008bd0]'>
                  support@ideatech.ae
                </a>
                , and provide your contact details and address.
              </p>
              <p className='text-gray-600'>We look forward to hearing from you!</p>
            </div>
          </div>
          {/* Contact Form Section */}
          <div className='lg:w-1/2 w-full'>
            <div className='border border-[#008bd0] shadow-2xl rounded-lg p-8'>
              <form ref={form} onSubmit={sendEmail} className='space-y-4'>
                <div className='form-group'>
                  <input
                    type='text'
                    name='user_name'
                    id='name'
                    className='form-control w-full p-3 border bg-gray-200 border-gray-300 rounded-md'
                    required
                    placeholder='Your Name'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    name='user_email'
                    id='email'
                    className='form-control w-full bg-gray-200 p-3 border border-gray-300 rounded-md'
                    required
                    placeholder='Your Email'
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control w-full p-3 border bg-gray-200 border-gray-300 rounded-md'
                    cols='30'
                    rows='6'
                    required
                    placeholder='Your Message'
                  ></textarea>
                </div>
                <div className='form-group'>
                  <button
                    type='submit'
                    className={`btn bg-[#008bd0] text-white px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                      isSending ? 'cursor-not-allowed opacity-70' : ''
                    }`}
                    disabled={isSending}
                  >
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-96 mt-20 overflow-hidden rounded-lg shadow-lg'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55866.687516542006!2d55.1628175716358!3d25.128809467448605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bdae09bddcb%3A0x615f41be25b33bae!2sBin%20Dasmal!5e0!3m2!1sen!2sbd!4v1735386942576!5m2!1sen!2sbd'
          width='100%'
          height='450'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Bin Dasmal Location'
        ></iframe>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactForm;
