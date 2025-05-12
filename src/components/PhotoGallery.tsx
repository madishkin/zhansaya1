
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';

interface Photo {
  src: string;
  alt: string;
}

// Примеры фотографий (можно заменить на реальные)
const weddingPhotos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1608322368735-b6b6ee1ff740?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Традиционная казахская свадьба"
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456503681?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Жених и невеста в национальных костюмах"
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Свадебный декор"
  },
  {
    src: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Счастливая пара"
  }
];

const PhotoGallery = () => {
  const isMobile = useIsMobile();

  return (
    <div className="my-8">
      <h2 className="text-2xl md:text-3xl font-dancing text-kazakh-blue mb-6 text-center">Наши фотографии</h2>
      
      <Carousel className="w-full max-w-md mx-auto">
        <CarouselContent>
          {weddingPhotos.map((photo, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="border-kazakh-gold/20 overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className="w-full h-60 md:h-80 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={`${isMobile ? "-left-2" : "-left-12"}`} />
        <CarouselNext className={`${isMobile ? "-right-2" : "-right-12"}`} />
      </Carousel>
      
      <p className="text-center text-sm text-kazakh-blue/70 mt-4">
        Пролистайте чтобы увидеть больше фотографий
      </p>
    </div>
  );
};

export default PhotoGallery;
