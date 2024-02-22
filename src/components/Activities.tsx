import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Activities = () => {

  const [isActive, setIsActive] = useState(0)
  const container = useRef(null)

  useGSAP(() => {

    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.fade-in', {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      stagger: 0.07,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.activities-ct',
    })
    gsap.from('.fade-left', {
      opacity: 0,
      x: -100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.activities-ct'
    })
    gsap.from('.fade-right', {
      opacity: 0,
      x: 100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.activities-ct'
    })
  }, { scope: container })

  const handleNext = () => {
    isActive === 0 ? setIsActive(1) : setIsActive(0)
  }

  useEffect(() => {
    setTimeout(() => {
      isActive===0 ? setIsActive(1) : setIsActive(0)
    }, 5000)
  },[isActive])

  return (
    <div className="flex flex-row items-center mt-8 lg:mt-0" ref={container}>

      <div className="fade-in ps-20 hidden lg:inline">
        <img src="/images/right-arrow.svg" alt="arrow" className="w-10 h-10 translate-y-28 cursor-pointer rotate-180" onClick={handleNext} />
      </div>

      <div className="activities-ct flex flex-col gap-y-6 lg:gap-y-12 px-10 transition-all">
          <div className="flex flex-row w-full gap-x-2 items-center justify-start lg:ps-12">
            <h1 className="fade-in text-[24px] lg:text-[64px] font-bold uppercase">Ameliorer votre business</h1>
            <img src="/images/redirectArrowBlue.svg" alt="arrow" className="fade-in w-[55px] lg:w-[75px] h-[55px] lg:h-[55px]" />
          </div>

          {
            isActive === 0 ? (
              <div className="fade-left w-full flex flex-col lg:flex-row gap-y-6 lg:gap-x-8 items-center justify-center">
                <div className="relative h-full">
                  <div className="absolute top-0 lg:left-12 rounded-ee-[40px] flex justify-center items-center p-6">
                    <h2 className="uppercase text-[24px] lg:text-[40px] font-bold">teambuilding</h2>
                  </div>
                  <img src="/images/teamBuilding.png" alt="teambuilding activities" className="rounded-[30px] w-full aspect-auto" />
                </div>
                <div className="flex flex-col gap-y-4 lg:w-6/12">
                  <div className="flex flex-row justify-between gap-x-2">
                    <Link to={'/teambuilding'} className="rounded-full bg-bluey w-7/12 p-3 flex items-center justify-center">
                      <p className="text-white text-[20px] lg:text-[32px] font-semibold">Decouvrir &gt;</p>
                    </Link>
                    <div className="rounded-full flex-1 p-3 bg-slate-300 flex justify-center items-center">
                      <p className="text-[24px] lg:text-[48px] font-bold text-white">01</p>
                    </div>
                  </div>
                  <div className="rounded-[35px] bg-orangey p-10">
                    <p className="text-[16px] lg:text-[20px] text-white">Favorisez la cohésion d'équipe et la collaboration au sein de votre entreprise grâce à nos activités de teambuilding uniques.</p>
                  </div>
                  <div className="flex flex-row gap-x-10">
                    <img src="/images/zigzag.svg" alt="zigzag" className="hidden lg:inline"/>
                    <div className="rounded-[35px] p-8 bg-slate-300">
                      <p className="text-[16px] lg:text-[20px]">Des expériences mémorables pour renforcer les liens entre vos collaborateurs</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              //@ts-ignore
              <div className="fade-right w-full flex flex-col lg:flex-row gap-y-6 lg:gap-x-8 items-center justify-center">
                <div className="relative h-full">
                  <div className="absolute top-0 lg:left-12 rounded-ee-[40px] flex justify-center items-center p-6">
                    <h2 className="uppercase text-[24px] lg:text-[40px] font-bold">Formation</h2>
                  </div>
                  <img src="/images/formation.png" alt="teambuilding activities" className="rounded-[30px] w-full aspect-auto" loading="lazy" />
                </div>
                <div className="flex flex-col gap-y-4 lg:w-6/12">
                  <div className="flex flex-row justify-between gap-x-2">
                    <Link to={'/formation'} className="rounded-full bg-orangey w-7/12 p-3 flex items-center justify-center">
                      <p className="text-white text-[20px] lg:text-[32px] font-semibold">Decouvrir &gt;</p>
                    </Link>
                    <div className="rounded-full flex-1 p-3 bg-slate-300 flex justify-center items-center">
                      <p className="text-[24px] lg:text-[48px] font-bold text-white">02</p>
                    </div>
                  </div>
                  <div className="rounded-[35px] bg-bluey p-10">
                    <p className="text-[16px] lg:text-[20px] text-white">En mettant l'accent sur les compétences et les aptitudes les plus pertinentes pour atteindre vos objectifs professionnels.</p>
                  </div>
                  <div className="flex flex-row gap-x-10">
                    <img src="/images/zigzag.svg" alt="zigzag" className="hidden lg:inline"/>
                    <div className="rounded-[35px] p-8 bg-slate-300">
                      <p className="text-[18px]">Afinidades propose des programmes de formation sur mesure adaptés à vos besoins spécifiques.</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }

          <div className="fade-in flex flex-row justify-center gap-x-3">
            <div className={`w-12 lg:w-36 h-1 lg:h-[10px] ${isActive === 1 ? 'bg-gray-300' : 'bg-gray-600'} rounded-lg cursor-pointer`} onClick={handleNext} />
            <div className={`w-12 lg:w-36 h-1 lg:h-[10px] ${isActive === 0 ? 'bg-gray-300' : 'bg-gray-600'} rounded-lg cursor-pointer`} onClick={handleNext} />
          </div>
      </div>
      <div className="fade-in pe-20 hidden lg:inline">
        <img src="/images/right-arrow.svg" alt="arrow" className="w-10 h-10 translate-y-28 cursor-pointer" onClick={handleNext} />
      </div>
    </div>
  )
}

export default Activities