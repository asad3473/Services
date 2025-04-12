import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageTit from './../../../images/bg3.jpg';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
const PageTitle = ({ title, Sub }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="relative py-16 sm:py-32 font-ui-sans-serif overflow-hidden" style={{ backgroundImage: `url(${PageTit})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Glassmorphism base */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md z-0"></div>

      {/* Gradient overlay on top of glass */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#61dafb] to-blue-500 opacity-80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center" data-aos="fade-right">
        <div className="flex space-x-5">
          <h1 className="text-black text-3xl font-bold font-ui-sans-serif">{title}</h1>
        </div>
        <div className='flex justify-center mt-2' data-aos="fade-right">
          <div className='flex'>
            <Link to="/" className="text-[#040e11] px-3">Home</Link>
            <IoIosArrowForward size={20} className='mt-1 text-[#040e11]' />
          </div>
          <Link className="text-[#040e11] px-3">{Sub}</Link>
        </div>
      </div>
    </div>
  );
};

export default PageTitle