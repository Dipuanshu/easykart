/** @format */

import React, { useState, useEffect } from "react";
import { getInsta } from "./InstaApi";

function InstaPostList() {
  const [list, setlist] = useState([]);

  useEffect(function () {
    const xyz = getInsta();
    //THEN K ANDER KA FUNCTION TABHI RUN HOGA JAB PROMISE PURI HOGI//
    //CATCH K ANDER KA FUNCTION TABHI RUN HOGA JAB PROMISE FAIL HOGI//
    xyz.then((response) => {
      console.log("data aa gya", response.data.products);
      const d = response.data.products;
      setlist(d);
    });
  }, []);
}

export default InstaPostList;
