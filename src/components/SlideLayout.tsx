
import React from 'react';
import { cn } from '@/lib/utils';

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
  active: boolean;
  index: number;
  currentIndex: number;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  children, 
  className, 
  active, 
  index, 
  currentIndex 
}) => {
  // Change the positioning logic to use opacity and visibility instead of transform
  const position = index === currentIndex ? 'slide-active' : 
                  index > currentIndex ? 'slide-next' : 'slide-prev';

  return (
    <div 
      className={cn(
        'slide navy-bg', 
        position,
        className
      )}
      style={{ 
        display: Math.abs(index - currentIndex) <= 1 ? 'block' : 'none' 
      }}
    >
      <div className="slide-content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
