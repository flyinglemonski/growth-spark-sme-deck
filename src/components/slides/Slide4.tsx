
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import { 
  Banknote, PieChart, BarChart3, Users, BarChart, 
  LayoutGrid, CloudCog 
} from 'lucide-react';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  delay: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon: Icon, title, delay }) => (
  <div className={`flex flex-col items-center justify-center p-4 bg-opacity-10 bg-white rounded-lg fade-in-up ${delay}`}>
    <Icon className="h-8 w-8 text-growthiq-primary-blue mb-2" strokeWidth={2} />
    <p className="text-white text-center font-medium">{title}</p>
  </div>
);

const Slide4: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  const services = [
    { icon: Banknote, title: "SME Financing" },
    { icon: BarChart, title: "Marketing & Branding" },
    { icon: PieChart, title: "Accounting & Tax" },
    { icon: BarChart3, title: "Fractional CFO" },
    { icon: Users, title: "Sales Enablement" },
    { icon: LayoutGrid, title: "Recruitment" },
    { icon: CloudCog, title: "SaaS/Cloud Optimisation" },
  ];

  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-8 fade-in-up" />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-8 fade-in-up stagger-1">
          One Partner, Every Solution
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {services.map((service, idx) => (
            <ServiceItem 
              key={service.title}
              icon={service.icon}
              title={service.title}
              delay={`stagger-${(idx % 4) + 1}`}
            />
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide4;
