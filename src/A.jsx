/** @format */

import React, { useContext, useState } from "react";
import B from "./B";
export const CountContext = React.createContext();
function A() {
  const [count, setcount] = useState(0);
  const data = { count, setcount };

  return (
    <div>
      <CountContext.Provider value={data}>
        <B />
      </CountContext.Provider>
    </div>
  );
}
export default A;
