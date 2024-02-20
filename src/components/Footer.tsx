import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="w-[97%] mt-6 mb-5 p-10 bg-bluey rounded-[35px]">
      <div className="flex flex-col gap-y-24">
        <div className="flex flex-row justify-between">
          <img src="/images/Logo-Afinidadas.png" alt="logo afinadadas" className="w-[188px] h-[82px]" />

          <div className="flex flex-row gap-x-12">
            <div className="flex flex-col gap-y-6 text-white">
              <h5 className="text-[10px] uppercase text-gray-400">information</h5>
              <div className="flex flex-col gap-y-3 text-[16px]">
                <Link to={'/coworking'} className="hover:text-slate-400">Espaces CoWorking</Link>
                <Link to={'/reunion'} className="hover:text-slate-400">Salle de reunion</Link>
                <Link to={'/bureaux'} className="hover:text-slate-400">Bureaux privés</Link>
                <Link to={'/teambuilding'} className="hover:text-slate-400">Teambuilding</Link>
                <Link to={'/formation'} className="hover:text-slate-400">Formation sur mesure</Link>
                <Link to={'/contact'} className="hover:text-slate-400">Contact</Link>
              </div>
            </div>

            <div className="flex flex-col gap-y-6 text-white">
              <h5 className="text-[10px] uppercase text-gray-400">menu</h5>
              <div className="flex flex-col gap-y-3 text-[16px]">
                <Link to={'/#'} className="hover:text-slate-400">Sitemap</Link>
                <Link to={'/#'} className="hover:text-slate-400">Privacy</Link>
                <Link to={'/#'} className="hover:text-slate-400">Cookies</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 items-end">
            <Link to={'/contact'}><button className="bg-white text-primary p-2 rounded-lg font-semibold">Contactez-Nous</button></Link>
            <p className="text-[14px] text-white">+555 555 555</p>
          </div>
        </div>
        <div  className="flex flex-row w-1/3 justify-between">
          <div className="flex flex-row gap-x-2">
            <img src="/images/telegram.svg" alt="social" className="w-[40px] h-[40px]" />
            <img src="/images/whatsapp.svg" alt="social" className="w-[40px] h-[40px]" />
          </div>
          <p className="text-[12px] text-white">1901 Rue Cir. Shiloh,<br />Tanger</p>
        </div>
      </div>
    </div>
  )
}

export default Footer