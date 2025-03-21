/** @format */

import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import ProductlistPage from "./ProductlistPage";
import { useSearchParams } from "react-router-dom";
import { object } from "yup";

function Navsearchbar(id) {
  const [searchParams, setSearchParams] = useSearchParams();
 const params = Object.fromEntries([...searchParams]);
 const path=window.location.pathname;
let Id=id.id;

 let { sort, query } = params;
 
  sort = sort || "default";
  query = query || "";

  function handleChange(event) {
    setSearchParams({ ...params, query: event.target.value});
  }


  return (
    <div className="flex items-center py-2 border rounded-sm bg-white w-96 justify-between">
      <div className="w-full">
      <input
      disabled={path=="/products/"+Id || path=="/login"}
        className=" focus:outline-none px-2 w-full"
        placeholder="Search Product & Brands"
        value={query}
        onChange={handleChange}
      />
      </div>
      <div>
      <button
        className="px-3 text-2xl text-blue-500"
       
      >
        <FaSearch />
      </button>
      </div>
    </div>
  );
}
export default Navsearchbar;
