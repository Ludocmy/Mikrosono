import React from 'react';
import SearchIcon from "../assets/search.svg?react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="p-1 rounded-lg mx-5 border-black border-1">
      <div className='relative flex items-center'>
        <SearchIcon alt="Search Icon" className="absolute left-2 h-3 w-3"/>

        <input
            className='w-40 bg-transparent font-gravity text-center px-5 sm:pr-10 pl-10 text-base placeholder-black outline-hidden overflow-visible'
            type="text"
            placeholder=" Search here . . . "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}
export default Search