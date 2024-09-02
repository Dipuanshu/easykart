/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Hmberger(className) {
  return (
    <>
      <div
        className={"bg-green-500 flex flex-col space-y-5 text-2xl" + className}
      >
        <Link>Home</Link>
        <Link>Content</Link>
        <Link>About Us</Link>
        <Link>carrers</Link>
      </div>
    </>
  );
}
export default Hmberger;
