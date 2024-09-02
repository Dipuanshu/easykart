/** @format */

import React from "react";
import Productset2 from "./productset2";

function Productset({ products }) {
  return (
    <div className="flex flex-wrap gap-10">
      {products.map(function (item) {
        return (
          <>
            <Productset2
              key={item.title}
              //object destructuring //
              //{...item}//

              title={item.title}
              price={item.price}
              thumbnail={item.thumbnail}
              id={item.id}
            />
          </>
        );
      })}
    </div>
  );
}
export default Productset;
