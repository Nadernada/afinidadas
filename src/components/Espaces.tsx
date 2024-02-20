const Espace = () => {
  return (
    <div className="w-full mt-40 pe-12 flex flex-col gap-y-6 relative">
      <img src="/images/leftSideDesk.png" alt="location bureaux tanger" className="absolute top-0 left-0" />
      <div className="w-full flex flex-row gap-x-6 justify-end">
        <div className="w-[30%] rounded-[30px] bg-orangey flex flex-col text-white px-8 py-8 gap-y-4">
          <h4 className="text-[32px] font-semibold">Salle de Reunion</h4>
          <div className="flex flex-row justify-between">
            <p className="text-16px[]">Des bureaux privés élégants et fonctionnels vous attendent chez Afinidades.</p>
            <img src="/images/redirectArrow.svg" alt="arrow" className="w-[80px] h-[80px]" />
          </div>
        </div>
        <div className="w-[30%] rounded-[30px] bg-primary flex flex-col text-white px-8 py-8 gap-y-4">
          <h4 className="text-[32px] font-semibold">Bureaux Privés</h4>
          <div className="flex flex-row justify-between">
            <p className="text-16px[]">Des bureaux privés élégants et fonctionnels vous attendent chez Afinidades.</p>
            <img src="/images/redirectArrow.svg" alt="arrow" className="w-[80px] h-[80px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-x-6 justify-end">
        <img src="/images/espacesIllustration.png" alt="espace coworking" className="-translate-y-16" />
        <div className="w-[30%] rounded-[30px] bg-orangey flex flex-col text-white px-8 py-8 gap-y-4 h-fit">
          <h4 className="text-[32px] font-semibold">Espace CoWorking</h4>
          <div className="flex flex-row justify-between">
            <p className="text-16px[]">Des bureaux privés élégants et fonctionnels vous attendent chez Afinidades.</p>
            <img src="/images/redirectArrow.svg" alt="arrow" className="w-[80px] h-[80px]" />
          </div>
        </div>
      </div>
      <div className="-translate-y-44 px-24 space-y-8">
        <h3 className="text-[48px] font-bold">Nos Espaces</h3>
        <p className="text-[20px] w-1/2">Le centre d’affaires Afinidades se situe en plein centre ville de Tanger, très dynamique, bien achalandé et facilement accessible.<br />Espace de travail vivant et inspirant, Afinidades Centro dispose d’espaces de coworking, de bureaux non meublés à louer, d’une salle de réunion et d’une salle de formation.</p>
      </div>
    </div>
  )
}

export default Espace