import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/CompanyLogo.png';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const FooterHome = () => {
  return (
    <>
      <section className='py-12 md:px-6 px-4 font-ui-sans-serif'>
        <div className='container mx-auto rounded-lg p-6 border border-[#008bd0] px-4'>
          <div className='flex flex-wrap -mx-4'>
            {/* About Us Section */}
            <div className='lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0'>
              <div className='footer-about'>
                <div className='flex-shrink-0 w-16 h-16'>
                  <Link to='/'>
                    <img src={logo} alt='Sky innovation logo' />
                  </Link>
                </div>
                <p className=' text-sm'>
                  We offer a range of cutting-edge web development and software
                  solutions tailored to meet the specific needs of our clients.
                </p>
                <ul className='flex mt-4 space-x-4'>
                  <Link to='/' className='hover:'>
                    <FaFacebookF />
                  </Link>
                  <Link to='/' className='hover:'>
                    <FaTwitter />
                  </Link>
                  <Link to='/' className='hover:'>
                    <FaLinkedinIn />
                  </Link>
                  <Link to='/' className='hover:'>
                    <FaYoutube />
                  </Link>
                </ul>
                {/* <form className='flex flex-col sm:flex-row mt-5 gap-2'>
                  <input
                    type='email'
                    className='flex-1 px-4 py-1 mb-2 sm:mb-0 border border-gray-600 rounded-md text-black'
                    placeholder='Enter your email'
                    name='EMAIL'
                    required=''
                    autoComplete='off'
                  />
                  <button className='bg-[#008bd0] py-1 px-4 rounded-md text-white transition'>
                    Subscribe
                  </button>
                </form> */}
              </div>
            </div>
            {/* Company Section */}
            <div className='lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0'>
              <div className='footer-list'>
                <h5 className='text-lg font-semibold mb-4'>Company</h5>
                <ul className='flex flex-col gap-1'>
                  <Link to='/about' className='hover:'>
                    About Us
                  </Link>
                  <Link to='/project' className='hover:'>
                    Latest Project
                  </Link>
                  <Link to='/services' className='hover:'>
                    IT Solutions
                  </Link>

                  <Link to='/contact' className='hover:'>
                    Contact Us
                  </Link>
                </ul>
              </div>
            </div>
            {/* Services Section */}
            <div className='lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0'>
              <div className='footer-list'>
                <h5 className='text-lg font-semibold mb-4'>Services</h5>
                <ul className='flex flex-col gap-1'>
                  <Link to='/' className='hover:'>
                    IT Strategy
                  </Link>
                  <Link to='/' className='hover:'>
                    Network Services
                  </Link>
                  <Link to='/' className='hover:'>
                    Software Audits
                  </Link>
                </ul>
              </div>
            </div>
            {/* Contact Info Section */}
            <div className='lg:w-1/4 md:w-1/2 px-4'>
              <div className='footer-list'>
                <h5 className='text-lg font-semibold mb-4'>Contact Info</h5>
                <ul className='mb-4 flex flex-col gap-1'>
                  <span className='font-semibold'>
                    Bin Dasmal Building, Al Quoz Industrial 1 Dubai, UAE
                  </span>

                  <span className=' mt-2 font-semibold'>Email:</span>
                  <Link to='mailto:support@ideatech.ae' className='hover:'>
                    support@ideatech.ae{' '}
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Copyright Section */}
      <div className='py-7'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap items-center justify-between'>
            <div className='text-sm'>
              <p>
                © 2024 - All Rights Reserved -{' '}
                <span className='font-semibold'>
                  SKY INNOVATIONS IT SERVICES L.L.C
                </span>
              </p>
            </div>
            <ul className='flex space-x-4 text-sm'>
              <Link to='/terms-condition' className='hover:'>
                Terms & Conditions
              </Link>
              <Link to='/privacy-policy' className='hover:'>
                Privacy Policy
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterHome;
