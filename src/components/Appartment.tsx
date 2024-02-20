const Appartment = () => {
  return (
    <div className="w-[95%] mt-40 px-6 flex flex-row gap-x-6 justify-between">
      <div className="flex flex-col gap-y-4 w-5/12 relative">
        <h5 className="text-[40px] font-bold">Souhaitez-vous trouver votre appartement idéal?</h5>
        <p className="text-[20px] w-8/12">Découvrez nos locations premium et trouvez la maison parfaite qui vous correspond!</p>
        <img src="/images/blueStar.svg" alt="star" className="absolute -right-4 bottom-16" />
      </div>
      <div className="relative flex-1">
        <img src="/images/reviews.png" alt="location appartement" className="w-full"/>
        <div className="rounded-full bg-orangey w-4/12 px-4 py-8 flex items-center justify-center absolute bottom-4 left-12">
          <p className="text-white text-[24px] font-semibold">Contactez-nous</p>
        </div>
      </div>
    </div>
  )
}

export default Appartment