import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

const Slide6: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-8 fade-in-up" />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-4 fade-in-up stagger-1">
          Marketing Automation
        </h2>
        
        <h3 className="text-2xl md:text-3xl text-white mb-8 fade-in-up stagger-2">
          Nurture leads & close deals on autopilot.
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          <div className="fade-in-up stagger-3">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/lovable-uploads/69287983-dd94-4874-b921-b5595a618c13.png" 
                alt="Email Marketing Icon" 
                className="h-12 w-12" 
              />
              <h4 className="text-xl text-growthiq-electric-blue">Email Marketing</h4>
            </div>
            <p className="text-xl text-white mb-6">
              Craft beautiful emails that convert.
            </p>
            <ul className="list-disc pl-5 text-white">
              <li>Personalised campaigns</li>
              <li>Segmentation & triggers</li>
              <li>A/B testing</li>
            </ul>
          </div>
          
          <div className="fade-in-up stagger-4">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/lovable-uploads/49948999-7653-4f9f-9f9f-ca93789c99c8.png" 
                alt="Social Media Marketing Icon" 
                className="h-12 w-12" 
              />
              <h4 className="text-xl text-growthiq-electric-blue">Social Media Marketing</h4>
            </div>
            <p className="text-xl text-white mb-6">
              Engage your audience on social.
            </p>
            <ul className="list-disc pl-5 text-white">
              <li>Content scheduling</li>
              <li>Audience insights</li>
              <li>Ad management</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide6;
