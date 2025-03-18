/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { UserContext } from "./Contexts";

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [userloading, setuserloading] = useState(true);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token, //Headers ke authriztion mai token sand krenge aur wo wha se data return krega
          },
        })
        .then((response) => {
          setUser(response.data);
          setuserloading(false);
        });
    } else {
      setuserloading(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider> //jo wha inke bich mai tha sb yha aa jayega//
  );
}
export default UserProvider;
