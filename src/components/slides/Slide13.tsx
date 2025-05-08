
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import { Calculator, FileSpreadsheet, FileCheck, PieChart } from 'lucide-react';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-opacity-10 bg-white p-5 rounded-lg">
    <div className="flex items-center gap-3 mb-2">
      <Icon className="h-5 w-5 text-growthiq-electric-blue" />
      <h4 className="text-growthiq-primary-blue font-medium">{title}</h4>
    </div>
    <p className="text-white text-sm">{description}</p>
  </div>
);

const Slide13: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-8 fade-in-up" />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-4 fade-in-up stagger-1">
          Accounting & Tax
        </h2>
        
        <p className="text-xl text-white mb-10 fade-in-up stagger-1">
          Financial clarity that powers smart decisions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6 fade-in-up stagger-2">
            <p className="text-white">
              Our accounting and tax services provide SMEs with the financial clarity and compliance they need to focus on growth and strategic decisions.
            </p>
            
            <div className="bg-opacity-10 bg-white p-5 rounded-lg">
              <h4 className="text-growthiq-electric-blue font-medium mb-2">Our Approach</h4>
              <p className="text-white text-sm">
                We believe in making accounting and tax simple, transparent, and valuable for your business. Our team works as an extension of your company, ensuring you're always compliant and financially informed.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 fade-in-up stagger-3">
            <ServiceItem 
              icon={Calculator} 
              title="Bookkeeping & Accounting" 
              description="End-to-end financial record management"
            />
            
            <ServiceItem 
              icon={FileSpreadsheet} 
              title="VAT & Tax Compliance" 
              description="Filing and advisory for all UAE tax requirements"
            />
            
            <ServiceItem 
              icon={FileCheck} 
              title="Financial Reporting" 
              description="Clear insights that guide business decisions"
            />
            
            <ServiceItem 
              icon={PieChart} 
              title="Budgeting & Forecasting" 
              description="Planning for sustainable growth and profitability"
            />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide13;
