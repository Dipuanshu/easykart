/** @format */

import React from "react";
import Navsearchbar from "./Navserchbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";
import ProductlistPage from "./ProductlistPage";
import Hmberger from "./Hmberger";
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";

function Navbar({ productcount }) {
  const [menu, setmenu] = useState(false);
  function handlmenu() {
    setmenu(!menu);
  }
  function handleCart() {}
  return (
    <>
      <div className="border border-gray-300 invisible md:visible">
        <div className="flex bg-blue-500 gap-7 h-20 p-4 md:gap-2">
          <div className="ml-40">
            <img
              className="w-20"
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            />
            <div className="flex italic">
              <div className="text-0.1 text-white ">Explore</div>
              <div className="text-x text-yellow-500 font-bold">Pluse</div>
            </div>
          </div>
          <Navsearchbar />
          <div className="border-border-black bg-white w-32 h-10 mt-1 text-center py-2 text-blue-500 font-bold">
            <Link>Login</Link>
          </div>
          <div className="mt-3 text-white font-medium text-xl">
            Become a Saller
          </div>
          <div className="mt-3 text-white font-medium text-xl flex gap-1">
            More
            <div className="mt-1.5">
              <AiFillCaretDown />
            </div>
          </div>
          <Link to="/Homepage/Cart">
            <button onClick={handleCart}>
              <div className="flex gap-2">
                <div className="text-white mt-1 ml-1 flex flex-col items-center">
                  {" "}
                  <AiOutlineShoppingCart className="text-5xl" />
                  <div className=" -mt-10 ml-2 text-black font-bold">
                    {productcount}
                  </div>
                </div>

                <div className="text-white mt-3 text-xl font-medium">Cart</div>
              </div>
            </button>
          </Link>
        </div>
      </div>
      <Navbar2 />

      <FaHamburger
        className="text-red-500 text-5xl md:hidden"
        onClick={handlmenu}
      />
      {menu && <Hmberger className="md:hidden" />}
    </>
  );
}
export default Navbar;
