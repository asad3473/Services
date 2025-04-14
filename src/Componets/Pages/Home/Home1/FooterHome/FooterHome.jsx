import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/Logo.png';
import { FaLinkedinIn, FaYoutube, FaArrowRight } from 'react-icons/fa';

const FooterHome = () => {
  return (
    <section className="py-6 px-4 md:px-6 font-ui-sans-serif bg-gradient-to-br from-[#5DD1FA] to-[#469BF8] text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Logo & About */}
          <div className="flex-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="NASA TECH Logo" className="w-16 h-16" />
            </Link>
            <p className="text-sm mb-4">
              Providing smart, futuristic IT and software development services crafted for innovation.
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <Link to="/">
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center group overflow-hidden relative">
                  <svg className="z-10 fill-gray-900 group-hover:fill-white transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 72 72">
                    <path d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z" />
                  </svg>
                  <span className="absolute top-full left-0 w-full h-full bg-blue-500 group-hover:top-0 transition-all duration-300 rounded-full z-0"></span>
                </button>
              </Link>

              {/* LinkedIn */}
              <Link to="/">
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center group overflow-hidden relative">
                  <FaLinkedinIn className="z-10 text-gray-900 group-hover:text-white transition-all" size={18} />
                  <span className="absolute top-full left-0 w-full h-full bg-blue-600 group-hover:top-0 transition-all duration-300 rounded-full z-0"></span>
                </button>
              </Link>

              {/* YouTube */}
              <Link to="/">
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center group overflow-hidden relative">
                  <FaYoutube className="z-10 text-gray-900 group-hover:text-white transition-all" size={18} />
                  <span className="absolute top-full left-0 w-full h-full bg-red-600 group-hover:top-0 transition-all duration-300 rounded-full z-0"></span>
                </button>
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Company */}
            <div>
              <h5 className="text-lg font-semibold mb-3">Company</h5>
              <ul className="space-y-2">
                {[
                  { label: 'About Us', to: '/about' },
                  { label: 'Latest Project', to: '/project' },
                  { label: 'IT Solutions', to: '/services' },
                  { label: 'Contact Us', to: '/contact' },
                ].map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="group flex items-center gap-2 hover:text-black transition">
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h5 className="text-lg font-semibold mb-3">Services</h5>
              <ul className="space-y-2">
                {[
                  'IT Strategy',
                  'Network Services',
                  'Software Audits',
                ].map((service) => (
                  <li key={service}>
                    <Link to="/" className="group flex items-center gap-2 hover:text-black transition">
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="text-lg font-semibold mb-3">Contact Info</h5>
              <p className="text-sm mb-2 font-medium">
                Bin Dasmal Building, Al Quoz Industrial 1 Dubai, UAE
              </p>
              <p className="font-semibold mt-2">Email:</p>
              <Link to="mailto:support@ideatech.ae" className="text-sm hover:underline">
                support@ideatech.ae
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-4 border-t border-white/30 text-sm flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>
            © 2024 - All Rights Reserved -{' '}
            <span className="font-semibold">SKY INNOVATIONS IT SERVICES L.L.C</span>
          </p>
          <div className="flex gap-4">
            <Link to="/terms-condition" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterHome;
