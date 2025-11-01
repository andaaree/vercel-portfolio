import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 py-8 md:p-8 border-b border-purple-200"> {/* Added border-b */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Hi, I'm <span className="text-purple-600">Jane Doe</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
          A passionate Web Developer crafting delightful user experiences.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          View My Work
        </button>
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto bg-purple-50 rounded-lg shadow-inner border-b border-purple-200"> {/* Changed bg and added border-b */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <p className="text-gray-700 text-lg mb-4">
            Hello! I'm Jane, a front-end developer with a love for creating beautiful and functional web applications.
            I specialize in React.js and have a keen eye for design, ensuring every pixel is in its place.
          </p>
          <p className="text-gray-700 text-lg">
            My journey into web development started with a curiosity for how websites work, which quickly blossomed into a passion for building them.
            I'm always learning new technologies and exploring innovative ways to solve problems.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src="https://via.placeholder.com/300" // Replace with your image
            alt="Jane Doe"
            className="rounded-full shadow-lg w-56 h-56 object-cover border-4 border-purple-300"
          />
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    description: 'A modern and responsive e-commerce platform built with React and Tailwind CSS.',
    image: 'https://via.placeholder.com/400x250/a78bfa/ffffff?text=Project+1',
    link: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'An intuitive task management application with drag-and-drop functionality.',
    image: 'https://via.placeholder.com/400x250/818cf8/ffffff?text=Project+2',
    link: '#',
  },
  {
    id: 3,
    title: 'Personal Blog',
    description: 'A minimalist blog template showcasing articles and creative writing.',
    image: 'https://via.placeholder.com/400x250/d8b4fe/ffffff?text=Project+3',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium py-2 px-4 rounded-full transition duration-300 ease-in-out"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


const Footer = () =>{
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <p className="mb-4">&copy; {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}


export default function TrialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 text-gray-800 font-sans relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-1/2 right-0 w-52 h-52 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-6000"></div>

      <main className="relative z-10">
        <HeroSection />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}