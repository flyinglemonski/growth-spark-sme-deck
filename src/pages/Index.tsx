
import SlideContainer from '@/components/SlideContainer';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`min-h-screen bg-growthiq-deep-navy py-4 ${isMobile ? 'px-2' : 'py-8'}`}>
      <div className="container mx-auto px-2 md:px-4">
        <SlideContainer />
      </div>
    </div>
  );
};

export default Index;
