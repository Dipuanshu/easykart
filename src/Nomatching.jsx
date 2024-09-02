/** @format */

import React, { useEffect } from "react";
function Nomatching({ children }) {
  console.log("Nomatching reruning");
  useEffect(function () {
    console.log("useeffect running");
  }, []);
  return (
    <div className="bg-red-500">{children}</div> //hardcoded deta nhi dikhyenge sidhe prodctlist mai hi linkhege//
  );
}
export default Nomatching;
