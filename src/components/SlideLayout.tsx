
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
  // Determine slide position
  const position = active ? 'slide-active' : 
                  index > currentIndex ? 'slide-next' : 'slide-prev';

  return (
    <div 
      className={cn(
        'slide navy-bg', 
        position,
        className
      )}
      // Only render slides that are currently active or immediate neighbors
      style={{ 
        display: Math.abs(index - currentIndex) <= 1 ? 'block' : 'none',
        opacity: active ? 1 : 0
      }}
    >
      <div className="slide-content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
