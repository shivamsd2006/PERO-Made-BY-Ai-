import React from 'react';
import FeatureCard from './FeatureCard';
import BrainIcon from './icons/BrainIcon';
import EncodeIcon from './icons/EncodeIcon';
import RetrieveIcon from './icons/RetrieveIcon';
import OverlearnIcon from './icons/OverlearnIcon';

const features = [
  {
    letter: 'P',
    title: 'Prime Your Mind',
    description: 'Before you dive in, PERO sparks your curiosity. Our AI turns passive reading into an active hunt for answers, giving you a purpose and making you ready to absorb information.',
    icon: BrainIcon,
  },
  {
    letter: 'E',
    title: 'Encode with Clarity',
    description: 'Your personal workshop for understanding. Create analogies and simplify complex ideas. Our AI provides instant feedback, helping you build strong mental connections.',
    icon: EncodeIcon,
  },
  {
    letter: 'R',
    title: 'Retrieve on Demand',
    description: 'This is where knowledge is forged. PERO\'s AI acts as your personal tutor, challenging you with curveball questions that go beyond simple memorization.',
    icon: RetrieveIcon,
  },
  {
    letter: 'O',
    title: 'Overlearn for Mastery',
    description: 'Your training ground for true expertise. Our AI generates endless practice questions and smart flashcards to battle-test your knowledge until it becomes second nature.',
    icon: OverlearnIcon,
  },
];

const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500'];

const PeroMethod = () => {
  return (
    <section id="method" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Science of Real Learning: The PERO Method</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Learning isn't a single event; it's a process. PERO guides you through four essential stages, turning passive consumption into active mastery.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} color={colors[index]}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeroMethod;
