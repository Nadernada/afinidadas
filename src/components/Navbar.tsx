import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-x-8 px-48 underline *:transition-colors">
      <Link to={'/co-working'} className="hover:text-orangey">Co-working</Link>
      <Link to={'/bureaux'} className="hover:text-orangey">Bureaux</Link>
      <Link to={'/reunion'} className="hover:text-orangey">Salle de reunion</Link>
      <div className="bg-bluey  rounded-b-full relative h-[130px] p-8 pt-6">
        <Link to={'/'} className="">
          <img src="/images/Logo-Afinidadas.png" alt="logo afinidadas" className="w-[150px]" />
        </Link>
      </div>
      <Link to={'/teambuilding'} className="hover:text-orangey">Teambuilding</Link>
      <Link to={'/formation'} className="hover:text-orangey">Formation</Link>
      <Link to={'/contact'} className="hover:text-orangey">Contact</Link>
    </div>
  )
}

export default Navbar