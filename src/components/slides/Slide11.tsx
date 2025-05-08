import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import LightningBolt from '../LightningBolt';
import { Target, Layers, Timer, DollarSign } from 'lucide-react';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

interface PillarProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: string;
}

const Pillar: React.FC<PillarProps> = ({ icon: Icon, title, description, delay }) => (
  <div className={`fade-in-up ${delay} bg-opacity-10 bg-white p-5 rounded-lg`}>
    <div className="flex items-center mb-3">
      <div className="p-2 rounded-full bg-growthiq-primary-blue bg-opacity-20 mr-3">
        <Icon className="h-5 w-5 text-growthiq-electric-blue" strokeWidth={2} />
      </div>
      <h3 className="text-growthiq-electric-blue font-medium">{title}</h3>
    </div>
    <p className="text-white text-sm">{description}</p>
  </div>
);

const Slide11: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  const pillars = [
    {
      icon: Target,
      title: 'SME-Focused',
      description: 'Solutions built for the unique challenges of small and medium businesses.',
      delay: 'stagger-1'
    },
    {
      icon: Layers,
      title: 'All-in-One',
      description: 'End-to-end support across finance, marketing, sales, and operations.',
      delay: 'stagger-2'
    },
    {
      icon: Timer,
      title: 'Speed & Execution',
      description: 'Quick deployment with measurable impact within the first month.',
      delay: 'stagger-3'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear, predictable fees with options for success-based billing.',
      delay: 'stagger-4'
    }
  ];

  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-8 fade-in-up" />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-10 fade-in-up stagger-1">
          Why GrowthIQ?
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/3 flex justify-center items-center fade-in-up">
            <div className="relative">
              <div className="w-56 h-56 rounded-full border-2 border-growthiq-electric-blue flex items-center justify-center">
                <LightningBolt size="medium" className="opacity-70" />
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="animate-pulse text-growthiq-electric-blue text-xl font-semibold">
                  GROWTH
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <Pillar 
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                delay={pillar.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide11;
