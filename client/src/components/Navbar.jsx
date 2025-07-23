import { NavLink } from "react-router-dom";
import SVGIcon from "../assets/MikrosonoLogo.svg?react";

export default function Navbar() {
  return (
    <div className ="bg-[#8c8c8c] p-4 pr-5 pl-5">
      <nav className="flex items-center">

          <NavLink to="/">
              <SVGIcon alt="Mikrosono logo" className="h-18 w-18 hover:fill-blue-600"/>
          </NavLink>

          <div className = "flex-auto w-10"></div>

          <NavLink className="flex items-end justify-end whitespace-nowrap pr-5 pl-5 not-first:font-gravity text-4xl font-stretch-extended ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-background hover:text-blue-600" to="/create">
            Radio Shows
          </NavLink>

          <NavLink className="flex items-end justify-end whitespace-nowrap pr-5 pl-5 font-gravity text-4xl font-stretch-extended ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-background hover:text-blue-600" to="/create">
            Events
          </NavLink>

          <NavLink className="flex items-end justify-end whitespace-nowrap pr-5 pl-5 font-gravity text-4xl font-stretch-extended ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-background hover:text-blue-600" to="/create">
            About
          </NavLink>

          <NavLink className="flex items-end justify-end whitespace-nowrap pr-5 pl-5 font-gravity text-4xl font-stretch-extended ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-background hover:text-blue-600" to="/create">
            Contact
          </NavLink>

          <NavLink className="flex items-end justify-end whitespace-nowrap pr-5 pl-5 font-gravity text-4xl font-stretch-extended ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-background hover:text-blue-600" to="/create">
            · · ·
          </NavLink>

      </nav>
    </div>
  );
}