/** @format */
import axios from "axios";

export function getProductData(id) {
  return axios
    .get("https://dummyjson.com/product/" + id)
    .then(function (response) {
      return response.data;
    });
  // server s api call kerke data mangyega//isme ek hi product aayega but uski puri detail aayegi//
}

export function getProductList() {
  return axios.get("https://dummyjson.com/product");
  // y asynchrouns function hai isme itni jaldi deta nhi aata pahle sever mai request jati hai uske baad
  //data aata hai xyz ek token hai isme deta nhi aayega iska use krenge baad mai tabhi data milega..
  //xyz.then((data) => {
  // console.log("data aa gya", data);
  //});
  //jab xyz (promise) puri ho jayegi then(method) mai y krunga wo krunga ..
  console.log("aage ka code"); //pahle y run hoga kyuki uper wale mai data aane mai time lgega..
}
