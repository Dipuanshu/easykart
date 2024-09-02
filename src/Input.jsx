/** @format */

import React from "react";
import FormikHOC from "./FormikHOC";
function Input({ id, name, className, errors, touched, values, ...rest }) {
  console.log("touched,error", touched, errors);
  return (
    <div>
      <input
        className="border border-red-500 w-full"
        id={id}
        //values s email nikal di.

        //error jaldi aa rhi thi ab jb hm input s curser hayenge tab aayegi//
        //onblur matlb ek enput s duser input mai chle gye input s baher aane mai onblur call hoga.
        name={name}
        {...rest}
      />
      {touched && errors && <div className="text-red-500">{errors}</div>}
    </div>
  );
}
export const FormikInput = FormikHOC(Input);
export default Input;
