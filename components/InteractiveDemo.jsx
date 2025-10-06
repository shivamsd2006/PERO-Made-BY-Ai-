import React, { useState, useCallback } from 'react';
import { getAiResponse } from '../services/geminiService';
import { AiAction } from '../types';
import BookmarkIcon from './icons/BookmarkIcon';

const InteractiveDemo = ({ onSave, onUndo }) => {
  const [concept, setConcept] = useState('Quantum Computing');
  const [action, setAction] = useState(AiAction.SIMPLIFY);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [lastSavedItemId, setLastSavedItemId] = useState(null);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult('');
    setError(null);
    setIsSaved(false); // Reset save state on new generation
    setLastSavedItemId(null);
    
    const response = await getAiResponse(concept, action);
    
    if (response.startsWith("Sorry,") || response.startsWith("Please enter")) {
        setError(response);
    } else {
        setResult(response);
    }
    setIsLoading(false);
  }, [concept, action]);

  const handleSave = () => {
    if (result) {
        try {
            setError(null);
            const savedId = onSave({ concept, action, response: result });
            setLastSavedItemId(savedId);
            setIsSaved(true);
        } catch (e) {
            console.error("Failed to save item:", e);
            setError("Could not save the response. Your browser's storage might be full or disabled.");
            setIsSaved(false);
            setLastSavedItemId(null);
        }
    }
  };

  const handleUndo = () => {
    if (lastSavedItemId) {
      try {
        setError(null);
        onUndo(lastSavedItemId);
        setIsSaved(false);
        setLastSavedItemId(null);
      } catch (e) {
        console.error("Failed to undo save:", e);
        setError("Could not undo the save operation. Please try refreshing the page.");
      }
    }
  };

  return (
    <section id="demo" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience PERO's AI in Action</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Enter a complex topic and see how our AI can help you Encode (simplify) or Retrieve (generate questions).
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl border border-gray-700 shadow-2xl">
            <div className="mb-6">
              <label htmlFor="concept" className="block text-sm font-medium text-gray-300 mb-2">
                Enter a Concept or Topic
              </label>
              <textarea
                id="concept"
                rows={3}
                className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                placeholder="e.g., The Theory of Relativity, Photosynthesis, Blockchain..."
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <span className="block text-sm font-medium text-gray-300 mb-2">Choose an AI Action</span>
              <div className="flex flex-wrap gap-2">
                {(Object.values(AiAction)).map((act) => (
                  <button
                    key={act}
                    type="button"
                    onClick={() => setAction(act)}
                    className={`flex-grow basis-1/5 py-3 px-2 rounded-md text-sm font-semibold transition ${action === act ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                  >
                    {act}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-md transition-all disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Generate Response'
              )}
            </button>
          </form>

          {error && (
            <div className="mt-8 bg-red-900/40 border border-red-700/50 text-red-300 px-4 py-3 rounded-xl" role="alert">
              <p className="font-bold">An error occurred:</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          )}

          {result && (
            <div className="mt-8 bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-teal-400">AI Generated Response:</h4>
                    <div className="flex items-center gap-4">
                      <button 
                          onClick={handleSave} 
                          disabled={isSaved}
                          className="flex items-center gap-2 text-sm py-1 px-3 rounded-full transition-colors disabled:cursor-not-allowed bg-gray-700 hover:bg-gray-600 disabled:bg-green-500/80 text-white"
                          aria-label={isSaved ? "Response saved" : "Save response"}
                      >
                          <BookmarkIcon className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                          {isSaved ? 'Saved!' : 'Save Response'}
                      </button>
                      {isSaved && (
                        <button
                          onClick={handleUndo}
                          className="text-sm text-teal-400 hover:text-teal-300 hover:underline"
                          aria-label="Undo save"
                        >
                          Undo
                        </button>
                      )}
                    </div>
                </div>
              <p className="text-gray-300 whitespace-pre-wrap">{result}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
