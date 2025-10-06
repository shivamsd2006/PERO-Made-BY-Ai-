import { GoogleGenAI } from '@google/genai';
import { AiAction } from '../types';

const getPrompt = (concept, action) => {
  switch (action) {
    case AiAction.SIMPLIFY:
      return `Explain the concept of "${concept}" in simple, easy-to-understand terms, as if you were explaining it to a complete beginner. Use an analogy if it helps.`;
    case AiAction.GENERATE_QUESTION:
      return `Generate one thought-provoking, application-based question about "${concept}". This question should test deep understanding beyond simple memorization and encourage critical thinking.
WEAK QUESTION: "What is photosynthesis?"
STRONG QUESTION: "If a plant's leaves were coated in a substance that blocked all blue light, how would its photosynthetic process be affected and what observable changes might you expect?"`;
    case AiAction.SUMMARIZE:
      return `Act as a study assistant for a student preparing for an exam. Your task is to summarize the concept of "${concept}". The summary must be highly efficient for studying and memorization, focusing only on the most critical, exam-worthy information.

Please structure your response in two parts:
1. **Core Idea:** A single, powerful sentence that captures the absolute essence of the concept.
2. **Key Points:** 3-4 bullet points that highlight the most important details, definitions, or implications likely to appear on a test.

Keep the language clear, concise, and direct. Avoid any fluffy or non-essential information.`;
    case AiAction.FLASHCARD:
      return `Create a flashcard for the concept "${concept}".
Provide the term for the front and a concise definition for the back.
Format your response exactly like this, with "FRONT:" and "BACK:" labels:

FRONT:
${concept}

BACK:
[concise definition here]`;
    default:
      // Fallback prompt, though the frontend should prevent this case.
      return `Tell me about "${concept}".`;
  }
};

export default async function handler(
  req,
  res,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!process.env.API_KEY) {
    console.error('API_KEY is not set in environment variables.');
    return res.status(500).json({ error: 'API key not configured on server.' });
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const { concept, action } = req.body;

    if (!concept || !action || !Object.values(AiAction).includes(action)) {
      return res
        .status(400)
        .json({ error: 'Missing or invalid concept or action in request body' });
    }

    const prompt = getPrompt(concept, action);

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const text = response.text;

    return res.status(200).json({ text });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return res
      .status(500)
      .json({ error: 'Failed to get response from AI service.' });
  }
}
