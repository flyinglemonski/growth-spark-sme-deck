
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import { Target, Layers, Timer, DollarSign } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
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
      description: 'Quick deployment with measurable impact within the first few months.',
      delay: 'stagger-3'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear, predictable with no hidden charges.',
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
    </SlideLayout>
  );
};

export default Slide11;
