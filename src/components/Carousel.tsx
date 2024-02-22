import { useRef, useState } from 'react';


function Carousel({images, className}: {images: any, className?: string}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const image = useRef(null)

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
    if (diff > 10) {
      goToNextSlide();
    } else if (diff < -10) {
      goToPrevSlide();
    }
    touchStartX = null;
  };
  
  // @ts-ignore
  let touchStartX = null;

  return (
    <div className='w-full flex flex-col items-center'>
      <div className={`w-full flex flex-row justify-center items-center gap-x-3 lg:w-10/12 touch-auto ${className}`}>
        <div className="hidden lg:inline prev-div w-4 h-4 cursor-pointer" onClick={goToPrevSlide}>
          <img src='/images/right-arrow.svg' alt='chevron' width={25} height={25} className='max-w-5 text-primary rotate-180' />
        </div>
        <div
          key={Math.random()}
          className=" relative w-full justify-center"
        >
          <img src={images[currentIndex]} className='md:w-full w-full lg:h-[650px] rounded-3xl lg:rounded-[60px] touch-pan-x z-30' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} ref={image}/>

        </div>
        <div className="hidden lg:inline next-div w-4 h-4 cursor-pointer" onClick={goToNextSlide} >
          <img src='/images/right-arrow.svg' alt='chevron' width={25} height={25} className='max-w-5 text-primary' />
        </div>
      </div>
      <div className='flex flex-row justify-center items-center gap-x-2 mt-6'>
        {
          images.map((blog: string, i: number) => (
            <div key={blog} className={`w-2 h-2 rounded-full ${i == currentIndex ? 'bg-slate-700' : 'bg-slate-200'}`} />
          ))
        }
      </div>
    </div>
  );
}

export default Carousel;
