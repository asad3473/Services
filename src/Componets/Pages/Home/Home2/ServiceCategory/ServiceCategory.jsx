import React, { useEffect } from 'react';
import { FaCogs, FaDigitalTachograph } from 'react-icons/fa';
// import { LuSettings } from 'react-icons/lu';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    icon: <FaCogs />,
    title: 'IT Solutions',
    description:
      'Sky Innovations offers a wide range of IT services designed to streamline business operations, improve productivity, and optimize technology performance for clients across various industries.',
  },
  {
    icon: (
      <FaDigitalTachograph />
    ),
    title: 'Digital Solutions',
    description:
      'Sky Innovations provides cutting-edge digital solutions that empower businesses to stay ahead of the competition by embracing new technologies and improving operational efficiency.'
  },
];

const ServicesCategory = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className='services-category-area pt-4 font-ui-sans-serif '>
      <div className='container mx-auto px-6 md:px-6 '>
        <div className='flex flex-wrap'>
          <div className='w-full'>
            <div className='section-title text-center mb-8'>
              <h6 className='text-black text-lg'>Our Core Services</h6>
              <h2 className='text-3xl text-black font-bold  mt-2'>
                Explore IT Solutions
              </h2>
            </div>
          </div>
        </div>
        <div
          className='flex  md:flex-nowrap flex-wrap items-center container '
          data-aos='fade-right'
        >
          {services.map((service, index) => (
            <div key={index} className='w-full border border-black sm:w-5/12 rounded-md mb-8 p-4 mx-auto '>
              
                <div className='flex flex-wrap items-center gap-5'>
                  <div className=''>
                    <span className=' text-5xl '>{service?.icon}</span>
                  </div>
                  <div className=' sm:w-[70%] w-full '>
                    <h3 className='text-2xl font-semibold text-black'>
                      {service.title}
                    </h3>
                    <p className='mt-2 text-gray-600'>{service.description}</p>
                  </div>
                </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCategory;
