import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Bg1 from './../../../../images/project1.png';
import Bg2 from './../../../../images/projects-2.png';
import Bg3 from './../../../../images/projects-3.png';
import Bg5 from './../../../../images/projects-5.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const allProjects = [
  {
    id: 1,
    title: 'Clikkle',
    para: 'Clikkle Web is an innovative web application designed to streamline user interactions with a focus on simplicity and efficiency. Built with a responsive and intuitive UI,',
    link: 'https://clikkle.com/',
    backgroundImage: Bg1,
  },
  {
    id: 2,
    title: 'School Management System',
    para: 'School management web application designed to streamline administrative tasks, enhance communication, and improve the overall efficiency of educational institutions.',
    link: 'https://schcube.com/',
    backgroundImage: Bg2,
  },
  {
    id: 3,
    title: 'Advocate Iron Tech',
    para: 'Advocate Iron Tech is a professional website developed to serve legal practitioners and law firms, offering a modern platform that streamlines client management, case tracking, and legal documentation.',
    backgroundImage: Bg3,
  },
];

const itSolutions = [
  {
    id: 1,
    title: 'App Customization',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia quas aliquam vitae facere repudiandae atque suscipit recusandae cumque et quo',
    backgroundImage: Bg5,
  },
  {
    id: 2,
    title: 'App Customization',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia quas aliquam vitae facere repudiandae atque suscipit recusandae cumque et quo',
    backgroundImage: Bg1,
  },
];

const digitalSolutions = [
  {
    id: 1,
    title: 'App Customization',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia quas aliquam vitae facere repudiandae atque suscipit recusandae cumque et quo',
    backgroundImage: Bg1,
  },
  {
    id: 2,
    title: 'App Customization',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia quas aliquam vitae facere repudiandae atque suscipit recusandae cumque et quo',
    backgroundImage: Bg2,
  },
];

const appDevelopment = [
  {
    id: 1,
    title: 'App Customization',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia quas aliquam vitae facere repudiandae atque suscipit recusandae cumque et quo',
    backgroundImage: Bg1,
  },
  {
    id: 2,
    title: 'App Customization',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia quas aliquam vitae facere repudiandae atque suscipit recusandae cumque et quo',
    backgroundImage: Bg1,
  },
];

const ProjectHome2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderCards = () => {
    const renderList = (projects) => (
      <div className='grid grid-cols-1 sm:grid-cols-2 mx-auto overflow-hidden lg:grid-cols-3 gap-6 px-4 md:px-10'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className='relative overflow-hidden h-[20rem] group cursor-pointer bg-cover bg-center bg-no-repeat rounded-lg'
            style={{ backgroundImage: `url(${project.backgroundImage})` }}
          >
            <div className='absolute inset-0 bg-[#214b6e] bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 rounded-lg'></div>
            <div className='absolute  top-[-220px] group-hover:top-[10px] transition-all duration-500 text-white px-4 py-4'>
              <h3 className='text-base md:text-lg font-semibold mb-2'>{project.title}</h3>
              <p className='text-sm md:text-base text-justify'>{project.para}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );

    switch (selectedCategory) {
      case 'IT Solutions':
        return renderList(itSolutions);
      case 'Digital Solutions':
        return renderList(digitalSolutions);
      case 'App Development':
        return renderList(appDevelopment);
      default:
        return (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {allProjects.map((project) => (
              <div key={project.id} className='w-full'>
                <a href={project.link} target='_blank' rel='noopener noreferrer'>
                  <motion.div
                    className='relative w-full h-[20rem] group cursor-pointer bg-cover bg-center bg-no-repeat rounded-lg'
                    style={{ backgroundImage: `url(${project.backgroundImage})` }}
                  >
                    <div className='absolute inset-0 transition-all group-hover:bg-opacity-100 ease-in duration-500 bg-[#18354b] bg-opacity-70 rounded-lg text-white'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4'>
                      <h3 className='text-sm md:text-lg font-semibold mb-2'>{project.title}</h3>
                      <p className='text-sm md:text-base'>{project.para}</p>
                    </div>
                  </motion.div>
                </a>
              </div>
            ))}
          </div>
        );

    }
  };

  const categories = ['All Projects', 'IT Solutions', 'Digital Solutions', 'App Development'];

  return (
    <section id='project' className='py-4 px-4 md:px-10'>
      <div className='container mx-auto'>
        <div className='text-center mb-12 '>
          <h6 className='text-lg'>Featured Works</h6>
          <h2 className='text-3xl md:text-4xl font-bold mb-3'>Latest Study Case</h2>
          <nav>
            <ul className='flex flex-wrap  justify-center gap-4'>
              {categories.map((category) => (
                <li key={category} className='px-4 py-2 cursor-pointer'>
                  <Link
                    onClick={() => setSelectedCategory(category)}
                    className={`${selectedCategory === category
                      ? 'text-blue-500 font-semibold underline'
                      : ''
                      }`}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div
          className='cards-container w-[95%] mx-auto font-serif'
          data-aos='fade-right'
        >
          {renderCards()}
        </div>
      </div>
    </section>
  );
};

export default ProjectHome2;
