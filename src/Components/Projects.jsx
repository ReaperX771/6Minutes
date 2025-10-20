import React from "react";

const projects = [
  { name: "Project Alpha", desc: "Web3 branding and marketing." },
  { name: "Project Beta", desc: "AI integration for blockchain analytics." },
  { name: "Project Gamma", desc: "3D design for NFTs and metaverse." },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-black py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Our Projects</h2>
        <p>Explore some of our recent collaborations and case studies.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="p-6 border rounded hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">{project.name}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
