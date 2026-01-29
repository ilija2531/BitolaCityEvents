import BounceCards from './components/BounceCards/BounceCards'
import Header from './components/Header'

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
  return (
      <main className="min-h-screen bg-linear-to-b from-indigo-600 via-indigo-500 to-purple-600 overflow-hidden relative">
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

       
        <div className="relative z-10 flex flex-col h-screen">
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
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-purple-300 to-transparent"></div>
      </main>
  )
}
