/** @format */
//Dono same hai bs usercontext aur alertcontext mai diffrent hai to use provider mai le liya aur withProvider HOC return Krega//
//Provider mai userContext aur AlertContext sand krege//
import React, { useContext } from "react";

function WithProvider(provider) {
  console.log("provider", provider);
  function MyHOC(IncomingComponent) {
    //isme incoming mai wo componet aayga jha HOC use hoga

    function OutgoingComponent(props) {
      const { ContextData } = useContext(provider);
      console.log("cotextdat", ContextData);
      return <IncomingComponent {...props} {...ContextData} />;
      //user={user} setUser={setuser}
    }

    return OutgoingComponent;
  }
  return MyHOC;
}
export default WithProvider;
