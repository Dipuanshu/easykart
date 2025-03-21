import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className=" flex items-center justify-center md:px-20">
    <div className="md:grid grid-cols-3 gap-2 flex flex-col items-center">
      {products.map(function (item) {
        return <Product key={item.id} {...item} />;
      })}
    </div>
    </div>
  );
}

export default ProductList;
