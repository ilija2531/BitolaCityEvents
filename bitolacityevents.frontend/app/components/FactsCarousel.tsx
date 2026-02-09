'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  image: string;
  fact: string;
  alt: string;
}

interface FactsCarouselProps {
  isVisible: boolean;
}

const carouselItems: CarouselItem[] = [
  {
    image: '/images/bitola6.jpg',
    fact: 'Bitola is a city in Macedonia with a rich history and cultural heritage. Throughout the centuries, it has been influenced by various civilizations and has preserved its unique identity.',
    alt: 'Bitola streets'
  },
  {
    image: '/images/bitola7.jpg',
    fact: 'Known as the "City of Consuls," Bitola was home to 18 consulates in the early 1900s, making it a major center of international trade and diplomacy.',
    alt: 'Bitola architecture'
  },
  {
    image: '/images/bitola2.jpg',
    fact: 'Bitola has a long sporting tradition — home to clubs like FK Pelister, RK Pelister and hosts regional athletics and basketball events that bring the community together.',
    alt: 'Bitola sports'
  },
  {
    image: '/images/bitola8.jpg',
    fact: 'Bitola is famous for its vibrant bazaar and traditional crafts. Local artisans continue to create beautiful handmade goods using centuries-old techniques.',
    alt: 'Bitola bazaar'
  },
  {
    image: '/images/bitola4.jpg',
    fact: 'With its beautiful architecture, vibrant arts scene, and warm hospitality, Bitola offers a captivating experience for visitors seeking authentic cultural immersion.',
    alt: 'Bitola culture'
  },
  {
    image: '/images/bitola3.jpg',
    fact: 'The city celebrates numerous cultural festivals throughout the year, including the Bitola International Film Festival, attracting artists and film enthusiasts from around the world.',
    alt: 'Bitola festivals'
  }
];

const useTypeEffect = (text: string, isVisible: boolean, speed: number = 30) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!isVisible) {
      setDisplayedText('');
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isVisible, text, speed]);

  return displayedText;
};

const TypingText = ({ text, isVisible, speed }: { text: string; isVisible: boolean; speed?: number }) => {
  const displayedText = useTypeEffect(text, isVisible, speed);
  return <>{displayedText}</>;
};

export default function FactsCarousel({ isVisible }: FactsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const autoScrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const inactivityTimeout = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScroll || !isVisible) return;

    autoScrollTimeout.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => {
      if (autoScrollTimeout.current) {
        clearInterval(autoScrollTimeout.current);
      }
    };
  }, [autoScroll, isVisible]);

  // Reset auto-scroll on inactivity
  useEffect(() => {
    return () => {
      if (inactivityTimeout.current) {
        clearTimeout(inactivityTimeout.current);
      }
    };
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
    handleUserInteraction();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    handleUserInteraction();
  };

  const handleUserInteraction = () => {
    setAutoScroll(false);

    // Clear existing timeout
    if (inactivityTimeout.current) {
      clearTimeout(inactivityTimeout.current);
    }

    // Resume auto-scroll after 10 seconds of inactivity
    inactivityTimeout.current = setTimeout(() => {
      setAutoScroll(true);
    }, 10000);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    handleUserInteraction();
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <div className={`max-w-8xl mx-auto bg-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center transition-all duration-1000 ${
      isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10'
    }`}>
      {/* Image Section */}
      <div className={`md:w-1/2 w-full h-64 md:h-135 transition-all duration-5000 delay-100 relative overflow-hidden ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-10'
      }`}>
        <img
          src={currentItem.image}
          alt={currentItem.alt}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300 z-10"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 w-2 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Text Section */}
      <div className={`md:w-1/2 w-full p-8 text-white transition-all duration-1000 delay-200 flex items-center justify-center min-h-64 md:min-h-auto ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-10'
      }`}>
        <p className="text-2xl md:text-3xl leading-relaxed font-light">
          <TypingText
            text={currentItem.fact}
            isVisible={isVisible && currentIndex === currentIndex}
            speed={20}
          />
        </p>
      </div>
    </div>
  );
}
