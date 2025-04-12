import Navbar from './Componets/Nav/Nav';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home1 from './Componets/Pages/Home/Home1/Home1';
import Contact from './Componets/Pages/Contact/Contact';
import Project from './Componets/Pages/Project/Project';
import ServiceSection from './Componets/Pages/ServiceSection/ServiceSection';
import ScrollToTop from 'react-scroll-to-top';
import About from './Componets/Pages/About/About';
import TermAndConditions from './Componets/Pages/Termandcondition/TermAndConditions';
import PrivacyPolicy from './Componets/Pages/PrivacyPolicy/PrivacyPolicy';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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
        <ScrollToTop
          smooth
          color='white'
          className='bg-gradient-to-br from-[#61dafb] to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 grid place-items-center rounded-[50%]'
        />
      </BrowserRouter>
    </>
  );
}

export default App;
