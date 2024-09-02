/** @format */

import React from "react";
import Product from "./Product";

function Porductlist({ products }) {
  return (
    <div className="md:grid grid-cols-3 gap-2 space-y-2 md:space-y-0 border mx-40 my-16">
      {products.map(function (item) {
        return (
          <div>
            <Product
              key={item.title}
              //object destructuring //grid grid-cols
              //{...item}//
              title={item.title}
              category={item.category}
              price={item.price}
              thumbnail={item.thumbnail}
              id={item.id}
            />
          </div>
        );
      })}
    </div>
  );
}
export default Porductlist;
