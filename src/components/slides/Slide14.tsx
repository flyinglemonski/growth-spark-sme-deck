
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import { BarChart, FileBarChart, Briefcase, PiggyBank } from 'lucide-react';

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

const Slide14: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-6 fade-in-up" />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-3 fade-in-up stagger-1">
          Fractional CFO
        </h2>
        
        <p className="text-xl text-white mb-6 fade-in-up stagger-1">
          Strategic financial leadership without the full-time cost.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl text-growthiq-electric-blue mb-4 fade-in-up stagger-2">
              Why a Fractional CFO?
            </h3>
            
            <ul className="list-disc pl-5 space-y-3 text-white fade-in-up stagger-2">
              <li>
                <span className="font-semibold text-growthiq-electric-blue">Cost-effective:</span> Access C-level financial expertise at a fraction of a full-time salary.
              </li>
              <li>
                <span className="font-semibold text-growthiq-electric-blue">Scalable:</span> Adjust financial leadership to match your business growth stages.
              </li>
              <li>
                <span className="font-semibold text-growthiq-electric-blue">Objective:</span> Gain fresh perspective from experienced professionals with diverse industry exposure.
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 gap-3 fade-in-up stagger-3">
            <ServiceItem 
              icon={BarChart} 
              title="Financial Strategy" 
              description="Long-term planning and financial roadmapping"
            />
            
            <ServiceItem 
              icon={FileBarChart} 
              title="Cash Flow Management" 
              description="Optimising working capital and liquidity"
            />
            
            <ServiceItem 
              icon={Briefcase} 
              title="Investor Relations" 
              description="Preparation for funding rounds and reporting"
            />
            
            <ServiceItem 
              icon={PiggyBank} 
              title="Cost Optimisation" 
              description="Identifying savings without sacrificing growth"
            />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide14;
