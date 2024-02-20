const review = [
  {
    name: 'Yasmina',
    at: '@yassbou',
    text: 'Ce n’est pas seulement un lieu de travail, mais une communauté de personnes partageant les mêmes idées'
  },
  {
    name: 'Sophie',
    at: '@sophiemoore',
    text: 'En tant que freelance, j’ai toujours eu du mal à trouver un espace de travail adapté et abordable, et ce centre de coworking a fourni la solution parfaite.'
  },
  {
    name: 'Ahmed',
    at: '@ahmedbakkali',
    text: 'Je recommande vivement! L’espace était moderne, bien éclairé, et avait une atmosphère professionnelle mais confortable.'
  },
  {
    name: 'sophie moore',
    at: '@sophiemoore',
    text: 'Ce n’est pas seulement un lieu de travail, mais une communauté de personnes partageant les mêmes idées'
  },
]

const reviewBottom = [
  {
    name: 'Silvia',
    at: '@silviawill',
    text: 'J’apprécie l’accès 24/7 au centre, qui a permis des horaires de travail flexibles.'
  },
  {
    name: 'Hind',
    at: '@hindlouss',
    text: 'Le centre a également organisé des événements de réseautage et des ateliers, qui ont été extrêmement bénéfiques pour la croissance personnelle et professionnelle.'
  },
  {
    name: 'Mohammed',
    at: '@mohammedel',
    text: 'Je le recommande à tous ceux qui recherchent un espace de travail propice et collaboratif.'
  },
  {
    name: 'Matt',
    at: '@mattdaemon',
    text: 'Ce n’est pas seulement un lieu de travail, mais une communauté de personnes partageant les mêmes idées'
  },
]

const Reviews = () => {
  return (
    <div className="w-full mt-36 flex flex-col overflow-hidden">
      <div className="flex flex-row justify-start items-center">
        <img src="/images/blueStar.svg" alt="star" className="scale-75 " />
        <h2 className="text-[40px] uppercase font-bold">notre fierte c'est vous</h2>
      </div>
      <div className="flex flex-col gap-y-6 py-12 reviews">
        <div className="flex flex-row gap-x-8 -translate-x-12">
          {
            review.map((item) => (
              <div key={item.text} className="bg-gray-200 rounded-[35px] p-8 flex flex-col justify-center gap-y-4 min-w-[400px]">
                <div className="flex flex-row gap-x-3 items-center">
                  <div className="rounded-full bg-gray-300 w-[70px] h-[70px]"></div>
                  <div className="flex flex-col">
                    <p className="text-[20px] font-semibold">{item.name}</p>
                    <p className="text-[15px] text-slate-500">{item.at}</p>
                  </div>
                </div>
                <p className="text-[15px]">{item.text}</p>
              </div>
            ))
          }
        </div>
        <div className="flex flex-row gap-x-8 translate-x-10">
          {
            reviewBottom.map((item) => (
              <div key={item.text} className="bg-gray-200 rounded-[35px] p-8 flex flex-col justify-center gap-y-4 min-w-[400px]">
                <div className="flex flex-row gap-x-3 items-center">
                  <div className="rounded-full bg-gray-300 w-[70px] h-[70px]"></div>
                  <div className="flex flex-col">
                    <p className="text-[20px] font-semibold">{item.name}</p>
                    <p className="text-[15px] text-slate-500">{item.at}</p>
                  </div>
                </div>
                <p className="text-[15px]">{item.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Reviews