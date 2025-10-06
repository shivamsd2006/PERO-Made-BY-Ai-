import React from 'react';

export interface Feature {
  letter: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export enum AiAction {
  SIMPLIFY = "Simplify Concept",
  GENERATE_QUESTION = "Generate Question",
  SUMMARIZE = "Summarize Concept",
  FLASHCARD = "Generate Flashcard",
}

export interface SavedItem {
  id: string;
  concept: string;
  action: AiAction;
  response: string;
  timestamp: number;
}
