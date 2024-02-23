import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import gsap from "gsap"
import  { useGSAP } from '@gsap/react'
import { useRef } from "react"

const Hero = () => {

  const container = useRef(null)

  useGSAP(() => {
    gsap.from('.fade-up', {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: 'power2.out'
    })
    gsap.from('.fade-left', {
      x: -100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      delay: 0.1,
      ease: 'power2.out'
    })
    gsap.from('.fade-right', {
      x: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      delay: 0.1,
      ease: 'power2.out'
    })
  }, { scope: container })

  return (
    <div className="w-full flex flex-col gap-y-16 2xl:w-[1440px]" ref={container}>

      <Navbar />

      <div className="flex flex-col items-center justify-center lg:-translate-x-24">
        <h1 className="fade-up uppercase text-[28px] lg:text-[48px] font-black translate-x-14 lg:translate-x-0">LE DÉVELOPPEMENT <span className="text-orangey">PROFESSIONNEL</span></h1>
        <div className="flex flex-col items-start lg:translate-x-[50%] relative">
          <img src="/images/Soft Star.svg" alt="star" className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px] absolute right-4 lg:-right-6 -top-2 lg:-top-4" />
          <h1 className="fade-up uppercase text-[24px] lg:text-[48px] font-black">DANS LE CADRE <span className="text-bluey">IDÉAL</span></h1>
          <p className="fade-up w-2/3 text-[10px] lg:text-[16px]">Rejoignez notre espace de co-working au cœur de Tanger.</p>
        </div>
      </div>

      <div className="flex flex-row justify-between relative">
        <img src="/images/leftHeroImage.png" alt="espace coworking tanger" className="fade-left hidden lg:inline w-[600px]" />
        <img src="/images/rightSideDesk.png" alt="espace coworking tanger" className="fade-right w-auto lg:h-[362px]"/>
        <Link to={'/contact'} className="fade-left w-[75%] lg:w-[600px] absolute -bottom-24 lg:-bottom-8 left-0 flex flex-row justify-evenly items-center bg-bluey rounded-e-full font-semibold capitalize text-white text-[18px] p-4">
          {/* <p className="">Reserver Maintenant</p> */}
          <img src="/images/whiteStar.svg" alt="star" className="w-[20px] h-[20px] lg:w-[28px] lg:h-[28px]" />
          <p className="">Reserver Maintenant</p>
          <img src="/images/grayStar.svg" alt="star" className="hidden lg:inline absolute top-0 left-[550px] w-[100px] h-[100px]" />
        </Link>
      </div>
    </div>
  )
}

export default Hero