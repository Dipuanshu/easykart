/** @format */

import React from "react";
import Navbar from "./Navbar";
import NavBottom from "./NavBottom";
import { Link } from "react-router-dom";
function NotItem() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full mt-20 mb-36">
        <img
          className="object-cover w-52"
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        />
        <div className="mt-8 text-lg">Missing Cart items?</div>
        <div className="mt-3 text-xs">
          Login to see the items you added priviously
        </div>
        <button className="px-16 py-2 mt-5 text-white bg-orange-500">
          <Link to={"/login"}>Login</Link>
        </button>
      </div>
      <NavBottom />
    </>
  );
}
export default NotItem;
