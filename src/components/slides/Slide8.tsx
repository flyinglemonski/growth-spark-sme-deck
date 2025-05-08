
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

const FunnelStep = ({ 
  title, 
  delay 
}: { 
  title: string; 
  delay: string;
}) => (
  <div className={`fade-in-up ${delay} mb-6`}>
    <div className="flex justify-between items-center mb-1">
      <span className="text-white">{title}</span>
    </div>
    <div className="h-2 bg-white bg-opacity-20 rounded-full">
      <div 
        className="h-full bg-growthiq-electric-blue rounded-full"
        style={{ width: "100%" }}
      ></div>
    </div>
  </div>
);

const Slide8: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-8 fade-in-up" />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-4 fade-in-up stagger-1">
          Sales Enablement
        </h2>
        
        <p className="text-xl text-white mb-10 fade-in-up stagger-1">
          Build a sales machine that wins.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl text-growthiq-electric-blue mb-6 fade-in-up stagger-2">
              Our Approach
            </h3>
            
            <div className="space-y-6 fade-in-up stagger-2">
              <FunnelStep title="Lead Generation" delay="" />
              <FunnelStep title="Qualification" delay="" />
              <FunnelStep title="Opportunity" delay="" />
              <FunnelStep title="Win" delay="" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 fade-in-up stagger-3 self-start mt-[-30px]">
            <div className="bg-opacity-10 bg-white p-5 rounded-lg">
              <h4 className="text-growthiq-primary-blue font-medium mb-2">CRM Implementation</h4>
              <p className="text-white text-sm">Custom Hubspot, Salesforce & Zoho setups</p>
            </div>
            
            <div className="bg-opacity-10 bg-white p-5 rounded-lg">
              <h4 className="text-growthiq-primary-blue font-medium mb-2">Sales Training</h4>
              <p className="text-white text-sm">Consultative selling & objection handling</p>
            </div>
            
            <div className="bg-opacity-10 bg-white p-5 rounded-lg">
              <h4 className="text-growthiq-primary-blue font-medium mb-2">Pipeline Management</h4>
              <p className="text-white text-sm">Forecasting & deal acceleration</p>
            </div>
            
            <div className="bg-opacity-10 bg-white p-5 rounded-lg">
              <h4 className="text-growthiq-primary-blue font-medium mb-2">Sales Automation</h4>
              <p className="text-white text-sm">Outreach sequences & lead nurturing</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide8;
