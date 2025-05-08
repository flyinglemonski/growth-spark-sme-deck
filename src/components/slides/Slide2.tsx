
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import { DollarSign, Clock, Users } from 'lucide-react';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

const PainPoint = ({ 
  icon: Icon, 
  text, 
  delay 
}: { 
  icon: React.ElementType; 
  text: string;
  delay: string;
}) => (
  <div className={`flex flex-col items-center bg-opacity-10 bg-white p-6 rounded-lg fade-in-up ${delay}`}>
    <Icon className="h-12 w-12 text-growthiq-primary-blue mb-4" strokeWidth={2} />
    <p className="text-white text-center text-lg">{text}</p>
  </div>
);

const Slide2: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-8 fade-in-up" />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-12 fade-in-up stagger-1">
          Why Growing Hurts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <PainPoint 
            icon={DollarSign} 
            text="Cash-flow gaps stall 60% of UAE SMEs." 
            delay="stagger-1" 
          />
          <PainPoint 
            icon={Clock} 
            text="Chasing multiple vendors costs 30 hrs/month." 
            delay="stagger-2" 
          />
          <PainPoint 
            icon={Users} 
            text="Limited in-house resources slow scale." 
            delay="stagger-3" 
          />
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide2;
