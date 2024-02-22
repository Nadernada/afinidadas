import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"

const imgPaths = [
  '/images/bCarousel1.JPG',
  '/images/bCarousel2.JPG',
  '/images/bCarousel3.JPG',
  '/images/bCarousel4.JPG',
  '/images/bCarousel5.JPG',
  '/images/bCarousel6.JPG',
]

const Bureaux = () => {
  return (
    <div className="w-full 2xl:max-w-[1440px] flex flex-col mx-auto lg:items-center">
      <Navbar />

      <img src="/images/bureauxThumb.webp" alt="coworking espace" className="mt-12 w-[90%] lg:w-[1065px] self-center" />

      <p className="text-[16px] lg:text-[24px] lg:w-9/12 my-12 px-12 lg:px-0">Rejoignez notre espace de co-working au cœur de Tanger. Afinidades vous offre un environnement stimulant, propice à la créativité et à la collaboration.<br/> <br/>Rejoignez notre communauté de professionnels aujourd'hui et partagez vos idées dans un espace moderne et inspirant.</p>
      <img src="/images/Dawn.png" alt="dawn" className="absolute left-0 bottom-0 -z-10 opacity-35" />

      <Carousel images={imgPaths} className='px-6' />

      <div className="lg:w-11/12 lg:rounded-[60px] mt-28 p-10 lg:p-16 pt-16 flex flex-col bg-gradient-to-b from-orangey/15 from-5% to-transparent to-70% ">
        <h3 className="font-bold text-[24px] lg:text-[48px] capitalize">Quels sont les avantages<br/> de louer avec nous?</h3>

        <div className="flex flex-col gap-y-6 my-8 lg:p-3">
          <div className="p-6 lg:p-10 flex flex-col gap-y-3 border-2 border-primary rounded-3xl lg:rounded-[45px] items-start justify-between">
            <h3 className="text-[20px] lg:text-[32px] font-bold">Emplacement idéal</h3>
            <div className="h-[1px] bg-slate-500 w-2/3" />
            <p className="text-[16px]">Nos bureaux sont idéalement situés a Tanger, offrant un accès facile aux transports en commun, aux restaurants, aux commerces et à d'autres commodités. Avec un emplacement central, vous serez bien placé pour attirer des clients, des talents et des opportunités.</p>
          </div>
          <div className="p-6 lg:p-10 flex flex-col gap-y-3 bg-primary text-white rounded-3xl lg:rounded-[45px] items-start justify-between">
            <h3 className="text-[20px] lg:text-[32px] font-bold">Conditions flexibles</h3>
            <div className="h-[1px] bg-slate-100 w-2/3" />
            <p className="text-[16px]">Nous offrons des conditions de location flexibles pour répondre à l’évolution de vos besoins commerciaux. Que vous ayez besoin d’une location à court terme pour un projet ou d’un bail à long terme pour votre équipe en pleine croissance, nous avons des options pour adapter votre calendrier et votre budget.</p>
          </div>
          <div className="p-6 lg:p-10 flex flex-col gap-y-3 border-2 border-primary rounded-3xl lg:rounded-[45px] items-start justify-between">
            <h3 className="text-[20px] lg:text-[32px] font-bold">Assistance professionnelle</h3>
            <div className="h-[1px] bg-slate-500 w-2/3" />
            <p className="text-[16px]">Notre équipe dévouée est présente pour vous soutenir à chaque étape. De l’aide à l’emménagement et aux demandes d’entretien au soutien administratif et à la coordination d’événements, nous nous engageons à fournir un service exceptionnel à nos locataires.</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col relative bg-slate-100 px-6 lg:px-60 py-16 mb-12">
        <h3 className="font-bold text-[24px] lg:text-[38px] mb-8">FAQs</h3>
        <details open>
          <summary className="font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
            Quels types d’espaces de bureaux proposez-vous ?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          Nous offrons une variété d’espaces de bureau pour répondre à différents besoins, y compris des bureaux privés, des espaces de coworking et des salles de réunion. Que vous soyez un entrepreneur solo ou une équipe grandissante, nous avons des options pour répondre à vos besoins.
          </p>
        </details>
        <details>
          <summary className="font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Quelles commodités sont incluses avec la location de bureau?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          Nos locations de bureaux comprennent une gamme d’équipements conçus pour améliorer votre expérience de travail. Ceux-ci peuvent inclure Internet haute vitesse, des installations d’impression et de numérisation, l’accès à la kitchenette et aux rafraîchissements, un accès sécurisé avec surveillance 24/7, et plus encore.
          </p>
        </details>
        <details>
          <summary className="font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Vos bureaux sont-ils meublés ?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          La formation sur mesure, aussi appelée formation personnalisée, fait référence à des programmes d’apprentissage personnalisés conçus pour répondre aux besoins et aux objectifs particuliers des personnes ou des organisations.
          </p>
        </details>
        <details>
          <summary className="font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Quelles conditions de location proposez-vous ?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          Non, nous croyons que chaque bureau devrait avoir un sens pour son propriétaire, donc, nous vous laissons avoir un contrôle total sur la décoration.
          </p>
        </details>
        <details>
          <summary className="font-semibold lg:font-bold border-t-[1px] border-b-[1px] border-gray-300 py-4 cursor-pointer">
          Puis-je personnaliser l’espace de bureau selon mes préférences ?
          </summary>
          <p className="w-11/12 py-3 ps-3">
          Oui, nous comprenons que chaque entreprise est unique, et nous sommes heureux de travailler avec vous pour personnaliser l’espace de bureau pour répondre à vos besoins spécifiques. Que vous ayez besoin d’ajouter des meubles supplémentaires, de reconfigurer la disposition ou de personnaliser le décor, nous sommes là pour vous aider.
          </p>
        </details>
      </div>

      <Footer />

      <ScrollToTop />
    </div>
  )
}

export default Bureaux