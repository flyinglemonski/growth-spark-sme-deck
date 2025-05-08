
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import { Banknote, Receipt, LineChart, CreditCard } from 'lucide-react';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

const ServiceItem = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center mb-4 fade-in-up stagger-2">
    <Icon className="h-5 w-5 text-growthiq-electric-blue mr-2" strokeWidth={2} />
    <span className="text-white">{title}</span>
  </div>
);

const Slide5: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-8 fade-in-up" />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-4 fade-in-up stagger-1">
          SME Financing
        </h2>
        
        <p className="text-xl text-white mb-8 fade-in-up stagger-1">
          Fast, flexible capital — approved in days.
        </p>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ServiceItem icon={Banknote} title="Invoice Financing" />
              <ServiceItem icon={Receipt} title="Short-Term Loans" />
              <ServiceItem icon={LineChart} title="Revenue-Based Financing" />
              <ServiceItem icon={CreditCard} title="Credit Facilities" />
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide5;
