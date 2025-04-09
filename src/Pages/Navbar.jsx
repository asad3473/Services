import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#181B18]  py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-white">Web-Service</h1>

        {/* Hamburger Button (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl absolute z-20 right-0 top-0 focus:outline-none"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="services">Services</Link></li>
          <li><Link to="about-us">About Us</Link></li>
          <li><Link to="contact-us">Contact Us</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute z-10 right-0 w-50 top-10 p-3 bgColor h-full flex flex-col gap-4 mt-4 text-white font-medium items-center">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="about-us" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        </ul>
      )}
    </nav>
  );
}
