
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
        'slide', 
        position,
        className
      )}
      style={{ 
        display: Math.abs(index - currentIndex) <= 1 ? 'block' : 'none',
        opacity: active ? 1 : 0,
        visibility: active ? 'visible' : 'hidden'
      }}
    >
      <div className="slide-content-wrapper navy-bg">
        <div className="slide-content-overlay"></div>
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
