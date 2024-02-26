import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

import blueStar from '../images/blueStar.svg'
import reviewsSphere from '../images/reviewsSphereHome.svg'

const review = [
  {
    name: 'Yasmina',
    at: '@yassbou',
    text: 'Ce n’est pas seulement un lieu de travail, mais une communauté de personnes partageant les mêmes idées'
  },
  {
    name: 'Sophie',
    at: '@sophiemoore',
    text: 'En tant que freelance, j’ai toujours eu du mal à trouver un espace de travail adapté et abordable, et ce centre de coworking a fourni la solution parfaite.'
  },
  {
    name: 'Ahmed',
    at: '@ahmedbakkali',
    text: 'Je recommande vivement! L’espace était moderne, bien éclairé, et avait une atmosphère professionnelle mais confortable.'
  },
  {
    name: 'sophie moore',
    at: '@sophiemoore',
    text: 'Ce n’est pas seulement un lieu de travail, mais une communauté de personnes partageant les mêmes idées'
  },
]

const reviewBottom = [
  {
    name: 'Silvia',
    at: '@silviawill',
    text: 'J’apprécie l’accès 24/7 au centre, qui a permis des horaires de travail flexibles.'
  },
  {
    name: 'Hind',
    at: '@hindlouss',
    text: 'Le centre a également organisé des événements de réseautage et des ateliers, qui ont été extrêmement bénéfiques pour la croissance personnelle et professionnelle.'
  },
  {
    name: 'Mohammed',
    at: '@mohammedel',
    text: 'Je le recommande à tous ceux qui recherchent un espace de travail propice et collaboratif.'
  },
  {
    name: 'Matt',
    at: '@mattdaemon',
    text: 'Ce n’est pas seulement un lieu de travail, mais une communauté de personnes partageant les mêmes idées'
  },
]

const Reviews = () => {

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
      scrollTrigger: '.reviews-ct',
    })
    gsap.from('.fade-left', {
      opacity: 0,
      x: -100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.reviews-ct'
    })
    gsap.from('.fade-right', {
      opacity: 0,
      x: 100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.reviews-ct'
    })
  }, { scope: container })

  return (
    <div className="w-full mt-28 lg:mt-36 flex flex-col overflow-hidden" ref={container}>
      <div className="reviews-ct flex flex-row justify-start items-center lg:px-12">
        <img src={blueStar} alt="star" className="fade-in scale-50 lg:scale-75 " />
        <h2 className="fade-in text-[24px] lg:text-[40px] uppercase font-bold">notre fierte c'est vous</h2>
      </div>
      <div className="flex flex-col gap-y-6">
        <img src={reviewsSphere} alt="reviews" className="fade-right lg:w-[1041px] lg:h-[842px] w-full mx-auto translate-x-8 lg:-translate-y-28 lg:translate-x-12" />
      </div>
    </div>
  )
}

export default Reviews