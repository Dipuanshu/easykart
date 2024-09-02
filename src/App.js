/** @format */

import React, { useEffect, useState } from "react";
import ProductlistPage from "./ProductlistPage";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar";
import Notfound from "./Notfound";
import Login from "./Login";
import FancyInput from "./FancyInput";
import Cart from "./Cart";
import Test from "./Test";

//prante s child ko data be

const a = `{ "name": "deepankar", "price": 25, "class": "bcath" }`; //string jaisa object//
const b = JSON.parse(a); //it is used to convert stirng to object//
const c = JSON.stringify(b); //it is used ot convert objcet to string//

console.log(b["price"], typeof b); // a[price] gives a error stirng s value read nhi kr sakti//

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  //Local storage mai String ki from mai data save hota hai tabhi hamne json.parse() and json.stringfy() Pda.

  const [cart, setcart] = useState(savedData);
  console.log("cart is", cart); //usestate mai jo data saved hai wo dalenge jisse intial wo hi dikhe//
  const path = window.location.pathname;
  function handletoCart(productid, count) {
    const oldcount = cart[productid] || 0;
    const newcart = { ...cart, [productid]: oldcount + count };
    updateCart(newcart);
    //upadate krega setcart ko//
    //ye objcet string ko simple string mai change krega kyuki local storage mai data string ki from mai hi save hota hai//
    //name hai my-cart jis name s data local storage mai save hoga
    //setItem store krne k liye aur getItem nikalne k liye jis name s save kiya hai//
  }
  function updateCart(newcart) {
    setcart(newcart);
    const cartString = JSON.stringify(newcart);
    localStorage.setItem("my-cart", cartString);
  }
  const totalcount = Object.keys(cart).reduce(function (privious, current) {
    //array k from mai data dega key,value aur reduce use add kr dega
    // 1st time mai reduce priv ko 0 dega
    //kaise hoga priv=0 + current=4 = 4;
    //next priv=4 + current=6 = 10;
    return privious + cart[current];
  }, 0);

  const [query, setquery] = useState("");
  function hadlesearch(event) {
    setquery(event.target.value);
  }
  useEffect(
    function () {
      console.log("api call fnction", query);
    },
    [query]
  );
  //key mai function bhi store kr satkte hai
  // const e={
  // hello:function(){

  // }

  //overflow scrool overflow ko scrool mai add krke dikayega//
  //grwo propety not working//
  return (
    <div>
      <Routes>
        <Route index element={<Login />}></Route>
      </Routes>

      <Routes>
        <Route
          path="/view Detail/:id"
          element={
            <ProductDetail
              onAddtoCart={handletoCart}
              productCount={totalcount}
            />
          }
        ></Route>

        <Route
          path="/Homepage/"
          element={<ProductlistPage productCount={totalcount} />}
        ></Route>
        <Route
          path="/Homepage/Cart"
          element={<Cart cart={cart} updateCart={updateCart} />}
        ></Route>
        <Route path="/Homepage/Cart/Test" element={<Test />}></Route>
      </Routes>
    </div>
  );
}
export default App;
