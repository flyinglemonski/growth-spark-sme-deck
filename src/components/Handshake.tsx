
import React from 'react';

interface HandshakeProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Handshake: React.FC<HandshakeProps> = ({ 
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
        src="/lovable-uploads/11b9f7ca-a2ed-4398-b495-836dc89faed2.png" 
        alt="Business Handshake" 
        className="h-full w-auto"
      />
    </div>
  );
};

export default Handshake;
