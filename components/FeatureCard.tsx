import React from 'react';
import type { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, color }) => {
  const Icon = feature.icon;
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg">
      <div className="flex items-center mb-6">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-6 ${color} text-white`}>
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <span className={`text-4xl font-bold ${color.replace('bg', 'text')}`}>{feature.letter}</span>
          <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
        </div>
      </div>
      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;