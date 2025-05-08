
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import LightningBolt from '../LightningBolt';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

const Slide7: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-8 fade-in-up" size="small" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          <div className="flex flex-col fade-in-up stagger-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-growthiq-primary-blue mb-4">
              Tax & Accounting
            </h2>
            
            <p className="text-xl text-white mb-6">
              Accounting compliance & reporting.
            </p>
            
            <div className="bg-opacity-10 bg-white p-6 rounded-lg flex-1">
              <div className="mb-6">
                <h3 className="text-growthiq-electric-blue font-medium mb-2">Bookkeeping</h3>
                <p className="text-white text-sm">Daily, weekly, or monthly transaction processing</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-growthiq-electric-blue font-medium mb-2">VAT Compliance</h3>
                <p className="text-white text-sm">FTA registration, filing & reporting</p>
              </div>
              
              <div>
                <h3 className="text-growthiq-electric-blue font-medium mb-2">Financial Statements</h3>
                <p className="text-white text-sm">Monthly, quarterly & annual reporting</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex flex-col fade-in-up stagger-2">
            <LightningBolt 
              size="small" 
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 opacity-50"
            />
            
            <h2 className="text-3xl md:text-4xl font-semibold text-growthiq-primary-blue mb-4">
              Fractional CFO
            </h2>
            
            <p className="text-xl text-white mb-6">
              Strategic CFO insight without full-time cost.
            </p>
            
            <div className="bg-opacity-10 bg-white p-6 rounded-lg flex-1">
              <div className="mb-6">
                <h3 className="text-growthiq-electric-blue font-medium mb-2">Cash Flow Management</h3>
                <p className="text-white text-sm">13-week rolling forecasts & optimization</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-growthiq-electric-blue font-medium mb-2">Financial Strategy</h3>
                <p className="text-white text-sm">Growth roadmaps & investment planning</p>
              </div>
              
              <div>
                <h3 className="text-growthiq-electric-blue font-medium mb-2">KPI Dashboards</h3>
                <p className="text-white text-sm">Custom metrics tracking & board reporting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide7;
