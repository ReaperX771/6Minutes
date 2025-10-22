import React from "react";
import { FaBullhorn, FaLaptopCode, FaRobot, FaCube, FaPenNib, FaExternalLinkAlt } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const services = [
  { 
    icon: <FaBullhorn />, 
    title: "Digital Marketing", 
    id: "digital-marketing",
    description: "Strategic campaigns to boost your online presence",
    type: "internal"
  },
  { 
    icon: <FaLaptopCode />, 
    title: "Web Development", 
    id: "web-development",
    description: "Custom, responsive websites and applications",
    type: "external",
    url: "https://your-web-dev-project.com" // Replace with your actual project URL
  },
  { 
    icon: <FaRobot />, 
    title: "AI Prompt Engineering", 
    id: "ai-video", // This now links to the AI Video section in Projects
    description: "Optimizing AI interactions for maximum efficiency",
    type: "internal"
  },
  { 
    icon: <FaCube />, 
    title: "3D Graphic Design", 
    id: "projects", // Links to graphics projects section
    description: "Immersive visual experiences through 3D design",
    type: "internal"
  },
  { 
    icon: <FaPenNib />, 
    title: "Content Creation", 
    id: "content-creation",
    description: "Engaging content that tells your story",
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
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-red-600 mb-4">What We Do Best</h2>
        <p className="text-gray-300">Whether you're launching, scaling, or rebranding, 6Minutes is your shortcut to impact.</p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {services.map((service, idx) => (
          service.type === "external" ? (
            // External link for web development
            <div
              key={idx}
              onClick={() => handleServiceClick(service)}
              className="bg-white text-black p-6 rounded-lg shadow hover:shadow-lg transition text-center flex flex-col items-center gap-4 hover:transform hover:-translate-y-2 duration-300 cursor-pointer group"
            >
              <div className="text-4xl text-red-600">{service.icon}</div>
              <h3 className="font-bold text-xl">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
              <div className="flex items-center gap-2 text-red-600 text-sm font-medium mt-2">
                <span>View Project</span>
                <FaExternalLinkAlt className="text-xs" />
              </div>
            </div>
          ) : (
            // Internal anchor link for other services
            <AnchorLink 
              key={idx} 
              href={`#${service.id}`}
              className="bg-white text-black p-6 rounded-lg shadow hover:shadow-lg transition text-center flex flex-col items-center gap-4 hover:transform hover:-translate-y-2 duration-300 cursor-pointer"
            >
              <div className="text-4xl text-red-600">{service.icon}</div>
              <h3 className="font-bold text-xl">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
              <span className="text-red-600 text-sm font-medium mt-2">Learn More →</span>
            </AnchorLink>
          )
        ))}
      </div>
    </section>
  );
};

export default Services;