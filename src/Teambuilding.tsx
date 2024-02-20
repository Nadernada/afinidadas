import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const Teambuilding = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />

      <div className="flex flex-row gap-x-12 px-24 mt-24 w-11/12">
        <div className="flex flex-col gap-y-8 w-1/2">
          <p className="text-[24px]">Favorisez la cohésion d'équipe et la collaboration au sein de votre entreprise grâce à nos activités de teambuilding uniques.</p>
          <p className="text-[24px]">Chez Afinidades, nous organisons des expériences mémorables pour renforcer les liens entre vos collaborateurs et améliorer la performance globale de votre équipe.</p>
          <h1 className="capitalize text-[64px] font-bold">Exploitez tout le potentiel de votre équipe</h1>
        </div>
        <div className="flex-1 relative">
          <img src="/images/teamHero.png" alt="teambuilding tanger" className="w-full" />
          <img src="/images/grayStar.svg" alt="star" className="w-[122px] h-[122px] -bottom-16 -left-28 absolute" />
          <div className="rounded-full bg-bluey w-7/12 px-4 py-12 flex items-center justify-center absolute bottom-4 right-6">
            <p className="text-white text-[30px] font-semibold">Contactez-nous</p>
          </div>
        </div>
      </div>

      <div className="w-11/12 rounded-[60px] mt-20 p-16 pt-16 flex flex-col bg-gradient-to-b from-orangey/15 from-10% to-transparent h-[750px]">
        <h3 className="font-bold text-[48px] capitalize w-1/2">certains de nos activites teambuilding</h3>
        <img src="/images/teambuildingActivity.png" alt="teambuilding" className="-translate-y-36 mix-blend-multiply"/>
      </div>

      <div className="w-full flex flex-col px-36 mt-48">
        <h2 className="capitalize font-bold text-[40px] w-1/2">des commentaires qui<br /> nous font honneur</h2>
        <img src="/images/reviewsSphere.svg" alt="reviews" className="w-[1041px] h-[842px] mx-auto -translate-y-28" />
      </div>

      <div className="w-full flex flex-col relative bg-slate-100 px-52 py-16 mb-12">
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

export default Teambuilding