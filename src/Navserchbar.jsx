/** @format */

import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import ProductlistPage from "./ProductlistPage";
import { useSearchParams } from "react-router-dom";

function Navsearchbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  const handleClick = () => {
    setSearchParams({ query: inputValue });
  };

  return (
    <div className="flex items-center py-2 border rounded-sm bg-white">
      <input
        className=" focus:outline-none px-2"
        placeholder="Search Product & Brands"
        value={inputValue}
        onChange={handleInput}
      />
      <button
        className="px-3 text-2xl text-blue-500 ml-40"
        onClick={handleClick}
      >
        <FaSearch />
      </button>
    </div>
  );
}
export default Navsearchbar;
