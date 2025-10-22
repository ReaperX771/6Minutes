import React, { useState } from "react";
import { FaExternalLinkAlt, FaVideo, FaTimes } from "react-icons/fa";
import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
import img4 from '../assets/images/img4.jpeg';
import img5 from '../assets/images/img5.jpeg';
import img6 from '../assets/images/img6.jpeg';
import vid1 from '../assets/images/vid1.mp4';
import vid2 from '../assets/images/vid2.mp4';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const graphicsProjects = [
    {
      id: 1,
      title: "E-commerce Product Visualization",
      description: "High-quality 3D product renders for online retail and marketing campaigns",
      image: img1,
      category: "3D Design",
      link: "#"
    },
    {
      id: 2,
      title: "Brand Identity System",
      description: "Complete branding package with 3D logo animations and visual identity",
      image: img2,
      category: "3D Design",
      link: "#"
    },
    {
      id: 3,
      title: "Architectural Visualization",
      description: "Photorealistic 3D architectural renders and virtual walkthroughs",
      image: img3,
      category: "Branding",
      link: "#"
    },
    {
      id: 4,
      title: "Motion Graphics Series",
      description: "Animated graphics and visual effects for social media marketing",
      image: img4,
      category: "Branding",
      link: "#"
    },
    {
      id: 5,
      title: "UI/UX Design System",
      description: "3D-enhanced user interface designs and interactive prototypes",
      image: img5,
      category: "Branding",
      link: "#"
    },
    {
      id: 6,
      title: "Product Animation Reel",
      description: "Dynamic product reveals and technical explainer animations",
      image: img6,
      category: "Branding",
      link: "#"
    }
  ];

  const aiVideos = [
    {
      id: 1,
      title: "AI Video Generation Demo",
      description: "Showcasing our AI-powered video creation capabilities",
      video: vid1
    },
    {
      id: 2,
      title: "AI Content Creation",
      description: "Advanced AI algorithms generating creative video content",
      video: vid2
    }
  ];

  const openImageModal = (project) => {
    setSelectedImage(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % aiVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + aiVideos.length) % aiVideos.length);
  };

  return (
    <>
      <section id="projects" className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Creative Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of 3D designs, animations, and visual innovations that bring ideas to life
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {graphicsProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <div 
                  className="h-48 relative overflow-hidden bg-gray-200"
                  onClick={() => openImageModal(project)}
                >
                  {/* Actual image displayed - may be cropped in small box */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover overlay - only shows on hover */}
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to View Full Size
                    </span>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <button 
                    onClick={() => openImageModal(project)}
                    className="text-red-600 font-medium hover:text-red-700 transition-colors flex items-center gap-2 text-sm"
                  >
                    View Full Size <FaExternalLinkAlt className="text-xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* AI Video Section */}
          <div id="ai-video" className="bg-black text-white rounded-2xl p-8 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <FaVideo className="text-red-600 text-2xl" />
                <h3 className="text-2xl font-bold">AI Video Innovation</h3>
              </div>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Witness the future of content creation with our advanced AI video technology. 
                Transforming ideas into stunning visual narratives through artificial intelligence.
              </p>

              {/* AI Video Carousel */}
              <div className="bg-gray-800 rounded-xl p-4 mb-8 relative">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <video 
                    key={aiVideos[currentVideo].id}
                    controls 
                    className="w-full h-full object-cover"
                    poster={aiVideos[currentVideo].thumbnail}
                  >
                    <source src={aiVideos[currentVideo].video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Navigation */}
                  {aiVideos.length > 1 && (
                    <>
                      <button 
                        onClick={prevVideo}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                      >
                        ‹
                      </button>
                      <button 
                        onClick={nextVideo}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
                
                {/* Video Info */}
                <div className="mt-4 text-center">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {aiVideos[currentVideo].title}
                  </h4>
                  <p className="text-gray-300">
                    {aiVideos[currentVideo].description}
                  </p>
                  <div className="flex justify-center space-x-2 mt-3">
                    {aiVideos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentVideo(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === currentVideo ? 'bg-red-600' : 'bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-400">
                <div className="text-center">
                  <h4 className="text-red-500 font-semibold mb-2">AI-Powered</h4>
                  <p className="text-sm">Advanced machine learning algorithms</p>
                </div>
                <div className="text-center">
                  <h4 className="text-red-500 font-semibold mb-2">Real-time Generation</h4>
                  <p className="text-sm">Instant video content creation</p>
                </div>
                <div className="text-center">
                  <h4 className="text-red-500 font-semibold mb-2">Custom Solutions</h4>
                  <p className="text-sm">Tailored to your brand needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal - Shows full image */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div 
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <FaTimes size={24} />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-2">{selectedImage.description}</p>
                <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;