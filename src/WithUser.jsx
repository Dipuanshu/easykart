/** @format */

import React, { useContext } from "react";
import { UserContext } from "./Contexts";
function WithUser(IncomingComponent) {
  //isme incoming mai wo componet aayga jha HOC use hoga

  function OutgoingComponent(props) {
    const { user, setUser } = useContext(UserContext);
    return <IncomingComponent {...props} user={user} setUser={setUser} />; //user={user} setUser={setuser}
  }

  return OutgoingComponent;
}
export default WithUser;
