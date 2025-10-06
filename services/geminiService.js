import { AiAction } from '../types';

export const getAiResponse = async (concept, action) => {
  try {
    const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ concept, action }),
    });

    const data = await response.json();

    if (!response.ok) {
        console.error("Error from backend:", data);
        if (response.status >= 500) {
            return { error: `Sorry, a server error occurred: ${data.error || 'Please try again later.'}` };
        }
        if (response.status >= 400) {
             return { error: `Invalid request: ${data.error || 'Please check your input and try again.'}` };
        }
        return { error: data.error || 'An unknown error occurred.'};
    }

    return { text: data.text };
  } catch (error) {
    console.error("Network or parsing error:", error);
    return { error: "Network error. Please check your internet connection and try again." };
  }
};