import { Link } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"

const Teambuilding = () => {
  return (
    <div className="w-full flex flex-col lg:items-center mx-auto 2xl:w-[1440px]">
      <Navbar />

      <div className="flex flex-col lg:flex-row gap-x-12 px-8 lg:px-24 mt-12 lg:mt-24 w-11/12 items-center">
        <div className="flex flex-col gap-y-8 lg:w-1/2 mt-6 lg:mt-0">
          <p className="text-[16px] lg:text-[24px]">Favorisez la cohésion d'équipe et la collaboration au sein de votre entreprise grâce à nos activités de teambuilding uniques.</p>
          <p className="text-[16px] lg:text-[24px]">Chez Afinidades, nous organisons des expériences mémorables pour renforcer les liens entre vos collaborateurs et améliorer la performance globale de votre équipe.</p>
          <h1 className="capitalize text-[24px] lg:text-[64px] font-bold order-first lg:order-none">Exploitez tout le potentiel de votre équipe</h1>
        </div>
        <div className="flex-1 relative order-first lg:order-none">
          <img src="/images/teamHero.png" alt="teambuilding tanger" className="w-full" />
          <img src="/images/grayStar.svg" alt="star" className="hidden lg:w-[122px] h-[122px] -bottom-16 -left-28 absolute" />
          <Link to={'/contact'}>
            <div className="rounded-full bg-bluey w-7/12 px-4 py-6 lg:py-12 flex items-center justify-center absolute bottom-3 lg:bottom-4 right-4 lg:right-6">
            <p className="text-white text-[14px] lg:text-[30px] font-semibold">Contactez-nous</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="lg:w-11/12 rounded-[60px] mt-36 p-6 lg:p-16 pt-16 flex flex-col bg-gradient-to-b from-orangey/15 from-5% to-transparent to-70% lg:h-[750px]">
        <h3 className="font-bold text-[24px] lg:text-[48px] capitalize lg:w-1/2">certains de nos activites teambuilding</h3>
        <img src="/images/teambuildingActivity.png" alt="teambuilding" className="lg:-translate-y-36 "/>
      </div>

      <div className="w-full flex flex-col px-6 lg:px-36 lg:mt-48 mb-12 lg:mb-0">
        <h2 className="capitalize font-bold text-[24px] lg:text-[40px] lg:w-1/2">des commentaires qui<br /> nous font honneur</h2>
        <img src="/images/reviewsSphere.svg" alt="reviews" className="lg:w-[1041px] lg:h-[842px] w-full mx-auto lg:-translate-y-28" />
      </div>

      <div className="w-full flex flex-col relative bg-slate-100 px-6 lg:px-60 py-16 mb-12">
        <h3 className="font-bold text-[24px] lg:text-[38px] mb-8">FAQs</h3>
        <details open>
          <summary className="font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Que sont les activités de team building ?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          Les activités de consolidation d’équipe sont des exercices interactifs, des jeux et des défis conçus pour promouvoir le travail d’équipe, la communication et la collaboration entre les membres de l’équipe. Ces activités visent à favoriser la confiance, à renforcer les relations et à renforcer la cohésion globale de l’équipe.
          </p>
        </details>
        <details>
          <summary className="font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Pourquoi les activités de team building sont-elles importantes ?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          Les activités de consolidation d’équipe jouent un rôle crucial dans l’amélioration de la dynamique, de la productivité et du moral des équipes. En s’engageant dans des activités amusantes et significatives, les membres de l’équipe développent des liens plus forts, apprennent à communiquer efficacement et travaillent ensemble de manière plus cohérente pour atteindre des objectifs communs.
          </p>
        </details>
        <details>
          <summary className="font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Quels types d’activités de team building proposez-vous ?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          Nous offrons un large éventail d’activités de team-building pour répondre à différentes préférences, tailles de groupes et objectifs. Nos activités peuvent inclure des défis d’aventure en plein air, des jeux de résolution de problèmes, des ateliers créatifs, des exercices de communication et plus encore.
          </p>
        </details>
        <details>
          <summary className="font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Comment les activités de team building profitent-elles à mon équipe ?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          Les activités de consolidation d’équipe offrent plusieurs avantages, notamment une meilleure communication, une collaboration accrue, une confiance accrue, un moral renforcé et des relations d’équipe renforcées. Ces avantages se traduisent par un environnement de travail plus positif et productif, conduisant à de meilleurs résultats pour votre équipe et votre organisation.
          </p>
        </details>
        <details>
          <summary className="font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Les activités de consolidation d’équipe peuvent-elles être personnalisées pour répondre aux besoins de mon équipe?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          Oui, nous comprenons que chaque équipe est unique et nous offrons des activités de renforcement d’équipe personnalisables pour atteindre vos buts et objectifs spécifiques. Que vous vous concentriez sur l’amélioration de la communication, le renforcement de la confiance ou l’amélioration des compétences en résolution de problèmes, nous pouvons adapter nos activités aux besoins de votre équipe.
          </p>
        </details>
      </div>

      <Footer />

      <ScrollToTop />
    </div>
  )
}

export default Teambuilding