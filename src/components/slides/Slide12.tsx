
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import { Mail, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

const Slide12: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  const isMobile = useIsMobile();
  
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content flex flex-col">
        <Logo className="self-start mb-8 fade-in-up" />
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-6 sm:mb-14 text-center fade-in-up stagger-1">
            Ready to scale smarter?
          </h2>
          
          <div className="flex flex-col items-center mb-6 sm:mb-10 fade-in-up stagger-3">
            <div className="bg-white p-4 sm:p-6 rounded-lg mb-4">
              <img 
                src="/lovable-uploads/1703e44e-de26-41d4-80d2-a82fc0ed9a39.png" 
                alt="GrowthIQ QR Code" 
                className={`${isMobile ? 'h-24 w-24' : 'h-32 w-32'}`}
              />
            </div>
            <p className="text-white text-sm">Scan to visit our website</p>
          </div>
        </div>
        
        <div className={`${isMobile ? 'flex flex-col gap-3' : 'flex justify-between items-center'} border-t border-growthiq-electric-blue pt-4 fade-in-up stagger-4`}>
          <Logo className={isMobile ? 'mb-3' : ''} />
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center text-white">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm">team@growthiq.ae</span>
            </div>
            <div className="flex items-center text-white">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">+971 58 901 4443</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide12;
