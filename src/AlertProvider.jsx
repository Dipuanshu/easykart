/** @format */

import React, { useState, createContext } from "react";
import { AlertContext } from "./Contexts";
function AlertProvider({ children }) {
  const [alert, setAlert] = useState();
  const RemoveAlert = () => {
    setAlert(undefined);
  };
  return (
    <AlertContext.Provider value={{ alert, setAlert, RemoveAlert }}>
      {children}
    </AlertContext.Provider>
  );
}
export default AlertProvider;
