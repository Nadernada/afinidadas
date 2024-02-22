import { Link } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

const Formation = () => {

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
      scrollTrigger: '.advantages'
    })
    gsap.from('.fade-up-reviews', {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.07,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.advantages'
    })
    gsap.from('.fade-left', {
      opacity: 0,
      x: -100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
    })
    gsap.from('.fade-right', {
      opacity: 0,
      x: 100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
    })
    gsap.from('.fade-left-faq', {
      opacity: 0,
      x: -100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.faq-trigger'
    })
    gsap.from('.fade-right-faq', {
      opacity: 0,
      x: 100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.faq-trigger'
    })
  }, { scope: container })

  return (
    <div className="w-full flex flex-col lg:items-center 2xl:w-[1440px] mx-auto" ref={container}>
      <Navbar />

      <div className="flex flex-col gap-y-4 px-6 lg:px-36 mt-6 lg:mt-16 justify-start items-start relative">
        <img src="/images/Dawn.png" alt="dawn" className="absolute left-0 top-[45%] -z-10 opacity-35" />
        <h1 className="fade-in text-[24px] lg:text-[64px] font-bold">Besoin de <span className="text-bluey">perfectionner</span> vos compétences professionnelles ?</h1>
        <p className="fade-in text-[16px] lg:text-[24px] w-10/12">Afinidades propose des programmes de formation sur mesure adaptés à vos besoins spécifiques. Investissez dans votre développement personnel et professionnel avec nos cours de qualité.</p>
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-8 lg:mt-10 self-end order-first lg:order-none">
          <div className="flex flex-col gap-y-6 justify-center items-center">
            <img src="/images/grayStar.svg" alt="star" className="fade-right hidden lg:inline w-[122px] h-[122px] translate-y-12" />
            <div className="fade-left hidden lg:flex rounded-[35px] border-[8px] border-bluey flex-col p-4 mt-auto">
              <p className="fade-left text-[40px] font-bold">+450</p>
              <p className="fade-left text-[24px]">Personnes<br /> Satisfaites</p>
            </div>
          </div>
          <div className="relative flex-1">
            <img src="/images/formationHero.png" alt="formation sur mesure tanger" className="fade-right w-[845px]" />
            <Link to={'/contact'} className="fade-left rounded-full bg-orangey w-4/12 px-4 py-2 lg:py-8 flex items-center justify-center absolute bottom-1 lg:bottom-8 right-3 lg:right-6">
              <p className="text-white text-[12px] lg:text-[24px] font-semibold">Contactez-nous</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="advantages lg:w-11/12 rounded-[60px]  mt-12 lg:mt-32 p-6 lg:p-16 py-16  flex flex-col lg:flex-row gap-x-10 bg-gradient">
        <div className="fade-up-trigger flex flex-col gap-y-6">
          <div className="p-5 lg:p-6 flex flex-col lg:flex-row gap-y-4 lg:gap-x-6 border-2 border-primary rounded-3xl lg:rounded-[45px] lg:items-center justify-between">
            <h3 className="text-[20px] lg:text-[32px] font-bold">01- La flexibilité</h3>
            <div className="w-2/3 lg:w-[1px] bg-slate-500 h-[1px] lg:h-2/3" />
            <p className="text-[16px]">Des bureaux privés élégants et fonctionnels vous attendent chez Afinidades.</p>
          </div>
          <div className="p-5 lg:p-6 flex flex-col lg:flex-row gap-y-4 lg:gap-x-6 bg-primary text-white rounded-3xl lg:rounded-[45px] lg:items-center justify-between">
            <h3 className="text-[20px] lg:text-[32px] font-bold">02- Focalisation</h3>
            <div className="w-2/3 lg:w-[1px] bg-slate-100 h-[1px] lg:h-2/3" />
            <p className="text-[16px]">En mettant l'accent sur les compétences et les aptitudes les plus pertinentes pour atteindre vos objectifs professionnels</p>
          </div>
          <div className="p-5 lg:p-6 flex flex-col lg:flex-row gap-y-4 lg:gap-x-6 border-2 border-primary rounded-3xl lg:rounded-[45px] lg:items-center justify-between">
            <h3 className="text-[20px] lg:text-[32px] font-bold">03- Engagement & motivation</h3>
            <div className="w-2/3 lg:w-[1px] bg-slate-500 h-[1px] lg:h-2/3" />
            <p className="text-[16px]">En adaptant l'expérience d'apprentissage en fonction de vos intérêts, de vos points forts et de vos objectifs de carrière.</p>
          </div>
        </div>
        <div className="fade-up-trigger flex flex-col lg:translate-y-6 mb-4 lg:mb-0 order-first lg:order-none">
          <h2 className="font-bold text-[24px] lg:text-[48px]">Avantages D'une Formation Sur Mesure</h2>
          <div className="flex flex-row items-center lg:-translate-y-12 ms-auto">
            <img src="/images/SpiralFormation.png" alt="spiral" className="hidden lg:inline" />
            <img src="/images/formationIllu.png" alt="formation sur mesure tanger" className="hidden lg:inline h-[346px] w-[346px]" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col px-6 lg:px-36 mt-12 lg:mt-48 mb-12 lg:mb-0">
        <h2 className="fade-up-reviews capitalize font-bold text-[24px] lg:text-[40px] lg:w-1/2">des commentaires qui<br /> nous font honneur</h2>
        <img src="/images/reviewsSphere.svg" alt="reviews" className="fade-up-reviews lg:w-[1041px] lg:h-[842px] w-full mx-auto lg:-translate-y-28 translate-x-3 lg:translate-x-12 scale-150 lg:scale-100" />
      </div>

      <div className="faq-trigger w-full flex flex-col relative bg-slate-100 px-6 lg:px-60 py-16 my-12 lg:mt-0">
        <h3 className="fade-right-faq font-bold text-[24px] lg:text-[38px] mb-8">FAQs</h3>
        <details open>
          <summary className="fade-left-faq font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
            Qu’est-ce qu’une formation sur mesure?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          La formation sur mesure, aussi appelée formation personnalisée, fait référence à des programmes d’apprentissage personnalisés conçus pour répondre aux besoins et aux objectifs particuliers des personnes ou des organisations.
          </p>
        </details>
        <details>
          <summary className="fade-left-faq font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Quels sont les avantages d’une formation sur mesure?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          La formation sur mesure, aussi appelée formation personnalisée, fait référence à des programmes d’apprentissage personnalisés conçus pour répondre aux besoins et aux objectifs particuliers des personnes ou des organisations.
          </p>
        </details>
        <details>
          <summary className="fade-left-faq font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Comment personnaliser les programmes de formation?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          La formation sur mesure, aussi appelée formation personnalisée, fait référence à des programmes d’apprentissage personnalisés conçus pour répondre aux besoins et aux objectifs particuliers des personnes ou des organisations.
          </p>
        </details>
        <details>
          <summary className="fade-left-faq font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
            Qui peut bénéficier d’une formation sur mesure?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          La formation sur mesure, aussi appelée formation personnalisée, fait référence à des programmes d’apprentissage personnalisés conçus pour répondre aux besoins et aux objectifs particuliers des personnes ou des organisations.
          </p>
        </details>
        <details>
          <summary className="fade-left-faq font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
            Comment puis-je commencer une formation sur mesure?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          La formation sur mesure, aussi appelée formation personnalisée, fait référence à des programmes d’apprentissage personnalisés conçus pour répondre aux besoins et aux objectifs particuliers des personnes ou des organisations.
          </p>
        </details>
      </div>

      <Footer />

      <ScrollToTop />
    </div>
  )
}

export default Formation