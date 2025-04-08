import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className='privacy-policy-page'>
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
                <p className='text-sm'>
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
              </div>
            </div>

            {/* Privacy Policy Content Section */}
            <div className='lg:w-3/4 md:w-1/2 px-4 mb-8 lg:mb-0'>
              <h2 className='text-xl font-semibold mb-4'>Privacy Policy</h2>
              <p className='text-sm mb-4'>
                At Sky Innovations IT Services L.L.C, we are committed to
                protecting your privacy. This Privacy Policy outlines how we
                collect, use, and protect your personal information when you
                visit our website or use our services.
              </p>
              <h3 className='font-semibold'>Information We Collect</h3>
              <p className='text-sm mb-4'>
                We collect personal information when you contact us, subscribe
                to our newsletter, or use our services. This may include your
                name, email address, and other relevant details.
              </p>
              <h3 className='font-semibold'>How We Use Your Information</h3>
              <p className='text-sm mb-4'>
                We use your personal information to respond to your inquiries,
                provide services, and send marketing communications if you have
                opted to receive them.
              </p>
              <h3 className='font-semibold'>Data Protection</h3>
              <p className='text-sm mb-4'>
                We implement security measures to safeguard your personal
                information from unauthorized access or disclosure. However, no
                method of transmission over the Internet is 100% secure.
              </p>
              <h3 className='font-semibold'>Your Rights</h3>
              <p className='text-sm mb-4'>
                You have the right to access, correct, or delete your personal
                information. If you wish to exercise these rights, please
                contact us at support@ideatech.ae.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
