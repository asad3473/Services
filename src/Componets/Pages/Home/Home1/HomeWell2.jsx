import React, { useEffect } from 'react';
import backgroundImage2 from './../../../images/frontimg2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const HomeWell2 = () => {
  useEffect(() => {
    AOS.init({ duration: 4000 });
  }, []);

  return (
    <div
      className='relative w-full h-screen flex items-center justify-center text-center px-4 font-ui-sans-serif'
      style={{
        backgroundImage: `url(${backgroundImage2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div
        className='absolute inset-0 font-ui-sans-serif bg-[#36527e] opacity-60'
        aria-hidden='true'
      ></div>

      <div
        className='relative z-10 w-full max-w-4xl flex flex-col items-center justify-center space-y-8'
        data-aos='fade-down-right'
      >
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold px-4 md:px-10'>
          We Provide Best Technology Solutions
        </h1>
        <p className='text-base md:text-lg lg:text-lg text-center text-white px-4 md:px-10 '>
          We are passionate about bringing enterprise-level productivity,
          scalability, and security to small and medium businesses.
        </p>
        <div className='space-x-3'>
          <Link to='/about'>
            <button className='w-32 bg-gradient-to-r from-[#121225] to-[#1a1a3c] hover:from-[#61dafb]  hover:to-blue-400 text-white hover:text-black py-3 rounded transition-all  duration-500 shadow-md'>
              How it's work
            </button>

          </Link>
          <Link to='/contac'>
            <button className='w-32 bg-gradient-to-r from-[#61dafb] to-blue-400 hover:from-[#121225] hover:to-[#1a1a3c] text-black hover:text-white py-3 rounded transition-all duration-500 shadow-md'>
              Contact us
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeWell2;
