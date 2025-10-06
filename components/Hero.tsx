import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-24 md:py-32 text-center">
      <div className="container mx-auto px-6">
        <div className="bg-teal-500 text-gray-900 rounded-full px-4 py-1 inline-block mb-4 text-sm font-semibold">
          Based on Cognitive Science
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Stop Memorizing. Start Learning.
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
          PERO is the AI-powered study partner that transforms how you learn. Cut your study time and boost retention by up to 60% with a method that makes knowledge actually stick.
        </p>
        <a href="#demo" className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 inline-block shadow-lg hover:shadow-teal-400/30">
          Try the AI Demo
        </a>
      </div>
    </section>
  );
};

export default Hero;