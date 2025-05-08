
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import { Banknote, Receipt, LineChart, CreditCard } from 'lucide-react';

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

const Slide5: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-6 fade-in-up" />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-3 fade-in-up stagger-1">
          SME Financing
        </h2>
        
        <p className="text-xl text-white mb-6 fade-in-up stagger-1">
          Fast, flexible capital — approved in days.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl text-growthiq-electric-blue mb-4 fade-in-up stagger-2">
              Financing Solutions
            </h3>
            
            <ul className="list-disc pl-5 space-y-3 text-white fade-in-up stagger-2">
              <li>
                <span className="font-semibold text-growthiq-electric-blue">Quick Access:</span> Receive funds in as little as 48 hours after approval.
              </li>
              <li>
                <span className="font-semibold text-growthiq-electric-blue">Flexible Terms:</span> Customised repayment structures that align with your cash flow.
              </li>
              <li>
                <span className="font-semibold text-growthiq-electric-blue">Minimal Documentation:</span> Streamlined application process with reduced paperwork.
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 gap-3 fade-in-up stagger-3">
            <ServiceItem 
              icon={Banknote} 
              title="Invoice Financing" 
              description="Unlock cash tied up in outstanding invoices"
            />
            
            <ServiceItem 
              icon={Receipt} 
              title="Short-Term Loans" 
              description="Bridge temporary cash flow gaps"
            />
            
            <ServiceItem 
              icon={LineChart} 
              title="Revenue-Based Financing" 
              description="Funding tied to your monthly revenue"
            />
            
            <ServiceItem 
              icon={CreditCard} 
              title="Credit Facilities" 
              description="Flexible line of credit for ongoing needs"
            />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide5;
