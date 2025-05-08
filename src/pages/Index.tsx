
import SlideContainer from '@/components/SlideContainer';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`min-h-screen bg-growthiq-deep-navy ${isMobile ? 'py-2 px-1' : 'py-8'}`}>
      <div className="container mx-auto px-1 md:px-4 h-full">
        <SlideContainer />
      </div>
    </div>
  );
};

export default Index;
