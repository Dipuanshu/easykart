/** @format */
import React from "react";
import { Navigate } from "react-router-dom";
import WithUser from "./WithUser";
import { UserContext } from "./Contexts";
import WithProvider from "./WithProvider";
function UserRoute({ user, children }) {
  //children sare props leta hai ap open tag<> aur close tag k bich mai kuch bhi likh do wo bhi children tak phuch jayega//
  //children aisi props hai jisme aya to text diya jayega aur ya html//
  if (!user) {
    //user nhi hai to login
    return <Navigate to={"/login"} />;
  }
  {
    return <div>{children}</div>; //div lagate hi jsx start ho jayegi fir ye children as a text treate hoga. {} ka use krna pdega.
  }
}
export default WithUser(UserRoute);
