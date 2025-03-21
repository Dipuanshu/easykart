/** @format */

import React, { useState, useEffect } from "react";

import { getProductData } from "./api";
import Loading from "./Loading";
import Notfound from "./Notfound";
import NavBottom from "./NavBottom";

import { GiCrossedSabres } from "react-icons/gi";

import NotItem from "./NotItem";
function Cart({ cart, updateCart }) {
  const [CartList, setCartList] = useState([]);
  console.log("cartList",CartList);
  const [loading, setloading] = useState(true);
  const [localCart, setlocalCart] = useState(cart);

  const ProductIds = Object.keys(cart);

  useEffect(
    function () {
      setlocalCart(cart);
    },
    [cart]
  );
useEffect(() => {
  async function fetchProducts() {


    if (ProductIds.length === 0) {
      setCartList([]); // Explicitly set CartList to empty if cart is empty
      setloading(false);
      return;
    }

    const myProduct = [];

    for (let i = 0; i < ProductIds.length; i++) { // Fix loop condition
      try {
        const product = await getProductData(ProductIds[i]);
        myProduct.push(product);

        if (myProduct.length === ProductIds.length) {
          setCartList(myProduct);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }
    setloading(false);
  }

  fetchProducts();
}, [cart]);

  if (!localStorage.getItem("token")) {
    return <NotItem />;
  }
  if (loading) return <Loading />;
  if (!CartList)
    return (
      <div className="text-lg text-center text-red-700">
        <Notfound />
      </div>
    );
  function handleRemove(event) {
    const productid = event.currentTarget.getAttribute("productId"); //jo current Target hai usme to altribute hai uski value de dega..
    const newCart = { ...cart };
    delete newCart[productid];
    updateCart(newCart); 
  }
  function hadleChange(newvalue, productid) {
    const NewlocalCart = { ...localCart, [productid]: newvalue };
    setlocalCart(NewlocalCart);
  }
  function UpdateCart() {
    updateCart(localCart);
  }
  return (
    <>
      <div className="flex p-5 mx-1 mt-8 text-sm bg-gray-400 border border-black gap-14 md:mx-12 md:text-base md:gap-8">
        <div className="px-0 ml-8 font-bold md:ml-0 md:px-36">Product</div>
        <div className="flex gap-3 font-bold md:mx-12 md:gap-44">
          <div>Price</div>
          <div>Quantity</div>
          <div className="mx-0 md:mx-10">Total</div>
        </div>
      </div>

      {CartList.map(function (p) {
        return (
          <>
            <div className="mx-1 text-xs border border-black md:mx-12 md:text-base">
              <div className="flex items-center px-1">
                <button
                  className="w-4 md:w-6 md:ml-12"
                  productId={p.id}
                  onClick={handleRemove}
                >
                  <GiCrossedSabres />
                </button>
                <img
                  className="object-cover w-12 md:w-20 md:h-20"
                  src={p.thumbnail}
                />
                <div className="w-20 md:w-72">{p.title}</div>

                <div className="items-center w-12 ml-2">${p.price}</div>
                <input
                  productId={p.id}
                  type="number"
                  value={localCart[p.id]}
                  onChange={function (event) {
                    hadleChange(+event.target.value, p.id);
                  }}
                  className="w-10 pl-4 ml-3 border border-black md:ml-44"
                ></input>
                <div className="ml-4 md:ml-60">{p.price * localCart[p.id]}</div>
              </div>
            </div>
          </>
        );
      })}
      <div className="flex items-center justify-between px-2 mx-1 text-xs border border-black md:p-3 md:px-8 md:mx-12 md:text-base">
        <div className="items-center justify-center py-2 md:flex md:gap-5">
          <div>
            <input
              placeholder="Cupone Code"
              className="w-32 border-2 border-gray-400 md:px-1"
            />
          </div>
          <div>
            <button
              onClick={UpdateCart}
              className="md:px-4 md:py-0.5 text-white bg-red-600 rounded-sm mt-2 md:mt-0 p-1 md:p-0"
            >
              APPLY CUPON
            </button>
          </div>
        </div>
        <div>
          <button
            onClick={UpdateCart}
            className="md:px-4 py-0.5 text-white bg-red-400 rounded-sm px-1"
          >
            UPADATE CART
          </button>
        </div>
      </div>
      <div className="pr-1 text-xs md:pr-12 md:text-base">
        <div className="flex items-end justify-end mt-5">
          <div className="text-sm font-bold bg-gray-300 border border-black w-44 md:text-xl md:w-72">
            <div className="p-3">Cart totals</div>
          </div>
        </div>
        <div className="flex items-end justify-end ">
          <div className="font-bold border border-black text-md md:w-72 w-44">
            <div className="p-3">Subtotal:</div>
          </div>
        </div>
        <div className="flex items-end justify-end ">
          <div className="font-bold border border-black text-md md:w-72 w-44">
            <div className="p-3">Total:</div>
          </div>
        </div>
        <div className="flex items-end justify-end ">
          <div className="p-1 font-bold border border-black text-md md:w-72 w-44">
            <div className="flex items-center justify-center text-white bg-red-500 border rounded-md">
              PROCESSED TO CHECKOUT
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <NavBottom />
      </div>
    </>
  );
}
export default Cart;
