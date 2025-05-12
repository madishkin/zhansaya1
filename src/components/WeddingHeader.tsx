
import React from 'react';
import { Calendar, Heart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface WeddingHeaderProps {
  brideNameKz: string;
  groomNameKz: string;
  brideNameRu: string;
  groomNameRu: string;
  date: string;
  venue: string;
  time: string;
}

const WeddingHeader = ({ 
  brideNameKz, 
  groomNameKz, 
  brideNameRu, 
  groomNameRu, 
  date, 
  venue,
  time 
}: WeddingHeaderProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-center mb-8 md:mb-10">
      <h1 className="mb-4 md:mb-6">
        <span className="block text-2xl md:text-5xl font-dancing text-kazakh-blue mb-1 md:mb-2">
          {brideNameKz} <span className="text-kazakh-red">&</span> {groomNameKz}
        </span>
        <span className="block text-lg md:text-2xl font-montserrat text-kazakh-darkBlue">
          {brideNameRu} <Heart className="inline-block mx-1 text-kazakh-red h-3 w-3 md:h-4 md:w-4" /> {groomNameRu}
        </span>
      </h1>
      
      <div className="bg-kazakh-gold/10 p-3 md:p-6 rounded-lg border border-kazakh-gold/30 inline-block">
        <p className="flex items-center justify-center text-xs md:text-base mb-1 md:mb-2">
          <Calendar className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 text-kazakh-gold" /> {date}
        </p>
        <p className="font-montserrat font-semibold text-sm md:text-lg">{venue}</p>
        <p className="text-xs md:text-base">{time}</p>
      </div>
    </div>
  );
};

export default WeddingHeader;
