import React from "react";
import { FaArrowDown } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from '../assets/images/log.jpg'

const Hero = () => {
  return (
    <section id="hero" className="bg-black text-white min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-red-500">6Minutes</span> — The Solution Dashboard!
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Collaborating with projects, founders, and builders to amplify visibility and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <AnchorLink
              href="#services"
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors text-sm md:text-base"
              aria-label="Explore Services"
            >
              Explore Services <FaArrowDown className="ml-2" />
            </AnchorLink>

            <AnchorLink
              href="#partnership"
              className="w-full sm:w-auto border border-white hover:border-red-500 hover:text-red-500 text-white py-3 px-6 rounded-lg font-medium transition-colors text-sm md:text-base text-center"
              aria-label="Partner With Us"
            >
              Partner With Us
            </AnchorLink>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* decorative glowing gradient layer */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400 opacity-30 blur-3xl transform scale-105 transition-all duration-1000 hover:opacity-60" aria-hidden="true" />

            <div className="relative inline-block rounded-xl p-1 ring-8 ring-red-500/40 shadow-2xl transform transition-transform duration-700 hover:scale-105 soft-bounce">
              <div className="bg-gray-900 rounded-lg p-6 flex items-center justify-center border border-red-600 w-80 h-72 overflow-hidden">
                <img src={logo} alt="6Minutes" className="max-w-full max-h-full rounded-md shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
