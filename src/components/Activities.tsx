import { useEffect, useRef, useState } from "react"

const Activities = () => {

  const [isActive, setIsActive] = useState(0)

  const handleNext = () => {
    isActive === 0 ? setIsActive(1) : setIsActive(0)
  }

  useEffect(() => {
    setTimeout(() => {
      isActive===0 ? setIsActive(1) : setIsActive(0)
    }, 3000)
  },[isActive])

  return (
    // <div className="flex flex-row items-center">
      <div className="flex flex-col gap-y-12 px-10 transition-all">
          <div className="flex flex-row w-full gap-x-2 items-center justify-start ps-12">
            <h1 className="text-[64px] font-bold uppercase">Ameliorer votre business</h1>
            <img src="/images/redirectArrowBlue.svg" alt="arrow" className="w-[75px] h-[55px]" />
          </div>

          {
            isActive === 0 ? (
              <div className="w-full flex flex-row gap-x-8 items-center justify-center">
                <div className="relative h-full">
                  <div className="absolute top-0 left-16 rounded-ee-[40px] flex justify-center items-center p-6">
                    <h2 className="uppercase text-[40px] font-bold">teambuilding</h2>
                  </div>
                  <img src="/images/teamBuilding.png" alt="teambuilding activities" className="rounded-[30px] h-full aspect-auto" />
                </div>
                <div className="flex flex-col gap-y-4 w-6/12">
                  <div className="flex flex-row justify-between gap-x-2">
                    <div className="rounded-full bg-bluey w-7/12 p-3 flex items-center justify-center">
                      <p className="text-white text-[32px] font-semibold">Decouvrir &gt;</p>
                    </div>
                    <div className="rounded-full flex-1 p-3 bg-slate-300 flex justify-center items-center">
                      <p className="text-[48px] font-bold text-white">01</p>
                    </div>
                  </div>
                  <div className="rounded-[35px] bg-orangey p-10">
                    <p className="text-[20px] text-white">Favorisez la cohésion d'équipe et la collaboration au sein de votre entreprise grâce à nos activités de teambuilding uniques.</p>
                  </div>
                  <div className="flex flex-row gap-x-10">
                    <img src="/images/zigzag.svg" alt="zigzag" />
                    <div className="rounded-[35px] p-8 bg-slate-300">
                      <p className="text-[20px]">Des expériences mémorables pour renforcer les liens entre vos collaborateurs</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              //@ts-ignore
              <div className="w-full flex flex-row gap-x-8 items-center justify-start">
                <div className="relative h-full">
                  <div className="absolute top-0 left-16 rounded-ee-[40px] flex justify-center items-center p-6">
                    <h2 className="uppercase text-[40px] font-bold">Formation</h2>
                  </div>
                  <img src="/images/teamBuilding.png" alt="teambuilding activities" className="rounded-[30px] w-full aspect-auto" />
                </div>
                <div className="flex flex-col gap-y-4 w-6/12">
                  <div className="flex flex-row justify-between gap-x-2">
                    <div className="rounded-full bg-orangey w-7/12 p-3 flex items-center justify-center">
                      <p className="text-white text-[32px] font-semibold">Decouvrir &gt;</p>
                    </div>
                    <div className="rounded-full flex-1 p-3 bg-slate-300 flex justify-center items-center">
                      <p className="text-[48px] font-bold text-white">01</p>
                    </div>
                  </div>
                  <div className="rounded-[35px] bg-bluey p-10">
                    <p className="text-[20px] text-white">En mettant l'accent sur les compétences et les aptitudes les plus pertinentes pour atteindre vos objectifs professionnels.</p>
                  </div>
                  <div className="flex flex-row gap-x-10">
                    <img src="/images/zigzag.svg" alt="zigzag" />
                    <div className="rounded-[35px] p-8 bg-slate-300">
                      <p className="text-[18px]">Afinidades propose des programmes de formation sur mesure adaptés à vos besoins spécifiques.</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }

          <div className="flex flex-row justify-center gap-x-3">
            <div className={`w-36 h-[10px] ${isActive === 1 ? 'bg-gray-300' : 'bg-gray-600'} rounded-lg cursor-pointer`} onClick={handleNext} />
            <div className={`w-36 h-[10px] ${isActive === 0 ? 'bg-gray-300' : 'bg-gray-600'} rounded-lg cursor-pointer`} onClick={handleNext} />
          </div>
      {/* </div> */}
      {/* <div className="pe-20">
        <img src="/images/right-arrow.svg" alt="arrow" className="w-10 h-10 translate-y-28 cursor-pointer" onClick={handleNext} />
      </div> */}
    </div>
  )
}

export default Activities