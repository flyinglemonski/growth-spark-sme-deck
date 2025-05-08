
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import LightningBolt from '../LightningBolt';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

const Slide3: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-8 fade-in-up" />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-4 fade-in-up stagger-1">
          Meet GrowthIQ
        </h2>
        
        <h3 className="text-2xl md:text-3xl text-white mb-8 fade-in-up stagger-2">
          Your One-Stop Growth Partner
        </h3>
        
        <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative">
          <div className="md:w-2/3 fade-in-up stagger-3">
            <p className="text-xl text-white mb-10">
              We plug in like an in-house team, delivering funding, marketing, sales, finance, recruitment & systems — so you can focus on building your business.
            </p>
            
            <div className="flex flex-col md:flex-row justify-between gap-6 text-white bg-opacity-10 bg-white p-6 rounded-lg">
              <div className="text-center border-b md:border-r border-growthiq-electric-blue pb-4 md:pb-0 md:pr-8">
                <p className="text-sm">Founded</p>
                <p className="text-2xl font-semibold text-growthiq-electric-blue">2023</p>
              </div>
              <div className="text-center border-b md:border-r border-growthiq-electric-blue pb-4 md:pb-0 md:pr-8">
                <p className="text-sm">SMEs Served</p>
                <p className="text-2xl font-semibold text-growthiq-electric-blue">120+</p>
              </div>
              <div className="text-center">
                <p className="text-sm">Avg 3-mo ROI</p>
                <p className="text-2xl font-semibold text-growthiq-electric-blue">4.7×</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-center items-center fade-in-up stagger-4">
            <LightningBolt size="medium" />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide3;
