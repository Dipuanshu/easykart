/** @format */

import {React} from "react";
import { Routes, Route} from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar";
import ProductlistPage from "./ProductlistPage";
import Notfound from "./Notfound";
import Cart from "./Cart";
import Login from "./Login";

import SignUp from "./SignUp";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";
import UserProvider from "./UserProvider";
import { useState } from "react";
import { useEffect } from "react";
import AlertProvider from "./AlertProvider";
import NotItem from "./NotItem";

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
  function handletoCart(id, count) {
    const oldcount = cart[id] || 0;
    const newcart = { ...cart, [id]: oldcount + count };
    updateCart(newcart);

  }
  function updateCart(newcart) {
    setcart(newcart);
    const cartString = JSON.stringify(newcart);
    localStorage.setItem("my-cart", cartString);
  }
  const totalcount = Object.keys(cart).reduce(function (privious, current) {

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
 return (
  <>
    <UserProvider>
      <AlertProvider>
        <div className="flex flex-col h-screen bg-slate-100 overflow-scroll">
          <div className="grow">
            <Routes>
              <Route index element={<UserRoute><ProductlistPage productCount={totalcount} /></UserRoute>} />
              <Route path="/products/:id/" element={<UserRoute><ProductDetail onAddToCart={handletoCart}  productCount={totalcount} /></UserRoute>} />
              <Route path="/cart" element={<UserRoute><Cart cart={cart} updateCart={updateCart}/></UserRoute>} />
              <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
              <Route path="/signup" element={<AuthRoute><SignUp /></AuthRoute>} />
              <Route path="/NoItem" element={<AuthRoute><NotItem /></AuthRoute>} />
            </Routes>
          </div>
        </div>
      </AlertProvider>
    </UserProvider>


    </>
 );
}
export default App;
