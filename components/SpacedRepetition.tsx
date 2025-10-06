import React from 'react';
import SaveIcon from './icons/SaveIcon';

const SpacedRepetition: React.FC = () => {
  return (
    <section id="spaced-repetition" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500 text-white mb-6">
              <SaveIcon className="w-8 h-8"/>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Brain Has a "Delete" Button. We Have the "Save" Button.</h2>
            <p className="text-lg text-gray-400 mb-6">
              Science shows we're wired to forget 90% of what we learn within days—it's called the "Forgetting Curve." PERO defeats it with AI-Powered Spaced Repetition.
            </p>
            <p className="text-lg text-gray-400">
              Our intelligent system tracks what you've learned and notifies you at the scientifically optimal time to review. This automated process is the single most effective technique for locking knowledge into your long-term memory.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="https://picsum.photos/seed/spaced/600/400" alt="Forgetting Curve Graph" className="rounded-xl shadow-2xl shadow-teal-500/20 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpacedRepetition;