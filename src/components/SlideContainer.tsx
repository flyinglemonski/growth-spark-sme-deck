
import React, { useState } from 'react';
import SlideNavigation from './SlideNavigation';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';

const SlideContainer: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };
  
  const handleNext = () => {
    setCurrentSlide((prev) => (prev < 11 ? prev + 1 : prev));
  };
  
  const handleJumpTo = (index: number) => {
    setCurrentSlide(index);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
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

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="slide-container">
        <Slide1 active={currentSlide === 0} index={0} currentIndex={currentSlide} />
        <Slide2 active={currentSlide === 1} index={1} currentIndex={currentSlide} />
        <Slide3 active={currentSlide === 2} index={2} currentIndex={currentSlide} />
        <Slide4 active={currentSlide === 3} index={3} currentIndex={currentSlide} />
        <Slide5 active={currentSlide === 4} index={4} currentIndex={currentSlide} />
        <Slide6 active={currentSlide === 5} index={5} currentIndex={currentSlide} />
        <Slide7 active={currentSlide === 6} index={6} currentIndex={currentSlide} />
        <Slide8 active={currentSlide === 7} index={7} currentIndex={currentSlide} />
        <Slide9 active={currentSlide === 8} index={8} currentIndex={currentSlide} />
        <Slide10 active={currentSlide === 9} index={9} currentIndex={currentSlide} />
        <Slide11 active={currentSlide === 10} index={10} currentIndex={currentSlide} />
        <Slide12 active={currentSlide === 11} index={11} currentIndex={currentSlide} />
      </div>
      
      <SlideNavigation 
        currentSlide={currentSlide}
        totalSlides={12}
        onPrev={handlePrev}
        onNext={handleNext}
        onJumpTo={handleJumpTo}
      />
    </div>
  );
};

export default SlideContainer;
