'use client';

import BounceCards from './components/BounceCards/BounceCards'
import Header from './components/Header'
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

const TypingText = ({ text, isVisible }: { text: string; isVisible: boolean }) => {
  const displayedText = useTypeEffect(text, isVisible);
  return <>{displayedText}</>
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
          <div className={`max-w-8xl mx-auto bg-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <div className={`md:w-1/2 w-full h-64 md:h-auto transition-all duration-1000 delay-100 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}>
              <img src="/images/bitola6.jpg" alt="Bitola streets" className="w-2xl h-lg object-cover" />
            </div>
            <div className={`md:w-1/2 w-full p-8 text-white transition-all duration-1000 delay-200 flex items-center justify-center ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}>
              <p className="text-2xl md:text-3xl leading-relaxed font-light">
                <TypingText
                  text="Bitola is a city in Macedonia with a rich history and cultural heritage. Throughout the centuries, it has been influenced by various civilizations and has preserved its unique identity. With its beautiful architecture, vibrant arts scene, and warm hospitality, Bitola offers a captivating experience for visitors."
                  isVisible={isVisible}
                />
              </p>
            </div>
          </div>
        </div>
        
        </div>

        

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-indigo-300 to-transparent"></div>
      </main>
  )
}
