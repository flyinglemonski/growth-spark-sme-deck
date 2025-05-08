
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
    <div className="flex items-center gap-2 bg-black bg-opacity-40 backdrop-blur-sm rounded-full p-1 z-50">
      <Button 
        variant="outline" 
        size="icon"
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="border-growthiq-primary-blue text-growthiq-primary-blue bg-white bg-opacity-80 backdrop-blur-sm hover:bg-white hover:bg-opacity-100 h-8 w-8 pointer-events-auto"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      {!isMobile && (
        <div className="text-white font-medium text-sm px-2">
          {currentSlide + 1} / {totalSlides}
        </div>
      )}
      
      {isMobile && (
        <div className="text-white font-medium text-xs px-1">
          {currentSlide + 1}/{totalSlides}
        </div>
      )}
      
      <Button 
        variant="outline" 
        size="icon"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="border-growthiq-primary-blue text-growthiq-primary-blue bg-white bg-opacity-80 backdrop-blur-sm hover:bg-white hover:bg-opacity-100 h-8 w-8 pointer-events-auto"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default SlideNavigation;
