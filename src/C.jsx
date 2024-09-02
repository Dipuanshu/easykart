/** @format */

import React, { useContext } from "react";
import { CountContext } from "./A";
function C() {
  const data = useContext(CountContext);
  console.log(data);
  return <div></div>;
}
export default C;
