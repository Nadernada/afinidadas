import { useRef } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import logo from '../images/Logo-Afinidadas.png'
import telegram from '../images/telegram.svg'
import whatsapp from '../images/whatsapp.svg'

const Footer = () => {

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
      scrollTrigger: '.footer-ct',
    })
    gsap.from('.fade-up', {
      opacity: 0,
      y: 100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.footer-ct'
    })
    gsap.from('.fade-right', {
      opacity: 0,
      x: 100,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: '.footer-ct'
    })
  }, { scope: container })


  return (
    <div className="footer-ct w-[97%] mt-6 lg:mb-5 p-10 bg-bluey rounded-[35px] self-center" ref={container}>
      <div className="flex flex-col gap-y-24">
        <div className="fade-in flex flex-col lg:flex-row gap-y-6 justify-between">
          <Link to={'/'}><img src={logo} alt="logo afinadadas" className="w-[140px] lg:w-[188px] h-[64px] lg:h-[82px]" /></Link>

          <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-12">
            <div className="flex flex-col gap-y-6 text-white">
              <h5 className="fade-up text-[10px] uppercase text-gray-400">information</h5>
              <div className="flex flex-col gap-y-3 text-[12px] lg:text-[16px]">
                <Link to={'/co-working'} className="fade-up hover:text-slate-400">Espaces CoWorking</Link>
                <Link to={'/reunion'} className="fade-up hover:text-slate-400">Salle de reunion</Link>
                <Link to={'/bureaux'} className="fade-up hover:text-slate-400">Bureaux privés</Link>
                <Link to={'/teambuilding'} className="fade-up hover:text-slate-400">Teambuilding</Link>
                <Link to={'/formation'} className="fade-up hover:text-slate-400">Formation sur mesure</Link>
                <Link to={'/contact'} className="fade-up hover:text-slate-400">Contact</Link>
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-y-6 text-white">
              <h5 className="fade-up text-[10px] uppercase text-gray-400">menu</h5>
              <div className="flex flex-col gap-y-3 text-[12px] lg:text-[16px]">
                <Link to={'/#'} className="fade-up hover:text-slate-400">Sitemap</Link>
                <Link to={'/#'} className="fade-up hover:text-slate-400">Privacy</Link>
                <Link to={'/#'} className="fade-up hover:text-slate-400">Cookies</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 lg:items-end">
            <Link to={'/contact'}><button className="fade-in bg-white text-primary p-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">Contactez-Nous</button></Link>
            <p className="fade-in text-[12px] lg:text-[14px] text-white">+212 539 340 122</p>
          </div>
        </div>
        <div  className="flex flex-col lg:flex-row gap-y-6 lg:w-1/3 justify-between">
          <div className="flex flex-row gap-x-2">
            <img src={telegram} alt="social" className="fade-in w-[40px] h-[40px]" />
            <a href="https://wa.me/+212666546005"><img src={whatsapp} alt="social" className="fade-in w-[40px] h-[40px]" /></a>
          </div>
          <p className="fade-in text-[12px] text-white">bureau 5, Résidence Perla Oficinas, Av. Oujda,<br />Tanger</p>
        </div>
      </div>
    </div>
  )
}

export default Footer