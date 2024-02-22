import { useState } from 'react';
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"


function Carousel({images, className}: {images: any, className?: string}) {

  const container = useRef(null)

  useGSAP(() => {

    gsap.registerPlugin(ScrollTrigger)


    gsap.from('.fade-left', {
      opacity: 0,
      x: -100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.carousel-ct'
    })
    gsap.from('.fade-right', {
      opacity: 0,
      x: 100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.carousel-ct'
    })
    gsap.from('.fade-in', {
      opacity: 0,
      scale: 0.5,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.carousel-ct'
    })
  }, { scope: container })

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleTouchStart = (e: any) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: any) => {
    // @ts-ignore
    if (!touchStartX) return;
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      goToNextSlide();
    } else if (diff < -50) {
      goToPrevSlide();
    }
    touchStartX = null;
  };
  
  // @ts-ignore
  let touchStartX = null;

  return (
    <>
      <div className={`carousel-ct flex flex-row justify-center items-center gap-x-3 lg:w-10/12 ${className}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div className="hidden lg:inline prev-div w-4 h-4 cursor-pointer" onClick={goToPrevSlide}>
        <img src='/images/right-arrow.svg' alt='chevron' width={25} height={25} className='fade-in max-w-5 text-primary rotate-180' />
      </div>
      <div
        key={Math.random()}
        className="fade-left relative w-full justify-center"
      >
        <img src={images[currentIndex]} className='md:w-full w-full lg:h-[650px] rounded-3xl lg:rounded-[60px]' loading='lazy'/>

      </div>
      <div className="hidden lg:inline next-div w-4 h-4 cursor-pointer" onClick={goToNextSlide}>
        <img src='/images/right-arrow.svg' alt='chevron' width={25} height={25} className='fade-in max-w-5 text-primary' />
      </div>
    </div>
    <div className='flex flex-row justify-center items-center gap-x-2 mt-6'>
      {
        images.map((blog: string, i: number) => (
          <div key={blog} className={`fade-right w-2 h-2 rounded-full ${i == currentIndex ? 'bg-slate-700' : 'bg-slate-200'}`} />
        ))
      }
    </div>
    </>
  );
}

export default Carousel;
