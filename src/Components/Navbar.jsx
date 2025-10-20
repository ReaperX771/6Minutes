import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import log from '../assets/images/log.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Partner", href: "#partnership" },
    { name: "AI Video", href: "#ai-video" },
  ];

  return (
    <nav className="fixed w-full bg-black bg-opacity-90 text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
       <img src={log} alt="6Minutes Logo" className="h-10 w-auto" />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link, idx) => (
            <AnchorLink
              key={idx}
              href={link.href}
              className="hover:text-red-600 transition"
            >
              {link.name}
            </AnchorLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95 flex flex-col items-center space-y-4 py-6">
          {links.map((link, idx) => (
            <AnchorLink
              key={idx}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-red-600 transition"
            >
              {link.name}
            </AnchorLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
