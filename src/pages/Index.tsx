
import React from 'react';
import CustomBackground from '@/components/CustomBackground';
import WeddingHeader from '@/components/WeddingHeader';
import KazakhOrnament from '@/components/KazakhOrnament';
import RSVPForm from '@/components/RSVPForm';
import PhotoGallery from '@/components/PhotoGallery';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <CustomBackground>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-10 shadow-lg border border-kazakh-gold/20">
        <WeddingHeader 
          brideNameKz="Жансая"
          groomNameKz="Адай"
          brideNameRu="Жансая"
          groomNameRu="Адай"
          date="..."
          venue="Ресторан '...'"
          time="..."
        />
        
        <KazakhOrnament />
        
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl md:text-3xl font-dancing text-kazakh-blue mb-4">Дорогие гости!</h2>
          <p className="mb-3 text-sm md:text-base text-kazakh-darkBlue">Мы рады пригласить вас на торжество по случаю нашего бракосочетания.</p>
          <p className="mb-3 text-sm md:text-base text-kazakh-darkBlue">Будем счастливы разделить с вами этот особенный день.</p>
          <p className="font-medium text-kazakh-blue text-sm md:text-base">С уважением, Жансая и Адай</p>
        </div>
        
        <KazakhOrnament />
        
        <PhotoGallery />
        
        <KazakhOrnament />
        
        <div className="py-4">
          <RSVPForm />
        </div>
      </div>
    </CustomBackground>
  );
};

export default Index;
