/** @format */

import React from "react";
import { Navigate, Route } from "react-router-dom";
import WithUser from "./WithUser";
//ye sb isliye likh rhe hai taki baar baar na likhna pde//alag nhi likhna pdega
function AuthRoute({ user, children }) {
  if (user) {
    return <Navigate to={"/"} />;
  }
  {
    return children;
  }
}
export default WithUser(AuthRoute);
