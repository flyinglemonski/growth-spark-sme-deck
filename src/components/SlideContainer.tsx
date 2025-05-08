
import React, { useState, useEffect } from 'react';
import SlideNavigation from './SlideNavigation';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
// Slide7 removed as it's a duplicate
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';
import Slide13 from './slides/Slide13';
import Slide14 from './slides/Slide14';
import { useIsMobile } from '@/hooks/use-mobile';
import { ScrollArea } from './ui/scroll-area';

const SlideContainer: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();
  const totalSlides = 13; // Total number of slides
  
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };
  
  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };
  
  const handleJumpTo = (index: number) => {
    setCurrentSlide(index);
  };

  // Reset scroll position when changing slides
  useEffect(() => {
    if (isMobile) {
      window.scrollTo(0, 0);
    }
  }, [currentSlide, isMobile]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrev();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        handleNext();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent all default touch events for mobile devices
  useEffect(() => {
    if (!isMobile) return;

    const preventDefaultTouch = (e: TouchEvent) => {
      e.preventDefault();
    };

    document.addEventListener('touchmove', preventDefaultTouch, { passive: false });
    document.addEventListener('touchstart', preventDefaultTouch, { passive: false });
    
    return () => {
      document.removeEventListener('touchmove', preventDefaultTouch);
      document.removeEventListener('touchstart', preventDefaultTouch);
    };
  }, [isMobile]);

  // For mobile, modified ScrollArea usage
  const SlideWrapper = isMobile ? ScrollArea : React.Fragment;
  const wrapperProps = isMobile ? { 
    className: "w-full h-full flex-1",
    // Completely disable all scrolling behavior
    style: { 
      overflowY: 'hidden', 
      overflowX: 'hidden',
      touchAction: 'none',
      pointerEvents: 'none' // Only allow interactions with navigation buttons
    }
  } : {};

  return (
    <div 
      className="flex flex-col h-full w-full relative"
      style={isMobile ? { touchAction: 'none' } : {}}
    >
      {/* Navigation positioned at top right with higher z-index to remain interactive */}
      <div className="absolute top-4 right-4 z-50" style={{ pointerEvents: 'auto' }}>
        <SlideNavigation 
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPrev={handlePrev}
          onNext={handleNext}
          onJumpTo={handleJumpTo}
        />
      </div>
      
      <SlideWrapper {...wrapperProps}>
        <div className={`slide-container ${isMobile ? 'mobile-slide-container' : 'fullscreen-slide-container'}`}>
          <Slide1 active={currentSlide === 0} index={0} currentIndex={currentSlide} />
          <Slide2 active={currentSlide === 1} index={1} currentIndex={currentSlide} />
          <Slide3 active={currentSlide === 2} index={2} currentIndex={currentSlide} />
          <Slide4 active={currentSlide === 3} index={3} currentIndex={currentSlide} />
          <Slide5 active={currentSlide === 4} index={4} currentIndex={currentSlide} />
          <Slide6 active={currentSlide === 5} index={5} currentIndex={currentSlide} />
          {/* Slide7 removed as it's a duplicate */}
          <Slide8 active={currentSlide === 6} index={6} currentIndex={currentSlide} />
          <Slide9 active={currentSlide === 7} index={7} currentIndex={currentSlide} />
          <Slide10 active={currentSlide === 8} index={8} currentIndex={currentSlide} />
          <Slide14 active={currentSlide === 9} index={9} currentIndex={currentSlide} />
          <Slide13 active={currentSlide === 10} index={10} currentIndex={currentSlide} />
          <Slide11 active={currentSlide === 11} index={11} currentIndex={currentSlide} /> {/* Why GrowthIQ moved to second-to-last */}
          <Slide12 active={currentSlide === 12} index={12} currentIndex={currentSlide} />
        </div>
      </SlideWrapper>
    </div>
  );
};

export default SlideContainer;
