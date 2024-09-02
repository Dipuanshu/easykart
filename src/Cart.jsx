/** @format */

import React, { useState, useEffect } from "react";

import { getProductData } from "./api";
import Loading from "./Loading";
import Notfound from "./Notfound";

import { GiCrossedSabres } from "react-icons/gi";
function Cart({ cart, updateCart }) {
  const [CartList, setCartList] = useState([]);
  const [loading, setloading] = useState(true);
  const [localCart, setlocalCart] = useState(cart);

  const ProductIds = Object.keys(cart);
  useEffect(
    function () {
      setlocalCart(cart);
    },
    [cart]
  );
  useEffect(
    function () {
      const myProduct = [];

      for (let i = 0; i < ProductIds.length; i++) {
        const p = getProductData(ProductIds[i]);
        p.then(function (product) {
          //JO ERROR THEN KO MILI WO ERROR AAGE PASS KER DEGA//
          myProduct.push(product);
          if (ProductIds.length == myProduct.length) {
            //Codition lgane ka karan ye hai ki myproduct mai jaise hi 2 product aare hai wasie hi set ho ja rhe hai jisse hme 2 product ka data mil rha hai jaise hi myproduct 3 hoga tab jake set hoga//
            setCartList(myProduct);
            console.log("myproduct", myProduct);
          }

          setloading(false);
        }).catch(function () {
          setloading(false);
        });
      }
    },
    [cart] //dependncy mai id isliye di kyuki id change hone per function run kerwana hai//
  );

  if (loading) return <Loading />;
  if (!CartList)
    return (
      <div className="text-center text-red-700 text-lg">
        <Notfound />
      </div>
    );
  function handleRemove(event) {
    const productid = event.currentTarget.getAttribute("productId"); //jo current Target hai usme to altribute hai uski value de dega..
    const newCart = { ...cart };
    delete newCart[productid];
    updateCart(newCart);
    console.log(newCart);
  }
  function hadleChange(newvalue, productid) {
    console.log("newvalue,productId", newvalue, productid);
    const NewlocalCart = { ...localCart, [productid]: newvalue };
    setlocalCart(NewlocalCart);
  }
  function UpdateCart() {
    updateCart(localCart);
  }
  return (
    <>
      <div className="bg-gray-400 p-5 mx-12 border border-black mt-8 flex">
        <div className=" font-bold px-40">Product</div>
        <div className="flex font-bold mx-5 gap-48">
          <div>Price</div>
          <div>Quantity</div>
          <div className="mx-10">SubTotal</div>
        </div>
      </div>

      {CartList.map(function (p) {
        return (
          <>
            <div className="border border-black mx-12 items-center px-8 flex">
              <button className="w-6" productId={p.id} onClick={handleRemove}>
                <GiCrossedSabres />
              </button>
              <div>{<img src={p.thumbnail} className="w-20" />}</div>
              <div className="grow">{p.title}</div>

              <div className=" items-center w-18 ">${p.price}</div>
              <input
                productId={p.id}
                type="number"
                value={localCart[p.id]}
                onChange={function (event) {
                  hadleChange(+event.target.value, p.id);
                }}
                className=" items-center w-10 mx-40 border border-black"
              ></input>
              <div>{p.price * localCart[p.id]}</div>
            </div>
          </>
        );
      })}
      <button onClick={UpdateCart} className="bg-blue-900">
        Update
      </button>
    </>
  );
}
export default Cart;
