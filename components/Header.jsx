import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wider">
          PER<span className="text-teal-400">O</span>
        </h1>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#method" className="text-gray-300 hover:text-teal-400 transition-colors">The Method</a>
          <a href="#demo" className="text-gray-300 hover:text-teal-400 transition-colors">AI Demo</a>
          <a href="#saved-items" className="text-gray-300 hover:text-teal-400 transition-colors">Saved Items</a>
          <a href="#spaced-repetition" className="text-gray-300 hover:text-teal-400 transition-colors">Spaced Repetition</a>
          <a href="#cta" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105">Get Started</a>
        </nav>
        <button className="md:hidden text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
