import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const Formation = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />

      <div className="flex flex-col gap-y-4 px-20 mt-16 justify-center items-center">
        <h1 className="text-[64px] font-bold w-10/12">Besoin de <span className="text-bluey">perfectionner</span> vos compétences professionnelles ?</h1>
        <p className="text-[24px] w-8/12 me-auto ms-28">Afinidades propose des programmes de formation sur mesure adaptés à vos besoins spécifiques. Investissez dans votre développement personnel et professionnel avec nos cours de qualité.</p>
        <div className="flex flex-row gap-x-8 mt-10 justify-between">
          <div className="flex flex-col gap-y-6 justify-center items-center">
            <img src="/images/grayStar.svg" alt="star" className="w-[122px] h-[122px] translate-y-12" />
            <div className="rounded-[35px] border-[8px] border-bluey flex flex-col p-4 mt-auto">
              <p className="text-[40px] font-bold">+450</p>
              <p className="text-[24px]">Personnes<br /> Satisfaites</p>
            </div>
          </div>
          <div className="relative flex-1">
            <img src="/images/formationHero.png" alt="formation sur mesure tanger" className="w-[845px]" />
            <div className="rounded-full bg-orangey w-4/12 px-4 py-8 flex items-center justify-center absolute bottom-8 right-6">
              <p className="text-white text-[24px] font-semibold">Contactez-nous</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 rounded-[60px] mt-20 p-12 pt-16 flex flex-row gap-x-10 bg-gradient">
        <div className="flex flex-col gap-y-6">
          <div className="p-6 flex flex-row gap-x-6 border-2 border-primary rounded-[45px] items-center justify-between">
            <h3 className="text-[32px] font-bold">01- La flexibilité</h3>
            <div className="w-[1px] bg-slate-500 h-2/3" />
            <p className="text-[16px]">Des bureaux privés élégants et fonctionnels vous attendent chez Afinidades.</p>
          </div>
          <div className="p-6 flex flex-row gap-x-6 bg-primary text-white rounded-[45px] items-center justify-between">
            <h3 className="text-[32px] font-bold">02 -Focalisation</h3>
            <div className="w-[1px] bg-slate-100 h-2/3" />
            <p className="text-[16px]">En mettant l'accent sur les compétences et les aptitudes les plus pertinentes pour atteindre vos objectifs professionnels</p>
          </div>
          <div className="p-6 flex flex-row gap-x-6 border-2 border-primary rounded-[45px] items-center justify-between">
            <h3 className="text-[32px] font-bold">03 -Engagement & motivation</h3>
            <div className="w-[1px] bg-slate-500 h-2/3" />
            <p className="text-[16px]">En adaptant l'expérience d'apprentissage en fonction de vos intérêts, de vos points forts et de vos objectifs de carrière.</p>
          </div>
        </div>
        <div className="flex flex-col translate-y-6">
          <h2 className="font-bold text-[48px]">Avantages D'une Formation Sur Mesure</h2>
          <div className="flex flex-row items-center -translate-y-12 ms-auto">
            <img src="/images/SpiralFormation.png" alt="spiral" />
            <img src="/images/formationIllu.png" alt="formation sur mesure tanger" className="h-[346px] w-[346px]" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col px-20 mt-24">
        <h2 className="capitalize font-bold text-[40px] w-1/2">des commentaires qui<br /> nous font honneur</h2>
        <img src="/images/reviewsSphere.svg" alt="reviews" className="w-[1041px] h-[842px] mx-auto -translate-y-28" />
      </div>

      <div className="w-full flex flex-col relative bg-slate-100 px-48 py-16 mb-12">
        <h3 className="font-bold text-[38px] mb-8">FAQs</h3>
        <details open>
          <summary className="font-bold border-t-[1px] border-b-[1px] border-gray-300 py-3">
            Qu’est-ce qu’une formation sur mesure?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          La formation sur mesure, aussi appelée formation personnalisée, fait référence à des programmes d’apprentissage personnalisés conçus pour répondre aux besoins et aux objectifs particuliers des personnes ou des organisations.
          </p>
        </details>
        <details>
          <summary className="font-bold border-t-[1px] border-b-[1px] border-gray-300 py-3">
          Quels sont les avantages d’une formation sur mesure?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          La formation sur mesure, aussi appelée formation personnalisée, fait référence à des programmes d’apprentissage personnalisés conçus pour répondre aux besoins et aux objectifs particuliers des personnes ou des organisations.
          </p>
        </details>
        <details>
          <summary className="font-bold border-t-[1px] border-b-[1px] border-gray-300 py-3">
          Comment personnaliser les programmes de formation?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          La formation sur mesure, aussi appelée formation personnalisée, fait référence à des programmes d’apprentissage personnalisés conçus pour répondre aux besoins et aux objectifs particuliers des personnes ou des organisations.
          </p>
        </details>
        <details>
          <summary className="font-bold border-t-[1px] border-b-[1px] border-gray-300 py-3">
            Qui peut bénéficier d’une formation sur mesure?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          La formation sur mesure, aussi appelée formation personnalisée, fait référence à des programmes d’apprentissage personnalisés conçus pour répondre aux besoins et aux objectifs particuliers des personnes ou des organisations.
          </p>
        </details>
        <details>
          <summary className="font-bold border-t-[1px] border-b-[1px] border-gray-300 py-3">
            Comment puis-je commencer une formation sur mesure?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          La formation sur mesure, aussi appelée formation personnalisée, fait référence à des programmes d’apprentissage personnalisés conçus pour répondre aux besoins et aux objectifs particuliers des personnes ou des organisations.
          </p>
        </details>
      </div>

      <Footer />
    </div>
  )
}

export default Formation