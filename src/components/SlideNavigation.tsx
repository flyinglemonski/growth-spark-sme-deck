
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onJumpTo: (index: number) => void;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onJumpTo
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex items-center justify-between w-full max-w-xl mx-auto bg-black bg-opacity-40 backdrop-blur-sm rounded-full p-2">
      <Button 
        variant="outline" 
        size={isMobile ? "default" : "icon"}
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="border-growthiq-primary-blue text-growthiq-primary-blue bg-white bg-opacity-80 backdrop-blur-sm hover:bg-white hover:bg-opacity-100"
      >
        <ChevronLeft className={`${isMobile ? "h-5 w-5" : "h-4 w-4"}`} />
        {isMobile && <span className="ml-1 text-growthiq-primary-blue">Prev</span>}
      </Button>
      
      {!isMobile && (
        <div className="flex items-center space-x-2 overflow-x-auto py-2 px-1">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <Button 
              key={i}
              variant="outline"
              size="icon"
              className={`h-2 w-2 rounded-full p-0 ${
                i === currentSlide 
                  ? 'bg-growthiq-primary-blue border-growthiq-primary-blue' 
                  : 'bg-transparent border-growthiq-primary-blue'
              }`}
              onClick={() => onJumpTo(i)}
            />
          ))}
        </div>
      )}
      
      {/* On mobile, show current slide number with improved visibility */}
      {isMobile && (
        <div className="text-center text-white font-semibold px-4 py-1 rounded-full">
          {currentSlide + 1} / {totalSlides}
        </div>
      )}
      
      <Button 
        variant="outline" 
        size={isMobile ? "default" : "icon"}
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="border-growthiq-primary-blue text-growthiq-primary-blue bg-white bg-opacity-80 backdrop-blur-sm hover:bg-white hover:bg-opacity-100"
      >
        {isMobile && <span className="mr-1 text-growthiq-primary-blue">Next</span>}
        <ChevronRight className={`${isMobile ? "h-5 w-5" : "h-4 w-4"}`} />
      </Button>
    </div>
  );
};

export default SlideNavigation;
