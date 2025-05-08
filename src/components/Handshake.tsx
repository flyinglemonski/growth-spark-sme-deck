
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
    <div className={`${dimensions} ${className} overflow-hidden`}>
      <AspectRatio ratio={1} className="w-full h-full">
        <img 
          src="/lovable-uploads/11b9f7ca-a2ed-4398-b495-836dc89faed2.png" 
          alt="Business Handshake" 
          className="w-full h-full object-cover"
        />
      </AspectRatio>
    </div>
  );
};

export default Handshake;
