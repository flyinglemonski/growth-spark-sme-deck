
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

const Slide12: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content flex flex-col">
        <Logo className="self-start mb-8 fade-in-up" size="small" />
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-growthiq-primary-blue mb-10 text-center fade-in-up stagger-1">
            Ready to scale smarter?
          </h2>
          
          <Button 
            className="bg-growthiq-primary-blue text-white px-8 py-6 text-xl hover:bg-growthiq-electric-blue transition-colors mb-14 fade-in-up stagger-2"
          >
            Book Your Free Discovery Call
          </Button>
          
          <div className="flex flex-col items-center mb-10 fade-in-up stagger-3">
            <div className="bg-white p-6 rounded-lg mb-4">
              <div className="h-32 w-32 bg-growthiq-deep-navy flex items-center justify-center rounded">
                <p className="text-white text-xs text-center">
                  QR code to<br />
                  growthiq.ae
                </p>
              </div>
            </div>
            <p className="text-white text-sm">Scan to visit our website</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center border-t border-growthiq-electric-blue pt-4 fade-in-up stagger-4">
          <Logo size="small" />
          
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
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
