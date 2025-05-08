
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
  const position = index === currentIndex ? 'slide-active' : 
                   index > currentIndex ? 'slide-next' : 'slide-prev';

  return (
    <div className={cn(
      'slide navy-bg', 
      position,
      className
    )}>
      <div className="relative z-20 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
