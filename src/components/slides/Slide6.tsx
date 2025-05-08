
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import { Laptop } from 'lucide-react';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

const ServiceItem = ({ title, delay }: { title: string; delay: string }) => (
  <div className={`fade-in-up ${delay} flex items-center mb-3`}>
    <div className="h-2 w-2 rounded-full bg-growthiq-electric-blue mr-3"></div>
    <span className="text-white">{title}</span>
  </div>
);

const Slide6: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  const services = [
    "Branding",
    "Websites",
    "SEO",
    "Paid Ads",
    "Content",
    "Social Media",
    "Email"
  ];

  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content">
        <Logo className="self-start mb-8 fade-in-up" size="small" />
        
        <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-4 fade-in-up stagger-1">
          Marketing & Branding
        </h2>
        
        <p className="text-xl text-white mb-8 fade-in-up stagger-1">
          Marketing that drives revenue — not just likes.
        </p>
        
        <div className="flex flex-col md:flex-row gap-10 mt-4">
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((service, idx) => (
                <ServiceItem 
                  key={service} 
                  title={service} 
                  delay={`stagger-${(idx % 4) + 1}`} 
                />
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center items-center fade-in-up stagger-4">
            <div className="relative">
              <Laptop className="h-40 w-auto text-growthiq-primary-blue" strokeWidth={1.5} />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-xs text-white">
                  <div className="border-b border-growthiq-electric-blue mb-1 pb-1">
                    <span className="text-growthiq-electric-blue">↑ 137%</span> Website Traffic
                  </div>
                  <div>
                    <span className="text-growthiq-electric-blue">↑ 46%</span> Conversion Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-t-2 border-growthiq-primary-blue pt-2">
            <p className="text-growthiq-electric-blue text-lg font-medium">Strategy</p>
            <p className="text-white text-sm">Data-driven plans that target revenue growth</p>
          </div>
          <div className="border-t-2 border-growthiq-primary-blue pt-2">
            <p className="text-growthiq-electric-blue text-lg font-medium">Execution</p>
            <p className="text-white text-sm">End-to-end campaign management</p>
          </div>
          <div className="border-t-2 border-growthiq-primary-blue pt-2">
            <p className="text-growthiq-electric-blue text-lg font-medium">Analytics</p>
            <p className="text-white text-sm">ROI tracking & performance dashboards</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide6;
