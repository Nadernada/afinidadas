import { useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  const container = useRef(null)

  useGSAP(() => {

    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.fade-down', {
      opacity: 0,
      y: -50,
      duration: 0.5,
      stagger: 0.07,
      ease: 'power2.out',
      delay: 0.5,
    })
    gsap.from('.fade-down-first', {
      opacity: 0,
      y: -50,
      duration: 0.5,
      stagger: 0.07,
      ease: 'power2.out',
      delay: 0.2,
    })

  }, { scope: container })

  return (
    <div className="" ref={container}>
      <div className="hidden lg:flex flex-row justify-center items-center gap-x-8 px-48 underline *:transition-colors">
        <Link to={'/co-working'} className={`fade-down hover:text-orangey ${pathname === '/co-working' ? 'text-orangey font-bold' : ''}`}>Co-working</Link>
        <Link to={'/bureaux'} className={`fade-down hover:text-orangey ${pathname === '/bureaux' ? 'text-orangey font-bold' : ''}`}>Bureaux</Link>
        <Link to={'/reunion'} className={`fade-down hover:text-orangey ${pathname === '/reunion' ? 'text-orangey font-bold' : ''}`}>Salle de reunion</Link>
        <div className="fade-down-first bg-bluey  rounded-b-full relative h-[130px] p-8 pt-6">
          <Link to={'/'} className="">
            <img src="/images/Logo-Afinidadas.png" alt="logo afinidadas" className="w-[150px]" />
          </Link>
        </div>
        <Link to={'/teambuilding'} className={`fade-down hover:text-orangey ${pathname === '/teambuilding' ? 'text-orangey font-bold' : ''}`}>Teambuilding</Link>
        <Link to={'/formation'} className={`fade-down hover:text-orangey ${pathname === '/formation' ? 'text-orangey font-bold' : ''}`}>Formation</Link>
        <Link to={'/contact'} className={`fade-down hover:text-orangey ${pathname === '/contact' ? 'text-orangey font-bold' : ''}`}>Contact</Link>
      </div>
      <div className="w-full flex flex-row lg:hidden justify-between px-6 pt-4">
          <Link to={'/'} className='z-20'>
            <img src="/images/Logo-Afinidadas.png" alt="logo afinidadas" className={`w-[150px] ${isOpen ? '' : 'invert'}`}  />
          </Link>

          <img src={isOpen ? '/images/close.svg' : '/images/menuIcon.svg'} alt='menu' width={30} height={30} className="cursor-pointer hover:opacity-60 transition-all z-20" onClick={() => setIsOpen(!isOpen)} />

          {
            <div className={isOpen ? "absolute top-0 left-0 w-full h-screen bg-primary text-white flex flex-col items-center justify-center gap-y-6 px-6 py-24 z-10 transition-all opacity-100 translate-y-0 duration-500" : "absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center  opacity-0 -translate-y-[150px] duration-500 transition-all pointer-events-none"}>
              <Link to={'/co-working'} className={`hover:text-orangey ${pathname === '/co-working' ? 'text-orangey font-bold' : ''}`}>Co-working</Link>
              <Link to={'/bureaux'} className={`hover:text-orangey ${pathname === '/bureaux' ? 'text-orangey font-bold' : ''}`}>Bureaux</Link>
              <Link to={'/reunion'} className={`hover:text-orangey ${pathname === '/reunion' ? 'text-orangey font-bold' : ''}`}>Salle de reunion</Link>
              <Link to={'/teambuilding'} className={`hover:text-orangey ${pathname === '/teambuilding' ? 'text-orangey font-bold' : ''}`}>Teambuilding</Link>
              <Link to={'/formation'} className={`hover:text-orangey ${pathname === '/formation' ? 'text-orangey font-bold' : ''}`}>Formation</Link>
              <Link to={'/contact'} className={`hover:text-orangey ${pathname === '/contact' ? 'text-orangey font-bold' : ''}`}>Contact</Link>
            </div>
          }

      </div>
    </div>
  )
}

export default Navbar