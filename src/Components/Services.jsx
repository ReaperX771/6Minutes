import React from "react";
import { FaBullhorn, FaLaptopCode, FaRobot, FaCube, FaPenNib, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const services = [
  { 
    icon: <FaBullhorn />, 
    title: "Digital Marketing", 
    id: "digital-marketing",
    description: "Strategic campaigns to boost your online presence and drive conversions",
    type: "internal"
  },
  { 
    icon: <FaLaptopCode />, 
    title: "Web Development", 
    id: "web-development",
    description: "Custom, responsive websites and modern web applications",
    type: "external",
    url: "https://restmeme.com"
  },
  { 
    icon: <FaRobot />, 
    title: "AI Prompt Engineering", 
    id: "ai-video",
    description: "Optimizing AI interactions for maximum creative output",
    type: "internal"
  },
  { 
    icon: <FaCube />, 
    title: "3D Graphic Design", 
    id: "projects",
    description: "Immersive visual experiences through cutting-edge 3D design",
    type: "internal"
  },
  { 
    icon: <FaPenNib />, 
    title: "Content Creation", 
    id: "content-creation",
    description: "Engaging content that tells your brand story effectively",
    type: "internal"
  },
];

const Services = () => {
  const handleServiceClick = (service) => {
    if (service.type === "external" && service.url) {
      window.open(service.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="services" className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-red-600 mb-4">What We Do Best</h2>
        <p className="text-gray-300 text-lg">Whether you're launching, scaling, or rebranding, 6Minutes is your shortcut to impact.</p>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-6">
        {services.map((service, idx) => (
          service.type === "external" ? (
            // External link for web development
            <div
              key={idx}
              onClick={() => handleServiceClick(service)}
              className="bg-gray-900 bg-opacity-20 backdrop-blur-lg border border-gray-700 text-white p-8 rounded-xl shadow-2xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer group hover:border-red-500/50"
            >
              <div className="flex items-center gap-6">
                <div className="text-red-500 text-3xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-red-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-3">{service.description}</p>
                  <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
                    <span>View Live Project</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </div>
                </div>
                <div className="text-gray-500 group-hover:text-red-500 transition-colors duration-300">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          ) : (
            // Internal anchor link for other services
            <AnchorLink 
              key={idx} 
              href={`#${service.id}`}
              className="bg-gray-900 bg-opacity-15 backdrop-blur-xl border border-gray-700 text-white p-8 rounded-xl shadow-2xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer group hover:border-red-500/50 block"
            >
              <div className="flex items-center gap-6">
                <div className="text-red-500 text-3xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-red-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-3">{service.description}</p>
                  <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
                    <span>Explore Service</span>
                    <FaArrowRight className="text-xs" />
                  </div>
                </div>
                <div className="text-gray-500 group-hover:text-red-500 transition-colors duration-300">
                  <FaArrowRight />
                </div>
              </div>
            </AnchorLink>
          )
        ))}
      </div>
    </section>
  );
};

export default Services;