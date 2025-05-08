
import React from 'react';

interface LogoProps {
  className?: string;
  extraLarge?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', extraLarge = false }) => {
  // Base dimensions are maintained here, but can be overridden via className or extraLarge prop
  const dimensions = extraLarge ? 'h-80 w-auto' : 'h-16 w-auto';
  
  return (
    <div className={`${dimensions} ${className}`}>
      <img 
        src="/lovable-uploads/324b1370-3a82-4045-9047-d029a514ae2c.png" 
        alt="GrowthIQ Logo" 
        className="h-full w-auto"
      />
    </div>
  );
};

export default Logo;
