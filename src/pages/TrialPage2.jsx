import React from 'react'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CodeIcon from '@mui/icons-material/Code';
import BarChartIcon from '@mui/icons-material/BarChart';

const HeroAgency = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 bg-gray-800">
      {/* Pattern Overlay Ornament */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
          Innovate. Design. <span className="text-teal-400">Impact.</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10">
          We are a creative agency specializing in crafting exceptional digital experiences.
        </p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

const services = [
  {
    icon: <LightbulbIcon className="h-10 w-10 text-teal-400 mb-4" />,
    title: 'Strategic Consulting',
    description: 'We help define your digital strategy for maximum impact.',
  },
  {
    icon: <CodeIcon className="h-10 w-10 text-teal-400 mb-4" />,
    title: 'Web Development',
    description: 'Building robust and scalable web applications tailored to your needs.',
  },
  {
    icon: <BarChartIcon className="h-10 w-10 text-teal-400 mb-4" />,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and aesthetically pleasing user interfaces.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 max-w-6xl mx-auto text-center relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-gray-800 p-8 rounded-lg shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300"
          >
            {/* Tilted background ornament */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 transform -skew-y-6 origin-top-left -translate-x-4 -translate-y-4 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              {service.icon}
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-r from-purple-700 to-indigo-700 text-white text-center">
      {/* Angular Ornaments */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-purple-800 transform rotate-45 -translate-x-12 -translate-y-12 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-800 transform rotate-45 translate-x-12 translate-y-12 opacity-50"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your next project?</h2>
        <p className="text-lg md:text-xl mb-8">
          Let's build something amazing together. Contact us for a free consultation.
        </p>
        <button className="bg-white text-purple-700 hover:bg-gray-200 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Contact Us
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <p className="mb-4">&copy; {new Date().getFullYear()} Creative Agency. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Instagram
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
};

function TrialPage2() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-hidden relative">
      {/* Background Ornaments (simplified for this example, more complex patterns can be SVG/CSS) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-indigo-500 to-purple-700 transform -skew-y-12 origin-top-left opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-teal-500 to-cyan-700 transform skew-y-12 origin-bottom-right opacity-10"></div>

      <main className="relative z-10">
        <HeroAgency />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default TrialPage2;
