import Navbar from "./Navbar"

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-y-16">

      <Navbar />

      <div className="flex flex-col items-center -translate-x-24">
        <h1 className="uppercase text-[48px] font-black">LE DÉVELOPPEMENT <span className="text-orangey">PROFESSIONNEL</span></h1>
        <div className="flex flex-col items-start translate-x-[50%] relative">
          <img src="/images/Soft Star.svg" alt="star" className="w-[40px] h-[40px] absolute -right-6 -top-4" />
          <h1 className="uppercase text-[48px] font-black">DANS LE CADRE <span className="text-bluey">IDÉAL</span></h1>
          <p className="w-2/3">Rejoignez notre espace de co-working au cœur de Tanger.</p>
        </div>
      </div>

      <div className="flex flex-row justify-between relative">
        <img src="/images/leftHeroImage.png" alt="espace coworking tanger" className="w-[600px]" />
        <img src="/images/rightSideDesk.png" alt="espace coworking tanger" className="w-auto h-[362px]"/>
        <div className="w-[600px] absolute bottom-0 left-0 flex flex-row justify-around items-center bg-bluey rounded-e-full font-semibold capitalize text-white text-[18px] p-4">
          <p className="">Reserver Maintenant</p>
          <img src="/images/whiteStar.svg" alt="star" className="w-[28px] h-[28px]" />
          <p className="">Reserver Maintenant</p>
          <img src="/images/grayStar.svg" alt="star" className="absolute top-0 left-[550px] w-[100px] h-[100px]" />
        </div>
      </div>
    </div>
  )
}

export default Hero