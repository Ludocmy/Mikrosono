import { NavLink } from "react-router-dom";
import SVGIcon from "../assets/MikrosonoLogo.svg?react";

export default function Navbar() {
  return (
    <div className ="bg-[#8c8c8c] p-4">
      <nav className="flex items-center">

          <NavLink to="/main.jsx">
              <SVGIcon alt="Mikrosono logo" className="h-20 w-20 hover:fill-blue-600"/>
          </NavLink>

          <div className = "flex-auto w-10"></div>

          <NavLink className="flex items-end justify-end whitespace-nowrap p-2 font-gravity text-4xl font-stretch-extended ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-background hover:text-blue-600" to="/create">
            Radio Shows
          </NavLink>

          <NavLink className="flex items-end justify-end whitespace-nowrap p-2 font-gravity text-4xl font-stretch-extended ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-background hover:text-blue-600" to="/create">
            Contact
          </NavLink>

      </nav>
    </div>
  );
}