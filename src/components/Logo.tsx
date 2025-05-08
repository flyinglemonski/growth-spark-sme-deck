
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
        src="/lovable-uploads/324b1370-3a82-4045-9047-d029a514ae2c.png" 
        alt="GrowthIQ Logo" 
        className="h-full w-auto"
      />
    </div>
  );
};

export default Logo;
