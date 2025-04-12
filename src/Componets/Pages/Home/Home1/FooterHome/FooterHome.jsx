import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/CompanyLogo.png';
import {
  // FaFacebookF,
  // FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
} from 'react-icons/fa';

const FooterHome = () => {
  return (
    <>
      <section className="py-4  md:px-6 font-ui-sans-serif relative">
        <div className="rounded-lg p-6 border px-4 mb-3 bg-gradient-to-br from-[#61dafb] to-blue-500 ">
          <div className="flex flex-wrap -mx-4 text-white">
            {/* About Us Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="footer-about">
                <div className="flex-shrink-0 w-16 h-16">
                  <Link to="/">
                    <img src={logo} alt="Sky innovation logo" />
                  </Link>
                </div>
                <p className="text-sm">
                  We offer a range of cutting-edge web development and software solutions tailored to meet the specific needs of our clients.
                </p>
                <ul className="flex mt-4 space-x-4">
                  {/* Facebook */}
                  <Link to="/">
                    <button className="w-10 border border-1 border-gray-500 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                      <svg className="relative z-10 fill-gray-900 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
                        <path d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z" />
                      </svg>
                      <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                    </button>
                  </Link>

                  {/* LinkedIn */}
                  <Link to="/">
                    <button className="w-10 border border-1 border-gray-500 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                      <FaLinkedinIn className="relative z-10 text-gray-900 group-hover:text-white transition-all duration-300" size={20} />
                      <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-600 z-0 transition-all duration-500 group-hover:top-0"></div>
                    </button>
                  </Link>

                  {/* YouTube */}
                  <Link to="/">
                    <button className="w-10 border border-1 border-gray-500 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                      <FaYoutube className="relative z-10 text-gray-900 group-hover:text-white transition-all duration-300" size={20} />
                      <div className="absolute top-full left-0 w-full h-full rounded-full bg-red-600 z-0 transition-all duration-500 group-hover:top-0"></div>
                    </button>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 lg:mb-0">
              <div className="footer-list">
                <h5 className="text-lg font-semibold mb-4 sm:text-center text-start lg:text-left">Company</h5>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link to="/about" className="group flex items-center gap-2 hover:text-[#101112] focus:outline-none transition-all">
                      <span className="text-xs transform group-hover:translate-x-1 transition-all duration-200"><FaArrowRight /></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/project" className="group flex items-center gap-2 hover:text-[#101112] focus:outline-none transition-all">
                      <span className="text-xs transform group-hover:translate-x-1 transition-all duration-200"><FaArrowRight /></span>
                      Latest Project
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="group flex items-center gap-2 hover:text-[#101112] focus:outline-none transition-all">
                      <span className="text-xs transform group-hover:translate-x-1 transition-all duration-200"><FaArrowRight /></span>
                      IT Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="group flex items-center gap-2 hover:text-[#101112] focus:outline-none transition-all">
                      <span className="text-xs transform group-hover:translate-x-1 transition-all duration-200"><FaArrowRight /></span>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 lg:mb-0">
              <div className="">
                <h5 className="text-lg font-semibold mb-4 text-start sm:text-center lg:text-left">Services</h5>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link to="/" className="group flex items-center gap-2 hover:text-[#101112]  transition-all">
                      <span className="text-xs transform group-hover:translate-x-1 transition-all duration-200"><FaArrowRight /></span>
                      IT Strategy
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="group flex items-center gap-2 hover:text-[#101112]  transition-all">
                      <span className="text-xs transform group-hover:translate-x-1 transition-all duration-200"><FaArrowRight /></span>
                      Network Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="group flex items-center gap-2 hover:text-[#101112]  transition-all">
                      <span className="text-xs transform group-hover:translate-x-1 transition-all duration-200"><FaArrowRight /></span>
                      Software Audits
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4">
              <div className="footer-list">
                <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
                <ul className="mb-4 flex flex-col gap-1">
                  <span className="font-semibold">Bin Dasmal Building, Al Quoz Industrial 1 Dubai, UAE</span>

                  <span className="mt-2 font-semibold">Email:</span>
                  <Link to="mailto:support@ideatech.ae" className="hover:">
                    support@ideatech.ae{' '}
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center  justify-between">
            <div className="text-sm">
              <p>
                © 2024 - All Rights Reserved -{' '}
                <span className="font-semibold">SKY INNOVATIONS IT SERVICES L.L.C</span>
              </p>
            </div>
            <ul className="flex space-x-4 text-sm">
              <Link to="/terms-condition" className="hover:">
                Terms & Conditions
              </Link>
              <Link to="/privacy-policy" className="hover:">
                Privacy Policy
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterHome;
