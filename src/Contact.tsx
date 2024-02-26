import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

const Contact = () => {

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
  }, { scope: container })

  const form = useRef<HTMLFormElement>(null)
  const [msgSent, setMsgSent] = useState(false)

  const sendEmail = (e: any) => {
    e.preventDefault()
    //@ts-ignore
    emailjs.sendForm('service_ozpxl5z', 'template_sgu3g76', form.current, { publicKey: '1LntKum1uyLRZP8hm',})
    .then (() => {
      setMsgSent(true)
      setTimeout(() => setMsgSent(false), 3000)

    })
  }

  return (
    <div className="w-full flex flex-col justify-center lg:items-center" ref={container}>
      <Navbar />


      <div className="w-full flex flex-col lg:flex-row px-6 lg:ps-24 lg:pe-0 my-12 lg:my-20 items-center justify-center gap-x-32">
      {
        msgSent ? (
          <div className="flex flex-col">
            <h2 className="fade-left text-[24px] lg:text-[54px] font-bold">Merci pour votre Message!</h2>
          </div>
        ) : (
          <div className="flex flex-col">
            <h2 className="fade-left text-[24px] lg:text-[54px] font-bold">Contactez-Nous</h2>
            <p className="fade-left text-[16px] lg:text-[20px]">Avez-vous des questions ou de differents projets ?</p>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col">
              <input type="text" name="from_name" id="name" placeholder="Nom Complet" className="fade-right p-4 mt-8 border-[1px] border-gray-200 rounded-2xl" />
                <input type="email" name="from_email" id="email" placeholder="E-mail *" className="fade-right p-4 mt-4 border-[1px] border-gray-200 rounded-2xl" />
              <input type="from_phone" name="from_phone" id="phone" placeholder="Télephone *" className="fade-right p-4 mt-4 border-[1px] border-gray-200 rounded-2xl" />
              <textarea name="message" id="message" cols={30} rows={5} className="fade-right p-4 my-4 border-[1px] border-gray-200 rounded-2xl"></textarea>

              <button type="submit" className="fade-left w-full bg-orangey py-3 uppercase text-white font-semibold rounded-xl">envoyer</button>
            </form>
          </div>
        )
      }


        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12948.168038457196!2d-5.7967841!3d35.7743444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b819578134481%3A0x875abfd479b1a6e0!2sAfinidades%20Centro!5e0!3m2!1sen!2sma!4v1708556036762!5m2!1sen!2sma" className="fade-right rounded-[30px] w-full mt-8 lg:mt-0 lg:w-[450px] lg:h-[600px]" loading="lazy"></iframe>

      </div>



      <Footer />

      <ScrollToTop />
    </div>
  )
}

export default Contact