import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import Rocket from '../Rocket';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

const Slide9: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-8 fade-in-up" />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-4 fade-in-up stagger-1">
          Recruitment Services
        </h2>
        
        <p className="text-xl text-white mb-10 fade-in-up stagger-1">
          Find the right people. Build the right team.
        </p>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 space-y-6 fade-in-up stagger-2">
            <p className="text-white">
              We go beyond traditional recruitment to find candidates who won't just fill positions, but will drive your business growth forward.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-opacity-10 bg-white p-4 rounded-lg">
                <h4 className="text-growthiq-electric-blue font-medium mb-2">Permanent Hiring</h4>
                <p className="text-white text-sm">End-to-end recruitment for all levels</p>
              </div>
              
              <div className="bg-opacity-10 bg-white p-4 rounded-lg">
                <h4 className="text-growthiq-electric-blue font-medium mb-2">Executive Search</h4>
                <p className="text-white text-sm">C-suite & leadership talent acquisition</p>
              </div>
              
              <div className="bg-opacity-10 bg-white p-4 rounded-lg">
                <h4 className="text-growthiq-electric-blue font-medium mb-2">Employer Branding</h4>
                <p className="text-white text-sm">Positioning to attract top talent</p>
              </div>
              
              <div className="bg-opacity-10 bg-white p-4 rounded-lg">
                <h4 className="text-growthiq-electric-blue font-medium mb-2">Assessment</h4>
                <p className="text-white text-sm">Skills testing & cultural fit evaluation</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center items-center fade-in-up stagger-3">
            <div className="rounded-full overflow-hidden bg-growthiq-deep-navy p-2 border-2 border-growthiq-primary-blue">
              <Rocket size="medium" />
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide9;
