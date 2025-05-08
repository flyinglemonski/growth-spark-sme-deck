
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'large';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'large' }) => {
  const dimensions = size === 'small' ? 'h-6 w-auto' : 'h-12 w-auto';
  
  return (
    <div className={`${dimensions} ${className}`}>
      <img 
        src="/lovable-uploads/60f5445e-35e7-4152-b19a-6191dadcf868.png" 
        alt="GrowthIQ Logo" 
        className="h-full w-auto"
      />
    </div>
  );
};

export default Logo;
