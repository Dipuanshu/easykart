/** @format */
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { dataFromApi } from "./dataFromApi";
import { useState } from "react";
import { getProductData } from "./api";
import Loading from "./Loading";
import Notfound from "./Notfound";
import Navbar from "./Navbar";
function ProductDetail({ onAddtoCart, productCount }) {
  const id = +useParams().id; //use prams n ek object diya usse id nikali aur + lga k number mai cover ker diya privious aur next mai dikkat aa rhi thi//
  console.log("productdetailrunning", id);
  //yha per pormis puri nhi hui matlb product data nhi aaya to setproductlist call nhi hoga to
  //product undefined rhega jisse spinner ghumte rhega//
  const [product, setProduct] = useState();
  console.log("proudct is data", product);
  console.log("product", product);
  const [loading, setloading] = useState(true);
  const [count, setcount] = useState(1);
  useEffect(
    function () {
      const p = getProductData(id);
      p.then(function (product) {
        //JO ERROR THEN KO MILI WO ERROR AAGE PASS KER DEGA//
        setProduct(product);
        console.log("product", product);
        setloading(false);
      }).catch(function () {
        setloading(false);
      });
    },
    [id] //dependncy mai id isliye di kyuki id change hone per function run kerwana hai//
  );
  function hadlecountChange(event) {
    setcount(+event.target.value);
  }
  function onButtonClick() {
    onAddtoCart(id, count);
    setcount(1); //set count add to cart k count ko cotrol krega//
  }
  function OncountSet() {
    setcount(1);
  }
  function onpriviCountChange() {
    setcount(1);
  }
  if (loading) return <Loading />;
  if (!product)
    return (
      <div className="text-center text-red-700 text-lg">
        <Notfound />
      </div>
    );

  return (
    <>
      <Navbar productcount={productCount} />
      <Link className="border border-green-500 rounded-md bg-green-500" to="/">
        back to home
      </Link>
      <div className="h-full">
        <div className="bg-red-500">
          <img className="w-96 md:w-64" src={product.thumbnail} />
          <div>
            <h1 className="text-3xl">{product.title}</h1>
            <h2>{product.description}</h2>
          </div>
          <input
            className="border border-gray-500 rounded-md w-8"
            type="number"
            value={count}
            onChange={hadlecountChange}
          />
          <button
            className="bg-blue-500 px-2 py-1 rounded-md"
            onClick={onButtonClick}
          >
            Add to cart
          </button>

          {id > 1 && (
            <Link
              className="border border-green-500 rounded-md bg-green-500"
              to={"/view Detail/" + (id - 1)}
              onClick={onpriviCountChange}
            >
              back to previous
            </Link>
          )}
          <Link
            className="border border-green-500 rounded-md bg-green-500"
            to={"/view Detail/" + (id + 1)}
            onClick={OncountSet}
          >
            back to Next
          </Link>
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
