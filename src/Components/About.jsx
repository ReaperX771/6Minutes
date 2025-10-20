import React from 'react';
import { FaCheck } from 'react-icons/fa';

const About = () => {
  const values = ['Transparency', 'Creativity', 'Precision', 'Partnership'];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Mission</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At <span className="font-bold text-black">6Minutes</span>, we deliver results with transparency, creativity, and precision. 
              Our passion is to enhance growth respectfully, building strong partnerships along the way.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value} className="flex items-center">
                  <FaCheck className="text-red-500 mr-2" />
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-gray-200 w-full h-64 md:h-80 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-400">
              <p className="text-gray-500">Mission Visual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;