import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

function Product({ title, price, id, category, thumbnail }) {
  return (
    <div className="rounded-md m-1 pb-5">
      <div className=" rounded-md border-black border-2">
        <Link to={"/products/" + id}>
          <img className="" src={thumbnail} />
        </Link>
      </div>
      <div className="ml-2">
        <div className="text-gray-500 text-xs my-2 ">{category}</div>
        <div className="font-bold my-2">{title}</div>
        <div className="font-bold text-md mt-1">$ {price}</div>
      </div>
    </div>
  );
}

export default Product;
