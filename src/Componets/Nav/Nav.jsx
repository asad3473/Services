import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";
import logo from "../images/Logo.png";
import ShimmerButton from "../Button/ShimmerButton";
import UseCloseOnBodyClick from "../UseCloseOnBodyClick";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close on outside click
  UseCloseOnBodyClick([navRef], () => setIsOpen(false));

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Service" },
    { path: "/project", label: "Project" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About Us" },
  ];

  return (
    <header className="bgColor h-20 sticky z-40 top-0 shadow-md p-3">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto h-full px-4 font-ui-sans-serif">
        <div className="flex-shrink-0 h-12 w-16">
          <Link to="/">
            <img src={logo} alt="Sky innovation logo" className="h-full w-full" />
          </Link>
        </div>

        <button
          className="md:hidden flex items-center text-black hover:text-red-700 focus:text-[#f0db1b]"
          onClick={toggleMenu}
        >
          <div className="flex flex-col absolute right-5 gap-1 items-center">
            <section className={`w-7 rounded h-1 origin-left transition-transform duration-300 bg-[#008bd0] ${isOpen ? "rotate-[45deg]" : "rotate-0"}`} />
            <section className={`w-7 rounded h-1 bg-[#008bd0] ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <section className={`w-7 rounded h-1 origin-left transition-transform duration-300 bg-[#008bd0] ${isOpen ? "rotate-[-45deg] translate-x-0 translate-y-1" : "rotate-0"}`} />
          </div>
        </button>

        <div className={`flex-grow flex items-center ${isOpen ? "h-screen" : ""} md:flex md:items-center md:justify-center md:h-auto`}>
          <ul
            ref={navRef}
            className={`${isOpen ? "absolute top-20 right-0 w-1/2 h-screen bg-gradient-to-br from-[#61dafb] to-blue-500" : "absolute top-[-100vh] right-0 w-1/2 h-screen"}
              flex flex-col space-y-4 px-4 py-6 text-white
              md:relative md:flex-row md:space-x-8 md:space-y-0 md:bg-transparent md:top-0 md:w-auto md:h-auto md:p-0 md:text-white duration-500`}
          >
            {navLinks.map(({ path, label }) => (
              <li key={path} className="relative group li">
                <Link
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="nav-link flex items-center justify-center py-2 md:py-0 hover:text-[#61dafb] text-lg font-semibold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-shrink-0 hidden md:block">
          <Link to="/contact" className="text-white">
            <ShimmerButton text="Contact us" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
