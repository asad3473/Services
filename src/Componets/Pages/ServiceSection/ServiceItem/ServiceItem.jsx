import React, { useEffect } from 'react';
import { SiVorondesign } from 'react-icons/si';
import { FaConnectdevelop } from 'react-icons/fa6';
import { IoCameraReverseOutline } from 'react-icons/io5';
import { FaLaravel } from 'react-icons/fa';
import { FaWordpress } from 'react-icons/fa';
import { TbUxCircle } from 'react-icons/tb';
import Hovimg from './../../../images/projects-2.png';
import Hovimg2 from './../../../images/projects-3.png';
import Hovimg3 from './../../../images/projects-4.png';
import { FaPython } from 'react-icons/fa';
import { RiFlutterFill } from 'react-icons/ri';
import { MdAnimation } from 'react-icons/md';
import { LiaDigitalTachographSolid } from 'react-icons/lia';
import { TbWriting } from 'react-icons/tb';
import { TbSeo } from 'react-icons/tb';
import { SiGoogleads } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  useLocation } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    icon: <SiVorondesign size={35} />,
    title: 'Web Designing',
    description:
      'Professional Web Designer, I specialize in creating modern, responsive, My goal is to transform your ideas into a digital reality,',
    link: 'ecom',
    HovImg: Hovimg,
  },
  {
    id: 2,
    icon: <FaConnectdevelop size={35} />,
    title: 'Web Development',
    description:
      'Web Developer, I offer comprehensive web development services tailored to meet the specific needs of businesses and individuals.',
    link: 'webdes',
    HovImg: Hovimg2,
  },
  {
    id: 3,
    icon: <RiFlutterFill size={35} />,
    title: 'App Development',
    description:
      'I offer professional Flutter development services that enable you to build beautiful, high-performance, and natively compiled applications for mobile, web.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id: 4,
    icon: <LiaDigitalTachographSolid size={35} />,
    title: 'Digital Marketing',
    description:
      ' Comprehensive digital marketing services designed to enhance your online presence, attract and engage your target audience.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id: 5,
    icon: <TbSeo size={35} />,
    title: 'SEO',
    description:
      'SEO services designed to enhance your online presence, improve search engine rankings, and drive targeted traffic to your website.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id: 6,
    icon: <TbWriting size={35} />,
    title: 'Content Writing',
    description:
      'High-quality content writing services that captivate your audience, communicate your message effectively, and drive engagement.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id: 7,
    icon: <FaConnectdevelop size={35} />,
    title: 'Full Stack Development',
    description:
      'As a seasoned Full Stack Developer, I provide end-to-end web development services, covering both front-end and back-end development.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id: 8,
    icon: <FaLaravel size={35} />,
    title: 'Laravel',
    description:
      'Laravel Developer, I offer professional Laravel development services tailored to build powerful, scalable, and secure web applications.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id: 9,
    icon: <FaWordpress size={35} />,
    title: 'Word Press Development',
    description:
      'WordPress Developer, I specialize in creating custom, high-performance websites using the world’s most popular content management.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id: 10,
    icon: <IoCameraReverseOutline size={35} />,
    title: 'Graphics Designing',
    description:
      'I offer creative graphic design services that help businesses visually communicate their message and stand out from the competition.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id: 11,
    icon: <TbUxCircle size={35} />,
    title: 'UI/UX Designing',
    description:
      'UI/UX Designer, I specialize in creating user-centered designs that deliver intuitive, engaging, and seamless digital experiences.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id: 12,
    icon: <FaPython size={35} />,
    title: 'Python',
    description:
      'Python Developer, I provide comprehensive Python development services that help businesses build reliable, scalable, and high-performance applications.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },

  {
    id: 13,
    icon: <MdAnimation size={35} />,
    title: '2d & 3d Animations',
    description:
      'Expert 2D and 3D animation services designed to captivate your audience and convey your message in a visually compelling way.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },

  {
    id: 14,
    icon: <SiGoogleads size={35} />,
    title: 'Lead Generation',
    description:
      'Lead generation services designed to help you attract, engage, and convert high-quality leads into loyal customers.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
];

const ServicItem = () => {
  const location = useLocation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  // Determine which subset of servicesData to use based on the path
  const displayedServices =
    location.pathname === '/'
      ? servicesData.slice(0, 4) // Display first 6 items on the home path
      : servicesData; // Display all items otherwise

  return (
    <div className='h-auto w-[100%] '>
      <section className='py-16 lg:px-10 font-ui-sans-serif'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-center mb-8'>
            <div className='text-center'>
              <h6 className='text-lg font-medium '>What We Do</h6>
              <h2 className='text-4xl font-bold '>Our Services</h2>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-gradient-to-br from-[#18343b] to-[#fff] text-white rounded-lg p-4 -mx-4 relative w-full ' data-aos='fade-right'>
            {displayedServices.map((service, index) => (
              <div key={index} className='relative px-4 mb-8'>
                <div className='relative flex flex-col h-full sm:h-[20rem] p-6 border border-[#f7f9f9] rounded-lg bg-white text-black shadow-md transition-all group cursor-pointer hover:bg-[#282c34] duration-500 hover:-translate-y-4 hover:shadow-xl '>

                  {/* Icon */}
                  <div className='relative z-10 flex items-center justify-center mb-4 w-10 p-6 h-10  rounded-full bg-[#040d12]  transition-all ease-in delay-75 group-hover:bg-[#408EF7]'>
                    <p className='text-white text-xl'>{service.icon}</p>
                  </div>

                  {/* Title */}
                  <h3 className='relative z-10 text-xl font-semibold mb-2 text-start transition-all ease-in delay-75 group-hover:text-white'>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className='relative z-10 text-gray-700 text-sm text-start transition-all ease-in delay-75 group-hover:text-white'>
                    {service.description}
                  </p>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ServicItem;
