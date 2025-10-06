import { AiAction } from '../types';

export const getAiResponse = async (concept, action) => {
  if (!concept.trim()) {
    return "Please enter a concept to get started.";
  }

  try {
    const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ concept, action }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from backend proxy:", errorData);
        return `Sorry, an error occurred: ${errorData.error || 'Unknown error'}`;
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error calling backend proxy:", error);
    return "Sorry, there was a problem connecting to our server. Please try again later.";
  }
};
