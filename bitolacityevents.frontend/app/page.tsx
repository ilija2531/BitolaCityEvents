'use client';

import BounceCards from './components/BounceCards/BounceCards'
import Header from './components/Header'
import FactsCarousel from './components/FactsCarousel'
import { Separator } from '@/components/ui/separator';
import { useRef, useEffect, useState } from 'react';

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

const images = [
  '/images/bitola1.jpg',
  '/images/bitola2.jpg',
  '/images/bitola3.jpg',
  '/images/bitola4.jpg',
  '/images/bitola5.jpg'
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];


export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once the animation has triggered
          if (scrollRef.current) {
            observer.unobserve(scrollRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  return (
      <main className="min-h-screen bg-linear-to-b from-indigo-600 via-indigo-500 to-purple-500 relative">
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

       
        <div className="relative z-10 flex flex-col min-h-screen">
          <img src="/images/logo.png" alt="Bitolacity Events Logo" className="w-100 h-70 mt-10 object-cover items-center mx-auto" />
          <Header />
          <div className="flex-1 flex items-center justify-center">
            <BounceCards
              className="custom-bounceCards"
              images={images}
              containerWidth={500}
              containerHeight={250}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover={true}
            />
          </div>
         
          <Separator className="my-8 border-t  w-3/4 mx-auto" />
          
        <div className="w-full px-4 mb-8" ref={scrollRef}>
          <FactsCarousel isVisible={isVisible} />
        </div>
        
        </div>

        

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-indigo-300 to-transparent"></div>
      </main>
  )
}
