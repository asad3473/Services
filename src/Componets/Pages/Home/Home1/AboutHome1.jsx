import React, { useEffect } from 'react';
import aboutImage from '../../../images/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Item from 'antd/es/list/Item';
import { FaArrowRight } from 'react-icons/fa';
const AboutHome1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const array = [
    'Custom Web & Mobile App Development', 'Full-Stack Development', 'UI/UX Design That Converts'
  ]
  return (
    <section className=' py-2 lg:px-10 font-ui-sans-serif'>
      <div className='container mx-auto px-4 ' data-aos='fade-right'>
        <div className='flex flex-wrap items-center'>
        <div className='w-full lg:w-1/2 px-4'>
            <div className='rounded-lg overflow-hidden shadow-lg'>
              <img src={aboutImage} alt='About us' className='w-full h-auto' />
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-4'>
            <div className='mb-8 lg:mb-0'>
              <h6 className='text-lg text-[#008bd0]'>
                {/* SKY INNOVATIONS IT SERVICES L.L.C */}
              </h6>
              <h2 className='text-4xl font-bold mt-4 '>
                We design, develop, implement and support IT Systems{' '}
              </h2>
              <p className=' mt-6'>
                We specialize in designing, developing, and supporting intelligent IT solutions tailored to meet your unique business needs. With a perfect blend of creativity, cutting-edge technology, and a customer-first mindset, we turn ideas into impactful, scalable products.
              </p>

              <div>
                {
                  array.map((Item, index) => (
                    <div key={index} className=' mt-3 cursor-pointer group flex  justify-start items-center gap-2 mb-2'>
                      <span className=' text-xs transform -translate-x-1 group-hover:translate-x-1 transition-all ease-in delay-75'><FaArrowRight/></span>
                      <span className=''>{Item}</span>
                    </div>
                  ))
                }
              </div>

            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default AboutHome1;
