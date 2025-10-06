import React, { useState } from 'react';
import { AiAction } from '../types';
import EncodeIcon from './icons/EncodeIcon';
import RetrieveIcon from './icons/RetrieveIcon';
import SummarizeIcon from './icons/SummarizeIcon';
import FlashcardIcon from './icons/FlashcardIcon';

const ActionIcon = ({ action }) => {
    const iconProps = { className: "w-5 h-5 text-gray-400 flex-shrink-0" };
    switch (action) {
        case AiAction.SIMPLIFY:
            return <EncodeIcon {...iconProps} />;
        case AiAction.GENERATE_QUESTION:
            return <RetrieveIcon {...iconProps} />;
        case AiAction.SUMMARIZE:
            return <SummarizeIcon {...iconProps} />;
        case AiAction.FLASHCARD:
            return <FlashcardIcon {...iconProps} />;
        default:
            return null;
    }
};

const SavedItems = ({ items, onClear }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClearClick = () => {
    // This now directly uses window.confirm to simplify the logic
    if (window.confirm('Are you sure you want to delete all saved items? This action cannot be undone.')) {
      onClear();
    }
  };

  return (
    <section id="saved-items" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Your Saved Insights</h2>
          {items.length > 0 && (
            <button
              onClick={handleClearClick}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              Clear All ({items.length})
            </button>
          )}
        </div>

        {items.length > 0 ? (
          <div className="space-y-6">
            {[...items].reverse().map((item) => (
              <div key={item.id} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-transform">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                        <ActionIcon action={item.action} />
                        <p className="text-sm text-gray-400">{item.action} for:</p>
                    </div>
                    <h3 className="text-xl font-bold text-teal-400 break-words">{item.concept}</h3>
                  </div>
                  <span className="text-xs text-gray-500 flex-shrink-0 mt-1">{new Date(item.timestamp).toLocaleString()}</span>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-md">
                  <p className="text-gray-300 whitespace-pre-wrap">{item.response}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-800/30 rounded-lg border border-dashed border-gray-700">
            <h3 className="text-xl font-semibold text-white">No Saved Items Yet</h3>
            <p className="text-gray-400 mt-2 max-w-md mx-auto">
              Use the <span className="font-semibold text-teal-400">"Save Response"</span> button in the AI demo above to keep track of your learning and build your personal knowledge base.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedItems;
