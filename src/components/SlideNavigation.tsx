
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  return (
    <div className="flex items-center justify-between w-full max-w-xl mx-auto mt-6 px-4">
      <Button 
        variant="outline" 
        size="icon" 
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="border-growthiq-primary-blue text-growthiq-primary-blue"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <div className="flex items-center space-x-2">
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
      
      <Button 
        variant="outline" 
        size="icon"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="border-growthiq-primary-blue text-growthiq-primary-blue"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default SlideNavigation;
