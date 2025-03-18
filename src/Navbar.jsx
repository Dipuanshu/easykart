import React, { useState } from "react";
import Navsearchbar from "./Navserchbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import WithUser from "./WithUser";
import Hmberger from "./Hmberger";
import { FaHamburger } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdPower } from "react-icons/io";

function Navbar({ productcount, handSearch, setUser, id }) {
  const [menu, setmenu] = useState(false);

  function handlmenu() {
    setmenu(!menu);
  }

  function handleCart() {}

  function handleSearch(search) {
    handSearch(search);
  }

  return (
    <>
      <div className="flex items-center justify-between w-full py-4 pl-10 pr-2 bg-blue-500 md:gap-5 md:pl-48 md:justify-normal md:pr-0">
        <div>
          <img
            className="w-20"
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          />
          <div className="flex italic">
            <div className="text-0.1 text-white ">Explore</div>
            <div className="font-bold text-yellow-500 text-x">Pluse</div>
          </div>
        </div>

        <div className="hidden md:block">
          <Navsearchbar handleSearch={handleSearch} id={id} />
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-white md:ml-0">
            <CgProfile className="text-4xl font-bold" />
            <div className="hidden text-xl font-medium md:block">Account</div>
          </div>

          <Link to="/Homepage/Cart" onClick={handleCart}>
            <div className="flex items-center">
              <AiOutlineShoppingCart className="text-4xl text-white" />

              <div className="-mt-2 -ml-5 text-sm font-bold">
                {productcount}
              </div>

              <div className="items-center hidden ml-4 text-xl font-medium text-white md:block">
                Cart
              </div>
            </div>
          </Link>

          <div className="w-fit">
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setUser(undefined);
              }}
              className="flex items-center gap-2"
            >
              <IoMdPower className="pl-2 text-4xl font-bold text-white" />
              <div className="hidden text-xl font-medium text-white md:block">
                LogOut
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WithUser(Navbar);
