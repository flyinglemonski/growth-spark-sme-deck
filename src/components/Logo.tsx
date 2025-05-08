
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  // Make the logo consistently larger across all slides
  const dimensions = 'h-16 w-auto';
  
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
