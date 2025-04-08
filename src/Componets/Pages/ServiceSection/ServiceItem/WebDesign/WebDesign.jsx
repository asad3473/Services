import React from 'react';
import Contact1 from '../../../images/contact.png';

const ContactForm = () => {
  return (
    <section className=''>
      <div className=' mx-auto px-4 font-serif'>
        <div className='text-center mb-20 mt-20'>
          <h6 className='text-lg font-semibold text-red-600'>
            LET’S GET TO WORK
          </h6>
          <h2 className='text-3xl font-bold text-gray-900'>Contact Us</h2>
        </div>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full mb-8 lg:mb-0'>
            <div className='bg-white p-8  rounded-lg'>
              <img
                src={Contact1}
                alt='Contact'
                className='w-full h-auto mb-4 rounded-md'
              />
              <p className='text-gray-700 mb-4'>
                We provide estimates by phone, email, or at your home. The
                estimate is completely free! Fill out the form, call us{' '}
                <span className='text-blue-500'>+707 555-321</span> or{' '}
                <span className='text-blue-500'>random@example.com</span>, and
                leave your telephone number and home address.
              </p>
              <p className='text-gray-700'>
                We look forward to hearing from you!
              </p>
            </div>
          </div>
          {/* Contact Form Section */}
          <div className='lg:w-1/2 w-full'>
            <div className='bg-white p-8'>
              <p className='form-message mb-4 text-gray-700'></p>
              <form
                id='contact-form'
                className='space-y-4'
                action='mail.php'
                method='POST'
              >
                <div className='form-group'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='form-control w-full p-3 border border-gray-300 rounded-md'
                    required
                    placeholder='Your Name'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='form-control w-full p-3 border border-gray-300 rounded-md'
                    required
                    placeholder='Your Email'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    className='form-control w-full p-3 border border-gray-300 rounded-md'
                    required
                    placeholder='Your Phone'
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control w-full p-3 border border-gray-300 rounded-md'
                    cols='30'
                    rows='6'
                    required
                    placeholder='Your Message'
                  ></textarea>
                </div>
                <div className='form-group'>
                  <button
                    type='submit'
                    className='btn bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
