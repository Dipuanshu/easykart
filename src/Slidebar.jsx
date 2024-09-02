/** @format */

import React from "react";
import Assingment from "./Assingment";
import Lacture from "./Lacture";
import { Link } from "react-router-dom";

function Slidebar() {
  return (
    <div className="w-32 bg-gray-300 h-screen flex flex-col space-y-3">
      <Link to="/productlist">porductlist </Link>
      <Link to="/productdetail">productdetail</Link>
    </div>
  );
} //we are using link tag kyuki link tage ko pta hai ki ek hi page hai//
//anchore tag page to relode kr rha tha isme spiner bhi ghum rha tha//
export default Slidebar;
