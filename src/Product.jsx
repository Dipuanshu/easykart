/** @format */

import React from "react";
import { Link } from "react-router-dom";
function Product({ thumbnail, category, title, price, id }) {
  //aspect squre ka use web ko responsive banane k liye krte hai isme image long nhi hoti
  //aur image squre image bni rahti hai//
  return (
    <div className="border">
      <img className=" w-full aspect-square" src={thumbnail} />
      <div className=" justify-center items-center flex">{category}</div>
      <div className=" justify-center items-center flex">{title}</div>
      <div className=" justify-center items-center flex">Rs.{price}</div>
      <Link to="/"></Link>
      <Link
        to={"/view Detail/" + id}
        className=" justify-center items-center flex"
      >
        view Detail
      </Link>
    </div>
  );
}
export default Product;
