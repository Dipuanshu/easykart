/** @format */

import React from "react";
import { Link } from "react-router-dom";
function Product({ thumbnail, category, title, price, id }) {
  return (
    <div className="border border-black w-32 bg-green-500">
      <img className="w-32" src={thumbnail} />
      <div>{category}</div>
      <div>{title}</div>
      <div>Rs.{price}</div>
    </div>
  );
}
export default Product;
