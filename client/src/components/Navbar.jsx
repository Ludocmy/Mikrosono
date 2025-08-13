import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Search from "./Search.jsx";
import SVGIcon from "../assets/MikrosonoLogo.svg?react";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = React.useState(''); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className ="sticky top-0 left-0 bg-grey p-4 pr-5 pl-5 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">

            <NavLink to="/">
                <SVGIcon alt="Mikrosono logo" className="h-18 w-18 hover:fill-blue-600"/>
            </NavLink>

          </div>

          <div className="hidden sm:flex items-center space-x-4">

            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <NavLink className="font-gravity text-black text-3xl hover:text-blue-600" to="/create">
              Radio Shows
            </NavLink>

            <NavLink className="font-gravity text-black text-3xl hover:text-blue-600" to="/create">
              Events
            </NavLink>

          </div>

          <div className="sm:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black font-gravity text-4xl focus:outline-none">
                  ☰
              </button>
          </div>

      </div>

      {isMobileMenuOpen && (
          <div className="flex-col items-center justify-center mt-8 sm:hidden">

              <div className="w-full justify-center text-center p-4">

                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              
              </div>

              <div className="w-full justify-center text-center p-3">

                <NavLink className="font-gravity text-black text-3xl hover:text-blue-600" to="/create">
                  Radio Shows
                </NavLink>

              </div>

              <div className="w-full justify-center text-center p-3">

                <NavLink className="font-gravity text-black text-3xl hover:text-blue-600" to="/create">
                  Events
                </NavLink>

              </div>
              
          </div>
      )}

    </nav>
  );
}