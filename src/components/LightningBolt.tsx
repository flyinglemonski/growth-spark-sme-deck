
import React from 'react';

interface LightningBoltProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const LightningBolt: React.FC<LightningBoltProps> = ({ 
  className = '', 
  size = 'medium' 
}) => {
  const dimensions = size === 'small' 
    ? 'h-16 w-auto' 
    : size === 'medium'
      ? 'h-32 w-auto'
      : 'h-48 w-auto';
  
  return (
    <div className={`${dimensions} ${className}`}>
      <img 
        src="/lovable-uploads/3cf23019-7c7b-4e1c-b85c-8230f2a59e6a.png" 
        alt="Lightning Bolt" 
        className="h-full w-auto"
      />
    </div>
  );
};

export default LightningBolt;
