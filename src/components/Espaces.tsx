import { Link } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Espace = () => {

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
      scrollTrigger: '.container',
    })
    gsap.from('.fade-left', {
      opacity: 0,
      x: -100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.container'
    })
  }, { scope: container })

  return (
    <div className="w-full mt-40 lg:pe-12 flex flex-col gap-y-6 relative container" ref={container}>
      <img src="/images/leftSideDesk.png" alt="location bureaux tanger" className="fade-in hidden lg:inline absolute top-0 left-0" loading="lazy" />
      <div className="w-full flex flex-col lg:flex-row gap-y-6 lg:gap-x-6 lg:justify-end px-8 lg:px-0">
        <div className="fade-in lg:w-[30%] rounded-[30px] bg-orangey flex flex-col text-white p-6 lg:p-8 gap-y-4">
          <h4 className="text-[24px] lg:text-[32px] font-semibold">Salle de Reunion</h4>
          <div className="flex flex-row justify-between">
            <p className="text-[10px] lg:text-[16px]">Des bureaux privés élégants et fonctionnels vous attendent chez Afinidades.</p>
            <Link to={'/reunion'}>
              <div className="w-[70px] h-[70px]"><img src="/images/redirectArrow.svg" alt="arrow" /></div>
            </Link>
          </div>
        </div>
        <div className="fade-in lg:w-[30%] rounded-[30px] bg-primary flex flex-col text-white p-6 lg:p-8 gap-y-4">
          <h4 className="text-[24px] lg:text-[32px] font-semibold">Bureaux Privés</h4>
          <div className="flex flex-row justify-between">
            <p className="text-[10px] lg:text-[16px]">Des bureaux privés élégants et fonctionnels vous attendent chez Afinidades.</p>
            <Link to={'/bureaux'}>
              <div className="w-[70px] h-[70px]"><img src="/images/redirectArrow.svg" alt="arrow" /></div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-y6 lg:gap-x-6 lg:justify-end px-8 lg:px-0">
        <img src="/images/espacesIllustration.png" alt="espace coworking" className="fade-in -translate-y-8 lg:-translate-y-16 order-last lg:order-none z-10" loading="lazy" />
        <div className="fade-in lg:w-[30%] rounded-[30px] bg-orangey flex flex-col text-white p-6 lg:p-8 gap-y-4 h-fit">
          <h4 className="text-[24px] lg:text-[32px] font-semibold">Espace CoWorking</h4>
          <div className="flex flex-row justify-between">
            <p className="text-[10px] lg:text-[16px]">Des bureaux privés élégants et fonctionnels vous attendent chez Afinidades.</p>
            <Link to={'/co-working'}>
              <div className="w-[70px] h-[70px]"><img src="/images/redirectArrow.svg" alt="arrow" /></div>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:-translate-y-44 px-8 lg:px-24 space-y-3 lg:space-y-8 order-first lg:order-none">
        <h3 className="fade-left text-[24px] lg:text-[48px] font-bold">Nos Espaces</h3>
        <p className="fade-left text-[12px] lg:text-[20px] lg:w-1/2">Le centre d’affaires Afinidades se situe en plein centre ville de Tanger, très dynamique, bien achalandé et facilement accessible.<br />Espace de travail vivant et inspirant, Afinidades Centro dispose d’espaces de coworking, de bureaux non meublés à louer, d’une salle de réunion et d’une salle de formation.</p>
      </div>
    </div>
  )
}

export default Espace