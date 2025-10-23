import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Partnership = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    serviceInterest: '',
    description: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', message: string }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const payload = {
      access_key: '52ecdd19-80b9-4ea3-9133-296809962ff8',
      name: formData.name,
      email: formData.email,
      projectType: formData.projectType,
      serviceInterest: formData.serviceInterest,
      description: formData.description,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const json = await res.json();
      if (json.success) {
        setStatus({ type: 'success', message: 'Thanks — we received your request. We will be in touch soon.' });
        setFormData({ name: '', email: '', projectType: '', serviceInterest: '', description: '' });
      } else {
        setStatus({ type: 'error', message: json.message || 'Submission failed. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const benefits = [
    'Enhanced visibility across digital platforms',
    'Strategic marketing tailored to your project',
    'Access to our network of industry experts',
    'Accelerated growth through data-driven strategies'
  ];

  return (
    <section id="partnership" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Partner With Us</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <p className="text-lg mb-6 text-gray-300">
              6Minutes collaborates with founders, builders, and innovative projects to amplify visibility and accelerate growth.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-500">Benefits of Partnership:</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="mb-4">
                <label className="block mb-2 text-gray-300">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-300">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-300">Project Type</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  required
                >
                  <option value="">Select project type</option>
                  <option value="startup">Startup</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="non-profit">Non-profit</option>
                  <option value="personal">Personal Project</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-300">Which of our services are you interested in?</label>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                >
                  <option value="">Select a service</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="web-development">Web Development</option>
                  <option value="ai-prompt-engineering">AI Prompt Engineering</option>
                  <option value="3d-graphic-design">3D Graphic Design</option>
                  <option value="content-creation">Content Creation</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-gray-300">Project Description</label>
                <textarea 
                  rows="4"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  placeholder="Tell us about your project"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={submitting}
                className={`w-full ${submitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'} text-white py-3 px-6 rounded-lg font-medium transition-colors`}
              >
                {submitting ? 'Sending...' : 'Submit Partnership Request'}
              </button>

              {status && (
                <div className={`mt-4 text-center ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Partnership;
