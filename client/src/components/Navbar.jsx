import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Search from "./Search.jsx";
import SVGIcon from "../assets/MikrosonoLogo.svg?react";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = React.useState(''); 

  return (
    <div className ="sticky top-0 left-0 bg-grey p-4 pr-5 pl-5 z-50">
      <nav className=" flex items-center">

            <NavLink to="/">
                <SVGIcon alt="Mikrosono logo" className="h-18 w-18 hover:fill-blue-600"/>
            </NavLink>

            <div className = "flex-auto w-10"></div>

            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <NavLink className="flex items-end justify-end whitespace-nowrap pr-5 pl-5 not-first:font-gravity text-3xl font-stretch-extended ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-background hover:text-blue-600" to="/create">
              Radio Shows
            </NavLink>

            <NavLink className="hidden items-end justify-end whitespace-nowrap pr-5 pl-5 font-gravity text-3xl font-stretch-extended ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-background hover:text-blue-600 sm:flex" to="/create">
              Events
            </NavLink>

            {/* {isMobileMenuOpen && (
                <div className="mt-4 sm:hidden">
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-2 rounded-md bg-gray-700 text-white w-full mb-2"
                    />
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full mb-2">
                        Search
                    </button>
                    <div className="space-y-2">
                        <Link to="/cart" className="text-white flex items-center">
                            <FiShoppingCart className="mr-1" />
                            Cart
                            <span className='bg-blue-500 text-white rounded-full px-2 py-1 ml-2'>{cartItems.length}</span>
                        </Link>

                        {userInfo && <div className="relative group ">
                            {renderProfileButton()}
                        </div>}

                        {userInfo?.isAdmin && <div className="relative group ">
                            {renderAdminButton()}
                        </div>}

                        {!userInfo && renderSignInButton()}

                    </div>
                </div>
            )} */}

      </nav>
    </div>
  );
}