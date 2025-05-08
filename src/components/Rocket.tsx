
import React from 'react';

interface RocketProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Rocket: React.FC<RocketProps> = ({ 
  className = '', 
  size = 'medium' 
}) => {
  const dimensions = size === 'small' 
    ? 'h-24 w-auto' 
    : size === 'medium'
      ? 'h-48 w-auto'
      : 'h-72 w-auto';
  
  return (
    <div className={`${dimensions} ${className}`}>
      <img 
        src="/lovable-uploads/23dd4773-11b2-4b09-b334-f2d5e64cf042.png" 
        alt="Rocket Launch" 
        className="h-full w-auto"
      />
    </div>
  );
};

export default Rocket;
