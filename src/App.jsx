import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useRef, useState } from 'react';
import Navbar from './Componets/Nav/Nav';
import ScrollToTop from './Componets/ScrollToTop';
import UseCloseOnBodyClick from './Componets/UseCloseOnBodyClick';

// Lazy-loaded route components
const Home1 = lazy(() => import('./Componets/Pages/Home/Home1/Home1'));
const Contact = lazy(() => import('./Componets/Pages/Contact/Contact'));
const Project = lazy(() => import('./Componets/Pages/Project/Project'));
const ServiceSection = lazy(() => import('./Componets/Pages/ServiceSection/ServiceSection'));
const About = lazy(() => import('./Componets/Pages/About/About'));
const TermAndConditions = lazy(() => import('./Componets/Pages/Termandcondition/TermAndConditions'));
const PrivacyPolicy = lazy(() => import('./Componets/Pages/PrivacyPolicy/PrivacyPolicy'));

function App() {
  const navbarRef = useRef(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const closeAll = () => {
    setIsNavbarOpen(false);
    // Add other close states here if needed (e.g. setIsModalOpen(false))
  };

  UseCloseOnBodyClick([navbarRef], closeAll);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar ref={navbarRef} isOpen={isNavbarOpen} setIsOpen={setIsNavbarOpen} />

      <Suspense fallback={<div className="text-center text-white py-10">Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home1 />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Project />} />
          <Route path='/services' element={<ServiceSection />} />
          <Route path='/about' element={<About />} />
          <Route path='/view-service' element={<ServiceSection />} />
          <Route path='/terms-condition' element={<TermAndConditions />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
