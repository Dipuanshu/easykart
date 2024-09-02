/** @format */

import React from "react";
import SearchBar from "./SearchBar";
import { CgProfile } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { RiUserHeartLine } from "react-icons/ri";

function Nav() {
  return (
    <div className="flex bg-white font-medium px-5 items-center justify-between">
      <div className="py-3 flex items-center  ">
        <imgpng
          className="h-16"
          src="https://images.indianexpress.com/2021/01/myntra."
        />
        <div className="py-3 flex gap-x-5 items-center text-sm font-bold text-gray-700 ">
          <h2>MEN</h2>
          <h2>WOMEN</h2>
          <h2>KIDS</h2>
          <h2>HOME & LIVING</h2>
          <h2>BEAUTY</h2>
          <h2>STUDIO</h2>
        </div>
      </div>
      <SearchBar />
      <div className="flex mx-5 gap-x-5">
        <div className="flex flex-col items-center">
          <CgProfile className="text-xl" />
          <h1 className="text-xs">Profile</h1>
        </div>
        <div className="flex flex-col items-center">
          <RiUserHeartLine className="text-xl" />
          <h1 className="text-xs">Wishlist</h1>
        </div>
        <div className="flex flex-col items-center">
          <BsHandbag className="text-xl" />
          <h1 className="text-xs">Bag</h1>
        </div>
      </div>
    </div>
  );
}
export default Nav;



//import React from "react";
//import Nav from "./Nav";
//import Navhome from "./Navhome";
//function App() {
 // return (
   // <>
      <Nav />
      <div className="flex flex-wrap gap-3">
        <Navhome />
        <Navhome />
        <Navhome />
        <Navhome />
        <Navhome />
        <Navhome />
        <Navhome />
        <Navhome />
        <Navhome />
      </div>
    </>
  );
}
export default App;//.

