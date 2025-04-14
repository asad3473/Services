import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
// import Contact1 from '../../../images/contact.png';
import { FaLinkedinIn, FaPhone, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';

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


  const contact = [
    {
      icon: <FaPhone />, data: '+27 78 888 1881'
    },
    {
      icon: <MdEmail />, data: 'info@nasateck.com'
    },
    {
      icon: <MdLocationPin />, data: '29 Michelson road Westwood Boksburg,1459,South Africa'
    }
  ]

  return (
    <section className=''>
      <div className='mx-auto px-4 font-ui-sans-serif'>
        <div className='text-center mb-8 mt-2'>
          <h6 className='text-lg font-semibold text-black'>LET’S GET TO WORK</h6>
          <h2 className='text-3xl font-bold text-black'>Contact Us</h2>
        </div>
        <div className='flex gap-4 h-full flex-col  lg:flex-row'>
          <div className='relative rounded-md p-2 bg-[#011D2B] w-full sm:w-[50%]  overflow-hidden'>
            <div className='absolute bottom-2 sm:bottom-10 z-20 right-10 sm:right-20 bg-[#52b6f975] h-16 w-16 sm:h-24 sm:w-24 rounded-full'></div>
            <div className='absolute -bottom-8 -right-2 bg-[#52b6f975] w-20 h-20 sm:h-36 sm:w-36 rounded-full'></div>
            <div className='py-10 px-4 w-full h-full sm:px-10 '>
              <h1 className='text-white text-xl sm:text-4xl font-serif font-semibold mb-4'>Contact Information</h1>
              <p className='text-gray-300 font-serif mb-8 text-md sm:text-lg'>Feel free to reach out or start a live chat!</p>

              <div className='space-y-4 sm:mb-0 mb-4'>
                {
                  contact.map((item, index) => (
                    <div key={index} className='flex items-center gap-4 text-white'>
                      <span className='text-md text-cyan-400'>{item.icon}</span>
                      <span className='font-serif text-xs sm:text-md'>{item.data}</span>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='flex mt-4 space-x-4 absolute bottom-4 left-4 z-30'>

              {/* Facebook */}
              <Link to="/">
                <button className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white border border-gray-500 shadow-md group transition-all duration-300">
                  <svg className="relative z-10 fill-gray-900 group-hover:fill-white transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 72 72" fill="none">
                    <path d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z" />
                  </svg>
                  <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                </button>
              </Link>

              {/* LinkedIn */}
              <Link to="/">
                <button className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white border border-gray-500 shadow-md group transition-all duration-300">
                  <FaLinkedinIn className="relative z-10 text-gray-900 group-hover:text-white transition-all duration-300" size={18} />
                  <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-600 z-0 transition-all duration-500 group-hover:top-0"></div>
                </button>
              </Link>

              {/* YouTube */}
              <Link to="/">
                <button className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white border border-gray-500 shadow-md group transition-all duration-300">
                  <FaYoutube className="relative z-10 text-gray-900 group-hover:text-white transition-all duration-300" size={18} />
                  <div className="absolute top-full left-0 w-full h-full rounded-full bg-red-600 z-0 transition-all duration-500 group-hover:top-0"></div>
                </button>
              </Link>

            </div>


          </div>

          {/* Contact Form Section */}
          <div className='lg:w-1/2 w-full'>
            <div className='border border-[#008bd0] shadow-2xl rounded-lg p-8'>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">

                {/* Name Inputs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      className="w-full border-b-2 border-gray-300 bg-transparent p-3 focus:outline-none focus:border-blue-500 placeholder-gray-500 transition duration-300"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      className="w-full border-b-2 border-gray-300 bg-transparent p-3 focus:outline-none focus:border-blue-500 placeholder-gray-500 transition duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      className="w-full border-b-2 border-gray-300 bg-transparent p-3 focus:outline-none focus:border-blue-500 placeholder-gray-500 transition duration-300"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full border-b-2 border-gray-300 bg-transparent p-3 focus:outline-none focus:border-blue-500 placeholder-gray-500 transition duration-300"
                    />
                  </div>
                </div>

                {/* Radio Category */}
                <div className="space-y-2">
                  <p className="text-gray-700 font-semibold">Category:</p>
                  <div className="flex flex-wrap gap-6">
                    <label className="flex items-center gap-2 text-gray-700">
                      <input type="radio" name="category" value="General" required />
                      General
                    </label>
                    <label className="flex items-center gap-2 text-gray-700">
                      <input type="radio" name="category" value="Support" />
                      Support
                    </label>
                    <label className="flex items-center gap-2 text-gray-700">
                      <input type="radio" name="category" value="Feedback" />
                      Feedback
                    </label>
                    <label className="flex items-center gap-2 text-gray-700">
                      <input type="radio" name="category" value="Other" />
                      Other
                    </label>
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="w-full border-2 border-gray-300 bg-transparent p-3 focus:outline-none focus:border-blue-500 placeholder-gray-500 transition duration-300"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className={`bg-gradient-to-br from-[#61dafb] to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white px-6 py-3 rounded-md transition duration-300 hover:bg-[#0c1a21]  ${isSending ? 'cursor-not-allowed opacity-70' : ''}`}
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
      <div className='w-full h-96 mt-10 mb-4 overflow-hidden rounded-lg shadow-lg'>
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
