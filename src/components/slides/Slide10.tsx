
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import { BarChart } from 'lucide-react';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

const Slide10: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-8 fade-in-up" />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-4 fade-in-up stagger-1">
          SaaS & Cloud Optimisation
        </h2>
        
        <p className="text-xl text-white mb-10 fade-in-up stagger-1">
          Cut software & cloud waste by up to 25%.
        </p>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 fade-in-up stagger-2">
            <div className="bg-opacity-10 bg-white p-6 rounded-lg mb-6">
              <h3 className="text-growthiq-electric-blue font-medium mb-3">The Problem:</h3>
              <ul className="text-white space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Duplicate SaaS subscriptions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unused licences and seats</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Over-provisioned cloud resources</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Inefficient storage management</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-opacity-10 bg-white p-6 rounded-lg">
              <h3 className="text-growthiq-electric-blue font-medium mb-3">Our Solution:</h3>
              <ul className="text-white space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Complete tech stack audit</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Licence utilisation analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cloud resource right-sizing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Negotiation support with vendors</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2 flex flex-col justify-center items-center fade-in-up stagger-3 mt-[-30px]">
            <BarChart className="h-12 w-12 text-growthiq-primary-blue mb-6" strokeWidth={2} />
            
            <div className="w-full max-w-md">
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-white">Before Optimisation</span>
                  <span className="text-white">$12,500/mo</span>
                </div>
                <div className="h-8 bg-white bg-opacity-20 rounded">
                  <div 
                    className="h-full bg-growthiq-primary-blue rounded"
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white">After Optimisation</span>
                  <span className="text-white">$9,375/mo</span>
                </div>
                <div className="h-8 bg-white bg-opacity-20 rounded">
                  <div 
                    className="h-full bg-growthiq-electric-blue rounded"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-growthiq-electric-blue text-xl font-semibold">
                  25% Average Cost Reduction
                </p>
                <p className="text-white text-sm italic">
                  Example: While maintaining or improving performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide10;
