import { Link } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

import blueStar from '../images/blueStar.svg'
import reviewsImage from '../images/reviews.png'

const Appartment = () => {

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
      scrollTrigger: '.appart-ct',
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
    <div className=" w-[95%] mt-20 lg:mt-0 px-6 flex flex-col lg:flex-row gap-y-6 lg:gap-x-6 justify-between" ref={container}>
      <div className="appart-ct flex flex-col gap-y-4 lg:w-5/12 relative">
        <h5 className="fade-right text-[18px] lg:text-[30px] font-bold">Souhaitez-vous trouver votre appartement idéal, spécialement conçu pour les besoins des entrepreneurs et des professionnels ?</h5>
        <p className="fade-right text-[14px] lg:text-[18px]">Découvrez notre gamme de locations premium, idéalement adaptées aux exigences des entrepreneurs modernes. Trouvez la maison parfaite qui correspond non seulement à vos attentes de confort et de style, mais qui est aussi conçue pour faciliter votre succès dans le monde des affaires.</p>
        <img src={blueStar} alt="star" className="fade-in absolute -right-16 bottom-10 lg:bottom-0 scale-50 lg:scale-75 z-10" />
      </div>
      <div className="relative flex-1">
        <img src={reviewsImage} alt="location appartement" className="fade-right w-full" loading="lazy" />
        <Link to={'/contact'}>
          <div className="fade-left rounded-full bg-orangey w-4/12 text-center px-4 lg:px-4 py-1 lg:py-8 flex items-center justify-center absolute bottom-0 lg:bottom-4 left-4 lg:left-12">
            <p className="text-white text-[12px] lg:text-[24px] font-semibold">Contactez-nous</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Appartment