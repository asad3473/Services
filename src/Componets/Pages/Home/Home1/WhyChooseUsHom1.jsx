import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import icon1 from '../../../images/icon-1.jpg';
import icon2 from '../../../images/icon-2.jpg';
import icon3 from '../../../images/icon-3.jpg';
import icon4 from '../../../images/icon-4.jpg';
import icon5 from '../../../images/icon-5.jpg';
import icon6 from '../../../images/icon-6.jpg';

const whyChooseData = [
  {
    icon: icon6,
    title: 'Custom Developed Software',
    description:
      'We specialize in creating tailored software solutions that meet the unique needs of your business.',
  },
  {
    icon: icon1,
    title: 'Protect your Business',
    description:
      'Safeguard companies of all sizes against the ever-evolving landscape of risks and challenges.',
  },
  {
    icon: icon2,
    title: 'Network Monitoring',
    description:
      'Ensuring the performance, security, and reliability of your IT infrastructure.',
  },
  {
    icon: icon5,
    title: 'Dedicated IT Support',
    description:
      'Providing personalized and reliable IT support solutions for businesses of all sizes.',
  },
  {
    icon: icon3,
    title: 'Network Security',
    description:
      'Protect your digital infrastructure against the growing range of cyber threats.',
  },
  {
    icon: icon4,
    title: 'Managed IT Service',
    description:
      'Empowering businesses by taking the complexity out of technology management.',
  },
];

const WhyChooseUsHom1 = () => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className='py-14 lg:px-10 font-ui-sans-serif bg-gray-900 relative'>
      <div className='container mx-auto px-4 relative'>
        {/* Heading */}
        <div className='text-center mb-12'>
          <h6 className='text-2xl sm:text-4xl font-bold text-white'>Why Partner with Us</h6>
          <h2 className='text-xl text-gray-300'>Smarter Tech, Stronger Results</h2>
        </div>

        {/* Custom Navigation Icons */}
        <div className='absolute z-10 flex gap-3 text-white 
          -bottom-8 left-1/2 transform -translate-x-1/2
          sm:bottom-8 sm:left-auto sm:right-8 sm:translate-x-0 
          md:top-14 md:bottom-auto'>

          <div className='swiper-button-prev-custom flex items-center justify-center p-2 sm:p-3 bg-gradient-to-br from-[#61dafb] to-blue-500 rounded-md sm:rounded-full cursor-pointer hover:from-[#59a0b4]'>
            <FaArrowLeft />
          </div>
          <div className='swiper-button-next-custom flex items-center justify-center p-2 sm:p-3 bg-gradient-to-br from-[#61dafb] to-blue-500 rounded-md sm:rounded-full cursor-pointer hover:from-[#59a0b4]'>
            <FaArrowRight />
          </div>

        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='px-4'
        >
          {whyChooseData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => setActiveCard(item)}
                className='flex flex-col justify-between h-full p-6 bg-black border border-white/20 rounded-lg backdrop-blur-md text-white shadow-md ease-in transition-all duration-500 hover:bg-gradient-to-br hover:from-[#61dafb]/30 hover:bg-[#008bd0] hover:-translate-y-2 hover:shadow-xl group cursor-pointer'
                data-aos='fade-up'
              >
                <div className='flex sm:justify-center text-start sm:text-center justify-start sm:items-center flex-col'>
                  <div className='mb-4'>
                    <img src={item.icon} alt='icon' className='w-12 h-12 rounded-full' />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-semibold mb-2 group-hover:text-black'>
                    {item.title}
                  </h3>
                  <p className='sm:text-xl text-md'>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Full Description Modal */}
        {activeCard && (
          <div className='fixed inset-0 bg-black h-full bg-opacity-80 flex items-center justify-center z-50'>
            <div className='bgColor text-white p-6 rounded-lg max-w-lg w-full relative'>
              <button
                className='absolute top-2 right-2 text-xl text-white hover:text-red-600'
                onClick={() => setActiveCard(null)}
              >
                &times;
              </button>
              <img src={activeCard.icon} alt='icon' className='w-14 h-14 mb-4 rounded-full' />
              <h3 className='text-2xl font-bold mb-2'>{activeCard.title}</h3>
              <p className='text-white'>{activeCard.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUsHom1;
