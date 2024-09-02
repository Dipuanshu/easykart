/** @format */

import React from "react";
import FormikHOC from "./FormikHOC";
function FancyInput({ id, name, className, error, touched, ...rest }) {
  console.log("touched,error", touched, error);
  return (
    <div>
      <input
        className=" border-2 border-green-700 w-60"
        id={id}
        //values s email nikal di.

        //error jaldi aa rhi thi ab jb hm input s curser hayenge tab aayegi//
        //onblur matlb ek enput s duser input mai chle gye input s baher aane mai onblur call hoga.
        name={name}
        {...rest}
      />
      {touched && error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
export const FormikFancyInput = FormikHOC(FancyInput);
export default FancyInput;
