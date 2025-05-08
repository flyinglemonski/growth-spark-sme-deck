
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface HandshakeProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Handshake: React.FC<HandshakeProps> = ({ 
  className = '', 
  size = 'medium' 
}) => {
  const isMobile = useIsMobile();
  
  // Adjust size based on mobile view
  const actualSize = isMobile ? 
    (size === 'large' ? 'medium' : size === 'medium' ? 'small' : 'small') : 
    size;
    
  const dimensions = actualSize === 'small' 
    ? 'h-16 sm:h-24 w-auto' 
    : actualSize === 'medium'
      ? 'h-32 sm:h-48 w-auto'
      : 'h-48 sm:h-72 w-auto';
  
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
