import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

const Slide7: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-8 fade-in-up" />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-4 fade-in-up stagger-1">
          Recruitment
        </h2>
        
        <p className="text-xl text-white mb-10 fade-in-up stagger-1">
          Attract & retain top talent.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl text-growthiq-electric-blue mb-6 fade-in-up stagger-2">
              Our Approach
            </h3>
            
            <ul className="list-disc pl-5 space-y-4 text-white fade-in-up stagger-2">
              <li>
                <span className="font-semibold text-growthiq-electric-blue">Talent Acquisition:</span> We source top candidates through our extensive network and targeted campaigns.
              </li>
              <li>
                <span className="font-semibold text-growthiq-electric-blue">Employer Branding:</span> We help you build a compelling employer brand to attract the best talent.
              </li>
              <li>
                <span className="font-semibold text-growthiq-electric-blue">Retention Strategies:</span> We implement strategies to keep your top performers engaged and committed.
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 gap-4 fade-in-up stagger-3">
            <div className="bg-opacity-10 bg-white p-5 rounded-lg">
              <h4 className="text-growthiq-primary-blue font-medium mb-2">Executive Search</h4>
              <p className="text-white text-sm">Find your next leaders</p>
            </div>
            
            <div className="bg-opacity-10 bg-white p-5 rounded-lg">
              <h4 className="text-growthiq-primary-blue font-medium mb-2">Team Augmentation</h4>
              <p className="text-white text-sm">Scale your team with our experts</p>
            </div>
            
            <div className="bg-opacity-10 bg-white p-5 rounded-lg">
              <h4 className="text-growthiq-primary-blue font-medium mb-2">HR Consulting</h4>
              <p className="text-white text-sm">Streamline your HR processes</p>
            </div>
            
            <div className="bg-opacity-10 bg-white p-5 rounded-lg">
              <h4 className="text-growthiq-primary-blue font-medium mb-2">Training & Development</h4>
              <p className="text-white text-sm">Upskill your workforce</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide7;
