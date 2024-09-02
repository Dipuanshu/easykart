/** @format */

import axios from "axios";

export function getPhoto(id) {
  // server s api call kerke data mangyega//isme ek hi product aayega but uski puri detail aayegi//
}
export function getPhoto() {
  return axios.get("https://api.slingacademy.com/v1/sample-data/photos");
}
