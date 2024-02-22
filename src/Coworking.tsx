import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

const imgPaths = [
  '/images/coCarousel1.JPG',
  '/images/coCarousel2.JPG',
  '/images/coCarousel3.JPG',
  '/images/coCarousel4.JPG',
  '/images/coCarousel5.JPG',
  '/images/coCarousel6.JPG',
]

const articlePaths = [
  '/images/article1.jpeg',
  '/images/article2.jpeg',
  '/images/article3.jpg',
]

const Coworking = () => {

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
    })
    gsap.from('.fade-up', {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.07,
      ease: 'power2.out',
      delay: 0.5,
    })
    gsap.from('.fade-up-trigger', {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.07,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.offre'
    })
    gsap.from('.fade-left', {
      opacity: 0,
      x: -100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.appart-ct'
    })
    gsap.from('.fade-right', {
      opacity: 0,
      x: 100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.appart-ct'
    })
  }, { scope: container })

  return (
    <div className="w-full flex flex-col lg:items-center mx-auto px-4 lg:px-0 2xl:max-w-[1440px] overflow-hidden" ref={container}>
      <Navbar />

      <img src="/images/coWorkingHero.png" alt="coworking espace" className="fade-in mt-16" />
      <div className="relative">
        <h1 className="fade-in text-[24px] lg:text-[48px] font-bold mt-8">Espace Co-<br/>Working</h1>
        <img src="/images/Soft Star.svg" alt="star" className="fade-in w-8 h-8 absolute right-48 lg:right-12 -bottom-0 lg:-bottom-4" />
      </div>
      <img src="/images/coworkingIllu.png" alt="coworking espace" className="fade-up -translate-y-36 hidden lg:inline" />

      <p className="fade-up text-[16px] lg:text-[24px] lg:w-9/12 mb-12 mt-3 lg:mt-0 lg:-translate-y-16">Rejoignez notre espace de co-working au cœur de Tanger. Afinidades vous offre un environnement stimulant, propice à la créativité et à la collaboration.<br /><br/>Rejoignez notre communauté de professionnels aujourd'hui et partagez vos idées dans un espace moderne et inspirant.</p>
      <img src="/images/Dawn.png" alt="dawn" className="absolute left-0 bottom-0 -z-10 opacity-35" />

      <Carousel images={imgPaths} />

      <div className="offre lg:w-11/12 rounded-3xl lg:rounded-[60px] my-12 lg:my-32 lg:mb-20 mt-20 p-6 lg:p-20 pt-16 flex flex-col gap-x-10 bg-gradient">
        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-6">
          <div className="flex flex-col lg:w-2/3 gap-y-4">
            <h2 className="fade-up-trigger font-bold text-[24px] lg:text-[48px] lg:p-5">Nos espaces co-working vous offre egalement</h2>
            <div className="py-6 px-6 lg:px-12 flex flex-col lg:flex-row gap-y-4 lg:gap-x-6 border-2 border-primary rounded-3xl lg:rounded-[45px] items-center justify-between">
              <h3 className="fade-up-trigger text-[18px] lg:text-[32px] font-bold">01- Productivité accrue</h3>
              <div className="w-2/3 lg:w-[1px] bg-slate-500 h-[1px] lg:h-2/3" />
              <p className="fade-up-trigger text-[14px] lg:text-[20px]">Grâce à des espaces de travail dédiés, à Internet haute vitesse et à l’accès à des équipements tels que l’impression, les individus peuvent travailler efficacement sur leurs projets.</p>
            </div>
          </div>

          <div className="lg:hidden py-6 px-6 lg:px-12 flex flex-col lg:flex-row gap-y-4 lg:gap-x-6 bg-primary text-white rounded-3xl lg:rounded-[45px] items-center justify-between">
            <h3 className="fade-up-trigger text-[18px] lg:text-[32px] font-bold">03 - Des opportunités de networking</h3>
            <div className="fade-up-trigger w-2/3 lg:w-[1px] bg-slate-500 h-[1px] lg:h-2/3" />
            <p className="fade-up-trigger text-[14px] lg:text-[20px]">Dans les espaces de coworking, où l'on peut se connecter et collaborer avec des professionnels de différentes industries.</p>
          </div>

          <div className="lg:w-1/3 py-6 px-6 lg:px-12  flex flex-col gap-y-4 lg:gap-y-6 border-2 border-primary rounded-3xl lg:rounded-[45px]">
            <h3 className="fade-right text-[18px] lg:text-[32px] font-bold">02- Rentabilité</h3>
            <div className="fade-right w-2/3 lg:w-2/3 bg-slate-500 h-[1px] lg:h-[1px]" />
            <p className="fade-right text-[14px] lg:text-[20px]">Avec les frais d’adhésion tout compris, vous pouvez accéder à des espaces de travail professionnels, à des équipements et à des services de soutien sans les frais généraux de l’entretien de leur propre espace de bureau.</p>
          </div>
        </div>
        <div className="hidden lg:flex py-6 px-6 lg:px-12 mt-6 flex-col lg:flex-row gap-x-6 bg-primary text-white rounded-3xl lg:rounded-[45px] items-center justify-between">
          <h3 className="text-[18px] lg:text-[32px] font-bold">03 - Des opportunités de networking</h3>
          <div className="w-2/3 lg:w-[1px] bg-slate-500 h-[1px] lg:h-2/3" />
          <p className="text-[14px] lg:text-[20px]">Dans les espaces de coworking, où l'on peut se connecter et collaborer avec des professionnels de différentes industries.</p>
        </div>
      </div>

      <div className="w-full flex flex-col px-6 lg:px-24 gap-y-6 mb-12">
        <h2 className="fade-up-trigger font-bold text-[24px] lg:text-[48px] lg:p-5">La Press Parle de Nous</h2>

        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly gap-y-3 lg:gap-x-4 lg:px-12">
          {
            articlePaths.map((item, i) => (
              <div className="bg-slate-200 rounded-3xl p-4 lg:p-8">
                <img src={item} alt="coworking tanger" className=" rounded-3xl w-[300px] lg:w-auto lg:h-[300px]" />
              </div>
            ))
          }
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Coworking