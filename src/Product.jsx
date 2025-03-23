import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

function Product({ title, price, id, category, thumbnail }) {
  return (
    
    <div className="rounded-md md:pb-5 flex flex-col items-center pb-2">
      <div className="aspect-square rounded-md border-black border-2 w-72">
        <Link to={"/products/" + id}>
          <img className="w-full h-full object-cover" src={thumbnail} />
        </Link>
      </div>
      <div className="ml-2 flex flex-col items-center ">
        <div className="text-gray-500 text-xs my-2">{category}</div>
        <div className="font-bold my-2">{title}</div>
        <div className="flex my-1 text-orange-600">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <div className="font-bold text-md mt-1">$ {price}</div>
      </div>
    </div>
   
  );
}

export default Product;