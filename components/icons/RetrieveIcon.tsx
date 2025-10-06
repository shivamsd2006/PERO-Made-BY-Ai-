import React from 'react';

const RetrieveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m14.7 14.7-1.4 1.4" />
    <path d="M18 18H6" />
    <path d="M9.3 14.7 7.9 16.1" />
    <path d="M14.7 9.3 16.1 7.9" />
    <path d="M9.3 9.3 7.9 7.9" />
    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
  </svg>
);

export default RetrieveIcon;