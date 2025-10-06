import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="cta" className="bg-gray-800/50">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Revolutionize Your Learning?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join the waitlist and be the first to experience the future of studying with PERO.</p>
        <form className="max-w-md mx-auto flex">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow bg-gray-700 border border-gray-600 rounded-l-full py-3 px-6 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button 
            type="submit" 
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-r-full transition-colors"
          >
            Join Waitlist
          </button>
        </form>
        <div className="mt-12 text-gray-500">
          <p>&copy; {new Date().getFullYear()} PERO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;