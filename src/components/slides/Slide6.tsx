
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
              <div className="bg-growthiq-electric-blue bg-opacity-20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-growthiq-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
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
              <div className="bg-growthiq-electric-blue bg-opacity-20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-growthiq-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
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
