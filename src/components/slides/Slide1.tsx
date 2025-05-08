
import React from 'react';
import SlideLayout from '../SlideLayout';
import Logo from '../Logo';

interface SlideProps {
  active: boolean;
  index: number;
  currentIndex: number;
}

const Slide1: React.FC<SlideProps> = ({ active, index, currentIndex }) => {
  return (
    <SlideLayout active={active} index={index} currentIndex={currentIndex}>
      <div className="slide-content flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {/* Logo moved to center above text and made larger */}
          <div className="mb-12">
            <Logo className="h-24 w-auto fade-in-up" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-4 fade-in-up stagger-2">
            Smarter SME <span className="highlight-box">GROWTH</span> — All In One Place
          </h1>
          
          <p className="text-xl md:text-2xl text-white fade-in-up stagger-3">
            Funding, hiring, marketing & strategy — all in one SME growth partner
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide1;
