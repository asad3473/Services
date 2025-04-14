import React, { useEffect } from 'react';
import './Wellcome.css'; // If you need additional custom styles

import backgroundImage from './../../../images/thinker3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Wellcome = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className='relative min-h-screen flex flex-col justify-center items-center p-4 bg-cover bg-center font-ui-sans-serif'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className='absolute inset-0  bg-[#36527e]  opacity-75'
        aria-hidden='true'
      ></div>
      <div
        className='relative w-full max-w-3xl mx-auto text-center space-y-5 '
        data-aos='fade-down-right'
      >
        <h1
          className='text-white font-ui-sans-serif font-bold text-xl md:text-4xl lg:text-5xl'
          data-aos='flip-up'
        >
          Welcome To{' '}
          <span className='text-[#61dafb]'>
            {' '}
            NASA TECK INNOVATIONS IT SERVICES {' '}
          </span>
          Transforming Ideas into Powerful Solutions
        </h1>

        <h3 className='text-white text-sm md:text-lg font-ui-sans-serif lg:text-lg'>
          Success is personal—defined by your goals, values, and journey
        </h3>
        <div className='space-x-3'>
          <Link to='/contact'>
            <button className='w-32 bg-gradient-to-r from-[#121225] to-[#1a1a3c] hover:from-[#61dafb]  hover:to-blue-400 text-white hover:text-black py-3 rounded transition-all  duration-500 shadow-md'>
              Contact Us
            </button>

          </Link>
          <Link to='/services'>
            <button className='w-32 bg-gradient-to-r from-[#61dafb] to-blue-400 hover:from-[#121225] hover:to-[#1a1a3c] text-black hover:text-white py-3 rounded transition-all duration-500 shadow-md'>
              Services
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wellcome;
