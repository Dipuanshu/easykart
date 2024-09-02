/** @format */

import axios from "axios";

export function getInsta() {
  return axios.get("https://dummyjson.com/posts");
}
