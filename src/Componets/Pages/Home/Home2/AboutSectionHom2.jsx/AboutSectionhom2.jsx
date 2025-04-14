import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUser } from 'react-icons/fa';
const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);
  return (
    <section className='about-area py-12 lg:px-16 font-ui-sans-serif'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap items-center' data-aos='fade-right'>
          <div className='w-full lg:w-6/12 md:w-full'>
            <div className='about-content'>
              <h6 className='text-lg font-semibold text-[#008bd0]'>
                {' '}
                NASA TECK INNOVATIONS IT SERVICES 
              </h6>
              <h2 className='text-3xl lg:text-4xl font-bold mt-4 '>
                We design, develop, implement and support IT Systems
              </h2>
              <p className='mt-4 text-gray-600'>
                NASA TECK INNOVATIONS IT SERVICES is a forward-thinking
                technology company dedicated to providing cutting-edge software
                development solutions. We specialize in crafting innovative
                digital experiences through a blend of creativity, technical
                expertise, and a customer-first approach. At NASA TECK INNOVATIONS IT
                SERVICES, we offer a wide range of services, including
                custom web and mobile application development, full-stack
                development, and UI/UX design products.
              </p>
              <div className='skills mt-6'>
                <div className='skill-item mb-4'>
                  <h6 className='flex justify-between items-center '>
                    IT Consulting <em className='text-gray-600'>90%</em>
                  </h6>
                  <div className='w-full  rounded-full bgColor h-2.5 mt-2 overflow-hidden'>
                    <div
                      className='bg-gradient-to-br from-[#61dafb] to-blue-500 h-full rounded-full'
                      style={{ width: '90%' }}
                       data-aos='fade-right'
                    ></div>
                  </div>
                </div>
                <div className='skill-item mb-4'>
                  <h6 className='flex justify-between items-center '>
                    Virtual Workstation <em className='text-gray-600'>75%</em>
                  </h6>
                  <div className='w-full bgColor rounded-full h-2.5 mt-2 overflow-hidden'>
                    <div
                      className='bg-gradient-to-br from-[#61dafb] to-blue-500 h-full rounded-full'
                      style={{ width: '75%' }}
                       data-aos='fade-right'
                    ></div>
                  </div>
                </div>
                <div className='skill-item mb-4'>
                  <h6 className='flex justify-between items-center '>
                    Managed IT Service <em className='text-gray-600'>80%</em>
                  </h6>
                  <div className='w-full bgColor rounded-full h-2.5 mt-2 overflow-hidden'>
                    <div
                      className='bg-gradient-to-br from-[#61dafb] to-blue-500 h-full rounded-full'
                      style={{ width: '80%' }}
                      data-aos='fade-right'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-5/12 lg:ml-auto md:w-full mt-12 lg:mt-0'>
            <div className='contact-section bg-gradient-to-br from-[#61dafb] to-blue-500 border p-8 rounded-lg shadow-md'>
              <h3 className='text-2xl flex  items-center gap-2 font-semibold text-black'>
                Free Consultation <FaUser className=' text-white'/>
              </h3>
              <div className='contact-form mt-6'>
                <form
                  id='contact-form'
                  className='form'
                  action='mail.php'
                  method='POST'
                >
                  <div className='space-y-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        className='form-control w-full px-3 py-2 bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:border-black transition duration-300'
                        required
                        placeholder='Your Name'
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        className='form-control w-full px-3 py-2 bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:border-black transition duration-300'
                        required
                        placeholder='Your Email'
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='phone'
                        id='phone'
                        className='form-control w-full px-3 py-2 bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:border-black transition duration-300'
                        required
                        placeholder='Your Phone'
                      />
                    </div>
                    <div className='form-group'>
                      <textarea
                        name='message'
                        id='message'
                        cols='30'
                        rows='5'
                        required
                        placeholder='Your Message'
                        className='form-control w-full px-3 py-2 bg-transparent border-2 border-white placeholder-white focus:outline-none focus:border-black transition duration-300 resize-none'
                      ></textarea>
                    </div>
                    <div className='form-group'>
                      <button
                        type='submit'
                        className='w-32 bg-gradient-to-r from-[#121225] to-[#1a1a3c] hover:from-[#61dafb]  hover:to-blue-400 text-white hover:text-black py-3 rounded transition-all  duration-500 shadow-md'
                      >
                        Send Message
                      </button>

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
