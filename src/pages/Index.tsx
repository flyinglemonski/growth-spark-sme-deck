
import SlideContainer from '@/components/SlideContainer';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`min-h-screen h-screen flex flex-col bg-growthiq-deep-navy ${isMobile ? 'py-2 px-1' : ''}`}>
      <div className="flex-1 flex items-center justify-center w-full h-full">
        <SlideContainer />
      </div>
    </div>
  );
};

export default Index;
