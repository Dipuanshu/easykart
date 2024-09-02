/** @format */

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className="flex items-center justify-stretch py-2 pr-24 border border-gray rounded-sm">
      <button className="px-3 text-xl text-gray-600">
        <AiOutlineSearch />
      </button>
      <input
        className=" focus:outline-none"
        placeholder="Search Product & Brands"
      />
    </div>
  );
}
export default SearchBar;
