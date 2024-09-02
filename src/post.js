/** @format */

import axios from "axios";
export function Post() {
  return axios.get("https://dummyjson.com/products/").then(function (response) {
    return response.data;
  });
}
