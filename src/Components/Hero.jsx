import React from "react";
import { FaArrowDown } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section id="hero" className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to 6Minutes — The Solution Dashboard!</h1>
      <p className="text-lg md:text-2xl mb-8 max-w-2xl">
        We collaborate with projects, founders, and builders to amplify visibility and accelerate growth through strategic marketing and innovation.
      </p>
      <AnchorLink href="#services" className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full flex items-center gap-2 transition">
        Explore Services <FaArrowDown />
      </AnchorLink>
    </section>
  );
};

export default Hero;
