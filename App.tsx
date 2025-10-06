import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PeroMethod from './components/PeroMethod';
import InteractiveDemo from './components/InteractiveDemo';
import SpacedRepetition from './components/SpacedRepetition';
import Footer from './components/Footer';
import SavedItems from './components/SavedItems';
import { SavedItem, AiAction } from './types';

const LOCAL_STORAGE_KEY = 'pero-saved-items';

function App() {
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);

  useEffect(() => {
    try {
      const storedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedItems) {
        setSavedItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error("Failed to parse saved items from localStorage", error);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, []);

  const handleSaveItem = (item: { concept: string; action: AiAction; response: string }): string => {
    const newItem: SavedItem = {
      ...item,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };
    
    setSavedItems(prevItems => {
        const updatedItems = [...prevItems, newItem];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
        return updatedItems;
    });
    return newItem.id;
  };

  const handleUndoSave = (itemId: string) => {
    setSavedItems(prevItems => {
        const updatedItems = prevItems.filter(item => item.id !== itemId);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
        return updatedItems;
    });
  };

  const handleClearItems = () => {
    // Confirmation is handled in the SavedItems component to prevent double prompts.
    setSavedItems([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };


  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-700/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <PeroMethod />
          <SpacedRepetition />
          <InteractiveDemo onSave={handleSaveItem} onUndo={handleUndoSave} />
          <SavedItems items={savedItems} onClear={handleClearItems} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;