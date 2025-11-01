import React from 'react'

const HeroEvent = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 bg-gradient-to-br from-red-500 to-orange-600 text-white">
      {/* Swirl / Abstract Shape Ornament (simplified, can be a complex SVG) */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white border-opacity-30 rounded-full transform rotate-12 animate-spin-slow origin-center"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white border-opacity-30 rounded-full transform -rotate-24 animate-spin-slow-reverse origin-center animation-delay-2000"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-xl md:text-2xl font-semibold mb-4 opacity-90">Annual Tech Conference</p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight mb-6">
          Innovation <span className="text-yellow-300">Summit</span> 2025
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-light mb-10 opacity-80">
          October 26-28, 2025 | Virtual & In-Person
        </p>
        <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-lg">
          Register Now!
        </button>
      </div>
    </section>
  );
};

const scheduleItems = [
  { time: '9:00 AM', title: 'Opening Keynote', speaker: 'Dr. Emily Chen' },
  { time: '10:30 AM', title: 'AI in Healthcare', speaker: 'Prof. David Lee' },
  { time: '1:00 PM', title: 'Future of Quantum Computing', speaker: 'Dr. Sarah Patel' },
  { time: '3:00 PM', title: 'Networking Session', speaker: 'All Attendees' },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 px-4 max-w-5xl mx-auto bg-yellow-50 rounded-lg"> {/* Changed bg to yellow-50 */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Event Schedule</h2>
      <div className="space-y-8">
        {scheduleItems.map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-md flex items-center justify-between flex-wrap gap-4 group hover:shadow-lg transition-shadow duration-300"
          >
            {/* Radial background ornament */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-yellow-50 to-red-50 rounded-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
            <div className="relative z-10 flex-grow">
              <p className="text-xl font-semibold text-gray-900">{item.time}</p>
              <h3 className="text-2xl font-bold text-red-600">{item.title}</h3>
              <p className="text-gray-600">Speaker: {item.speaker}</p>
            </div>
            <div className="relative z-10">
              <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const speakers = [
  {
    name: 'Dr. Emily Chen',
    title: 'CEO, InnovateX',
    image: 'https://via.placeholder.com/150/ff9900/ffffff?text=E.C.',
  },
  {
    name: 'Prof. David Lee',
    title: 'Lead Researcher, AI Labs',
    image: 'https://via.placeholder.com/150/ff6600/ffffff?text=D.L.',
  },
  {
    name: 'Dr. Sarah Patel',
    title: 'Quantum Physicist',
    image: 'https://via.placeholder.com/150/cc3300/ffffff?text=S.P.',
  },
];

const Speakers = () => {
  return (
    <section id="speakers" className="py-20 px-4 max-w-5xl mx-auto text-center bg-orange-50 rounded-lg"> {/* Changed bg to orange-50 */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Our Esteemed Speakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center group hover:shadow-xl transition-shadow duration-300">
            {/* Circular Image & Outer Ring Ornament */}
            <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 border-4 border-red-400 rounded-full scale-0 group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{speaker.name}</h3>
            <p className="text-gray-600 text-center">{speaker.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <p className="mb-4">&copy; {new Date().getFullYear()} Innovation Summit. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Eventbrite
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function TrialPage3() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans relative overflow-hidden">
      {/* Background Ornaments (using radial gradients and pseudo-elements for swirls) */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse-slow animation-delay-3000"></div>

      <main className="relative z-10">
        <HeroEvent />
        <Schedule />
        <Speakers />
      </main>
      <Footer />
    </div>
  );
}
