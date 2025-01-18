import React from 'react';
import AboutHome1 from './AboutHome1';
import WhyChooseUsHom1 from './WhyChooseUsHom1';
import ProjectHom1 from './ProjectHom1';
import ConsultationSection from './Consultation/ConsultationSection';
import FooterHome from './FooterHome/FooterHome';
import ProjectHome2 from '../Home2/Projecthom2/ProjectHome2';
import Swiiper from './Swipper/Swiiper';
import ServicItem from '../../ServiceSection/ServiceItem/ServiceItem';
const Home1 = () => {
  return (
    <>
      <Swiiper />
      <ServicItem />
      <AboutHome1 />
      <WhyChooseUsHom1 />
      <ProjectHom1 />
      <ProjectHome2 />
      <ConsultationSection />
      <FooterHome />
    </>
  );
};

export default Home1;
