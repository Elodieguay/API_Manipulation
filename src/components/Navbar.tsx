// import {BsFillHeartFill} from "react-icons/bs"
import { Link } from "react-router-dom"



const Navbar = () => {

  return (
    <div className=" sm:flex sm:justify-between md:mx-10 items-center ">
        <Link to="/" >
          <h1 className=" font-handlee   sm:pl-6 font-bold md:text-4xl  text-slate-700 text-xl text-center">Un Mot ... des Films</h1>
        </Link>
        <Link to="/favoris">
          <h1 className="  self-center font-semibold sm:text-xl text-base text-slate-700">Mes favoris</h1>
        </Link>
    </div>
  )
}

export default Navbar