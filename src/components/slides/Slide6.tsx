
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
        <Logo className="self-start mb-8 fade-in-up" extraLarge={true} />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-4 fade-in-up stagger-1">
          Marketing & Branding
        </h2>
        
        <h3 className="text-2xl md:text-3xl text-white mb-8 fade-in-up stagger-2">
          Build a brand that resonates & converts.
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="fade-in-up stagger-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-growthiq-electric-blue bg-opacity-20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-growthiq-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl text-growthiq-electric-blue">Web Design & Development</h4>
            </div>
            <p className="text-white mb-4">
              Sites that convert visitors to customers.
            </p>
            <ul className="list-disc pl-5 text-white">
              <li>User-centric design</li>
              <li>Conversion optimisation</li>
              <li>Mobile-first approach</li>
            </ul>
          </div>
          
          <div className="fade-in-up stagger-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-growthiq-electric-blue bg-opacity-20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-growthiq-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="text-xl text-growthiq-electric-blue">Full Branding Services</h4>
            </div>
            <p className="text-white mb-4">
              Create a cohesive brand identity.
            </p>
            <ul className="list-disc pl-5 text-white">
              <li>Visual identity & guidelines</li>
              <li>Brand storytelling</li>
              <li>Consistency across channels</li>
            </ul>
          </div>
          
          <div className="fade-in-up stagger-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-growthiq-electric-blue bg-opacity-20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-growthiq-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h4 className="text-xl text-growthiq-electric-blue">Social Media Marketing</h4>
            </div>
            <p className="text-white mb-4">
              Drive engagement and brand awareness.
            </p>
            <ul className="list-disc pl-5 text-white">
              <li>Platform-specific strategies</li>
              <li>Content creation & scheduling</li>
              <li>Analytics & performance tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide6;
