import React from "react";
import { FaBullhorn, FaLaptopCode, FaRobot, FaCube, FaPenNib } from "react-icons/fa";

const services = [
  { icon: <FaBullhorn />, title: "Digital Marketing" },
  { icon: <FaLaptopCode />, title: "Web Development" },
  { icon: <FaRobot />, title: "AI Prompt Engineering" },
  { icon: <FaCube />, title: "3D Graphic Design" },
  { icon: <FaPenNib />, title: "Content Creation" },
];

const Services = () => {
  return (
    <section id="services" className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-red-600 mb-4">What We Do Best</h2>
        <p>Whether you're launching, scaling, or rebranding, 6Minutes is your shortcut to impact.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white text-black p-6 rounded-lg shadow hover:shadow-lg transition text-center flex flex-col items-center gap-4">
            <div className="text-4xl text-red-600">{service.icon}</div>
            <h3 className="font-bold text-xl">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
