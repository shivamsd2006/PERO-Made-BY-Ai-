import React from 'react';

const FlashcardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M7 13h4" />
    <path d="M15 13h2" />
    <path d="M7 9h2" />
    <path d="M13 9h4" />
  </svg>
);

export default FlashcardIcon;