
import React from 'react';

interface LogoProps {
  className?: string;
  extraLarge?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', extraLarge = false }) => {
  // Increased standard dimensions and made extraLarge even larger
  const dimensions = extraLarge ? 'h-40 w-auto' : 'h-24 w-auto'; // Standard is now h-24 (was already updated)
  
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
