import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

const imgPaths = [
  '/images/rCarousel1.jpg',
  '/images/rCarousel2.jpg',
  '/images/rCarousel3.jpg',
]

const SalleReunion = () => {

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
    gsap.from('.fade-left', {
      opacity: 0,
      x: -100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.faq-trigger'
    })
    gsap.from('.fade-right', {
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
    <div className="w-full 2xl:max-w-[1440px] flex flex-col mx-auto lg:items-center" ref={container}>
      <Navbar />

      <img src="/images/reunion.svg" alt="salle de reunion espace" className="fade-in my-12 w-[90%] lg:w-[1065px] self-center" />

      <Carousel images={imgPaths} className="px-6" />

      <div className="advantages lg:w-11/12 lg:rounded-[60px] mt-20 lg:mt-28 p-10 lg:p-16 pt-16 flex flex-col bg-gradient-to-b from-orangey/15 from-5% to-transparent to-70% ">
        <h3 className="fade-up-trigger font-bold text-[24px] lg:text-[48px] capitalize">Quels sont les avantages<br/> de louer avec nous?</h3>

        <div className="flex flex-col gap-y-6 my-8 lg:p-3">
          <div className="fade-up-trigger p-6 lg:p-10 flex flex-col gap-y-3 border-2 border-primary rounded-3xl lg:rounded-[45px] items-start justify-between">
            <h3 className="fade-up-trigger text-[20px] lg:text-[32px] font-bold">Emplacement idéal</h3>
            <div className="h-[1px] bg-slate-500 w-2/3" />
            <p className="fade-up-trigger text-[16px]">Nos bureaux sont idéalement situés a Tanger, offrant un accès facile aux transports en commun, aux restaurants, aux commerces et à d'autres commodités. Avec un emplacement central, vous serez bien placé pour attirer des clients, des talents et des opportunités.</p>
          </div>
          <div className="fade-up-trigger p-6 lg:p-10 flex flex-col gap-y-3 bg-primary text-white rounded-3xl lg:rounded-[45px] items-start justify-between">
            <h3 className="fade-up-trigger text-[20px] lg:text-[32px] font-bold">Conditions flexibles</h3>
            <div className="h-[1px] bg-slate-100 w-2/3" />
            <p className="fade-up-trigger text-[16px]">Nous offrons des conditions de location flexibles pour répondre à l’évolution de vos besoins commerciaux. Que vous ayez besoin d’une location à court terme pour un projet ou d’un bail à long terme pour votre équipe en pleine croissance, nous avons des options pour adapter votre calendrier et votre budget.</p>
          </div>
          <div className="fade-up-trigger p-6 lg:p-10 flex flex-col gap-y-3 border-2 border-primary rounded-3xl lg:rounded-[45px] items-start justify-between">
            <h3 className="fade-up-trigger text-[20px] lg:text-[32px] font-bold">Assistance professionnelle</h3>
            <div className="h-[1px] bg-slate-500 w-2/3" />
            <p className="fade-up-trigger text-[16px]">Notre équipe dévouée est présente pour vous soutenir à chaque étape. De l’aide à l’emménagement et aux demandes d’entretien au soutien administratif et à la coordination d’événements, nous nous engageons à fournir un service exceptionnel à nos locataires.</p>
          </div>
        </div>
      </div>

      <div className="faq-trigger w-full flex flex-col relative bg-slate-100 px-6 lg:px-60 py-16 mb-12">
        <h3 className="fade-left font-bold text-[24px] lg:text-[38px] mb-8">FAQs</h3>
        <details open>
          <summary className="fade-right font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
            Quels types d’espaces de bureaux proposez-vous ?
          </summary>
          <p className="fade-right w-11/12 py-3 ps-3">
          Nous offrons une variété d’espaces de bureau pour répondre à différents besoins, y compris des bureaux privés, des espaces de coworking et des salles de réunion. Que vous soyez un entrepreneur solo ou une équipe grandissante, nous avons des options pour répondre à vos besoins.
          </p>
        </details>
        <details>
          <summary className="fade-right font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Quelles commodités sont incluses avec la location de bureau?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          Nos locations de bureaux comprennent une gamme d’équipements conçus pour améliorer votre expérience de travail. Ceux-ci peuvent inclure Internet haute vitesse, des installations d’impression et de numérisation, l’accès à la kitchenette et aux rafraîchissements, un accès sécurisé avec surveillance 24/7, et plus encore.
          </p>
        </details>
        <details>
          <summary className="fade-right font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Vos bureaux sont-ils meublés ?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          La formation sur mesure, aussi appelée formation personnalisée, fait référence à des programmes d’apprentissage personnalisés conçus pour répondre aux besoins et aux objectifs particuliers des personnes ou des organisations.
          </p>
        </details>
        <details>
          <summary className="fade-right font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Quelles conditions de location proposez-vous ?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          Non, nous croyons que chaque bureau devrait avoir un sens pour son propriétaire, donc, nous vous laissons avoir un contrôle total sur la décoration.
          </p>
        </details>
        <details>
          <summary className="fade-right font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Puis-je personnaliser l’espace de bureau selon mes préférences ?
          </summary>
          <p className="fade-right w-11/12 py-3 ps-3">
          Oui, nous comprenons que chaque entreprise est unique, et nous sommes heureux de travailler avec vous pour personnaliser l’espace de bureau pour répondre à vos besoins spécifiques. Que vous ayez besoin d’ajouter des meubles supplémentaires, de reconfigurer la disposition ou de personnaliser le décor, nous sommes là pour vous aider.
          </p>
        </details>
      </div>

      <Footer />

      <ScrollToTop />
    </div>
  )
}

export default SalleReunion