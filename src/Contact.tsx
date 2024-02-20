import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />

      <div className="w-full flex flex-row ps-24 my-20 items-center justify-center gap-x-32">
        <div className="flex flex-col">
          <h2 className="text-[54px] font-bold">Contactez-Nous</h2>
          <p className="text-[20px]">Avez-vous des questions ou de differents projets ?</p>

          <input type="text" name="name" id="name" placeholder="Nom Complet" className="p-4 mt-8 border-[1px] border-gray-200 rounded-2xl" />
          <input type="email" name="email" id="email" placeholder="E-mail *" className="p-4 mt-4 border-[1px] border-gray-200 rounded-2xl" />
          <input type="phone" name="phone" id="phone" placeholder="Télephone *" className="p-4 mt-4 border-[1px] border-gray-200 rounded-2xl" />
          <textarea name="msg" id="msg" cols={30} rows={5} className="p-4 my-4 border-[1px] border-gray-200 rounded-2xl"></textarea>

          <button className="w-full bg-orangey py-2 uppercase text-white font-semibold rounded-xl">envoyez</button>
        </div>

        <img src="/images/map.png" alt="map" className=" h-[650px] " />
      </div>



      <Footer />
    </div>
  )
}

export default Contact