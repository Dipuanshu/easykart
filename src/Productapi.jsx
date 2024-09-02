/** @format */

import { useEffect, useState } from "react";
import Porductlist from "./Productlist";
import Nomatching from "./Nomatching";
import { getProductList } from "./api";
import Productset from "./Productset";
import { dataFromApi } from "./dataFromApi";

function Productapi() {
  const [productlist, setProductList] = useState([]);

  useEffect(function () {
    const xyz = getProductList();
    xyz.then((response) => {
      console.log(response.data.products);
      const d = response.data.products;
      setProductList(d);
      dataFromApi.push(...d);
    });
  }, []);
  // useeffect tab tab apna code run krta hai jab  empty array mai koi change ho ya function relode ho//
  // jab productlist page call hoga to to prodct ki list bhi magani hogi//

  //to call krenge//

  console.log("bhar wala code");

  let data = productlist;

  return <div>{<Productset products={data} />}</div>;
}
export default Productapi;

