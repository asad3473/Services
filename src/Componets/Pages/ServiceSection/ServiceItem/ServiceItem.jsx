import React, { useEffect, useState } from 'react';
import { SiVorondesign, SiGoogleads } from 'react-icons/si';
import { FaConnectdevelop, FaLaravel, FaWordpress, FaPython } from 'react-icons/fa';
import { IoCameraReverseOutline } from 'react-icons/io5';
import { TbUxCircle, TbSeo, TbWriting } from 'react-icons/tb';
import { RiFlutterFill } from 'react-icons/ri';
import { MdAnimation } from 'react-icons/md';
import { LiaDigitalTachographSolid } from 'react-icons/lia';
// import Hovimg from '../../../images/project1.png';
// import Hovimg2 from './../../../images/projects-3.png';
// import Hovimg3 from './../../../images/projects-4.png';
import web from './../../../images/web.avif';
import ai from './../../../images/ai.avif';
import video from './../../../images/videoedit.avif';
import app from './../../../images/app.avif';
import content from './../../../images/content.avif';
import seo from './../../../images/seo.avif';
import wordpress from './../../../images/wordpress.avif';
import lead from './../../../images/lead.avif';
import shopify from './../../../images/shopify.avif';
import graphics from './../../../images/graphics.avif';
import cold from './../../../images/cold.avif';
import block from './../../../images/blockchain.avif';
import sale from './../../../images/sales.avif';
import animation from './../../../images/animation.avif';




import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    icon: <SiVorondesign size={35} />,
    title: 'Web Development',
    description: 'Professional Web Designer, I specialize in creating modern, responsive, My goal is to transform your ideas into a digital reality.',
    link: 'ecom',
    HovImg: web,
  },
  {
    id: 12,
    icon: <FaPython size={35} />,
    title: 'AI / Machine Learning',
    description: 'Specialized in AI and Machine Learning, I develop intelligent systems using Python to automate tasks, analyze data, and deliver predictive solutions for businesses.',
    link: 'single-services.html',
    HovImg: ai,
  },

  {
    id: 3,
    icon: <RiFlutterFill size={35} />,
    title: 'App Development',
    description: 'I offer professional Flutter development services that enable you to build beautiful, high-performance, and natively compiled applications.',
    link: 'single-services.html',
    HovImg: app,
  },
  {
    id: 9,
    icon: <FaWordpress size={35} />,
    title: 'Word Press Development',
    description: 'WordPress Developer, I specialize in creating custom, high-performance websites using the world’s most popular content management.',
    link: 'single-services.html',
    HovImg: wordpress,
  },
  {
    id: 5,
    icon: <TbSeo size={35} />,
    title: 'SEO',
    description: 'SEO services designed to enhance your online presence, improve search engine rankings, and drive targeted traffic to your website.',
    link: 'single-services.html',
    HovImg: seo,
  },
  {
    id: 6,
    icon: <TbWriting size={35} />,
    title: 'Content Writing',
    description: 'High-quality content writing services that captivate your audience, communicate your message effectively, and drive engagement.',
    link: 'single-services.html',
    HovImg: content,
  },
 
  {
    id: 8,
    icon: <FaLaravel size={35} />,
    title: 'Laravel',
    description: 'Laravel Developer, I offer professional Laravel development services tailored to build powerful, scalable, and secure web applications.',
    link: 'single-services.html',
    HovImg: web,
  },

  {
    id: 4,
    icon: <LiaDigitalTachographSolid size={35} />,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing services designed to enhance your online presence, attract and engage your target audience.',
    link: 'single-services.html',
    HovImg: sale,
  },
  {
    id: 10,
    icon: <IoCameraReverseOutline size={35} />,
    title: 'Graphics Designing',
    description: 'I offer creative graphic design services that help businesses visually communicate their message and stand out from the competition.',
    link: 'single-services.html',
    HovImg: graphics,
  },

  {
    id: 2,
    icon: <FaConnectdevelop size={35} />,
    title: 'Shopify Development',
    description: 'Web Developer, I offer comprehensive web development services tailored to meet the specific needs of businesses and individuals.',
    link: 'webdes',
    HovImg: shopify,
  },

  {
    id: 13,
    icon: <MdAnimation size={35} />,
    title: '2d & 3d Animations',
    description: 'Expert 2D and 3D animation services designed to captivate your audience and convey your message in a visually compelling way.',
    link: 'single-services.html',
    HovImg: animation,
  },
  {
    id: 14,
    icon: <SiGoogleads size={35} />,
    title: 'Lead Generation',
    description: 'Lead generation services designed to help you attract, engage, and convert high-quality leads into loyal customers.',
    link: 'single-services.html',
    HovImg: lead,
  },


  {
    id: 14,
    icon: <SiGoogleads size={35} />,
    title: 'Cold Calling',
    description: 'Professional cold calling strategies to reach potential clients, build relationships, and boost conversion rates effectively.',
    link: 'single-services.html',
    HovImg: cold,
  },
  {
    id: 11,
    icon: <TbUxCircle size={35} />,
    title: 'UI/UX Designing',
    description: 'UI/UX Designer, I specialize in creating user-centered designs that deliver intuitive, engaging, and seamless digital experiences.',
    link: 'single-services.html',
    HovImg: graphics,
  },
  {
    id: 15,
    icon: <SiGoogleads size={35} />,
    title: 'Video Editing',
    description: 'High-quality video editing services to craft compelling content that grabs attention and communicates your message clearly.',
    link: 'single-services.html',
    HovImg: video,
  },
  {
    id: 16,
    icon: <SiGoogleads size={35} />,
    title: 'Sales Marketing/Email-Marketing',
    description: 'Result-driven marketing campaigns through emails and sales funnels to increase engagement, leads, and sales.',
    link: 'single-services.html',
    HovImg: sale,
  },
  {
    id: 17,
    icon: <SiGoogleads size={35} />,
    title: 'Blockchain',
    description: 'Innovative blockchain solutions to enhance transparency, security, and efficiency in your digital operations.',
    link: 'single-services.html',
    HovImg: block,
  },


];

const ServicItem = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleSeeMoreClick = (e, service) => {
    e.stopPropagation(); // prevent card click
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const displayedServices = location.pathname === '/' ? servicesData.slice(0, 4) : servicesData;

  return (
    <div className='h-auto w-full'>
      <section className='py-4 font-ui-sans-serif'>
        <div className='px-4 w-full'>
          <div className='flex justify-center mb-8'>
            <div className='text-center'>
              <h6 className='text-lg font-medium'>What We Do</h6>
              <h2 className='text-4xl font-bold'>Our Services</h2>
            </div>
          </div>

          <div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-gradient-to-br from-[#61dafb] to-blue-500 text-white rounded-lg p-4'
            data-aos='fade-right'
          >
            {displayedServices.map((service, index) => (
              <div key={index} className='relative mb-8'>
                <div className='relative flex flex-col h-[16rem] p-3 border border-white/20 rounded-lg bg-[#282c34] backdrop-blur-md text-white shadow-md transition-all group hover:bg-white/10 duration-500 hover:-translate-y-4 hover:shadow-xl'>
                  <div className='relative z-10 flex items-center justify-center mb-4 w-10 p-6 h-10 rounded-full bg-[#408EF7] group-hover:bg-black transition-all'>
                    <p className='text-white text-xl'>{service.icon}</p>
                  </div>
                  <h3 className='relative z-10 text-xl font-semibold mb-2 text-start group-hover:text-black'>
                    {service.title}
                  </h3>
                  <p className='relative z-10 text-white text-sm text-start group-hover:text-black'>
                    {service.description}
                  </p>
                  <button
                    onClick={(e) => handleSeeMoreClick(e, service)}
                    className='px-2 py-2 w-6/12 sm:w-6/12 lg:w-4/12 bg-blue-400 rounded-3xl mt-3 group-hover:bg-black'
                  >
                    See more
                  </button>
                </div>
              </div>
            ))}
          </div>

          {isModalOpen && selectedService && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-2"
              onClick={closeModal}
            >
              <div
                className="bg-gradient-to-br from-[#61dafb] to-blue-500 w-full max-w-4xl max-h-[90vh] rounded-lg shadow-xl text-black relative p-4 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-4 text-white text-2xl hover:text-red-600"
                >
                  &times;
                </button>

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-8">
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      src={selectedService.HovImg}
                      alt={selectedService.title}
                      className="w-full max-h-60 md:max-h-72 object-cover rounded-md"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center mb-3">
                      <span className="text-black text-3xl mr-3">{selectedService.icon}</span>
                      <h2 className="text-2xl md:text-3xl font-bold">{selectedService.title}</h2>
                    </div>
                    <p className="text-sm md:text-base text-gray-800 mb-3">{selectedService.description}</p>
                    <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1">
                      <li>High quality service tailored to your needs</li>
                      <li>Fast delivery & responsive design</li>
                      <li>100% client satisfaction guarantee</li>
                      <li>SEO-friendly and scalable solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default ServicItem;
