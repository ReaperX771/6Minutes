import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import log from '../assets/images/log.jpg'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <img src={log} alt="6Minutes Logo" className="h-10 w-auto" />
        <div className="flex gap-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-red-600 transition"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-red-600 transition"><FaLinkedin size={24} /></a>
          <a href="#" className="hover:text-red-600 transition"><FaGithub size={24} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} 6Minutes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
