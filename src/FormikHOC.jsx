/** @format */

import React from "react";
import { useField } from "formik";
function FormikHOC(IncomingComponent) {
  function OutgoingComponent(id, name, ...rest) {
    const field = useField(name); //ye use context ko call krke sara data mangwa lega.name email etc
    //name ka matlb kon se wale ka deta chahiye uska name jaise email,password ki aarry aayegi//
    console.log("name", field);
    const [data, meta] = field; //Data mai main information hoti hai aur Meta mai addtional infromation hoti hai//
    const { onChange, onBlur, value } = data;
    const { error, touched } = meta;
    console.log("error", error);

    return (
      <div>
        <div>
          <IncomingComponent
            id={id}
            value={value} //values s email nikal di.
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            touched={touched}
            //error jaldi aa rhi thi ab jb hm input s curser hayenge tab aayegi//
            //onblur matlb ek enput s duser input mai chle gye input s baher aane mai onblur call hoga.

            name={name}
            {...rest}
          />

          {/*jb user email ko touch kr ke bhar aayega tab dikegi error*/}
        </div>
      </div>
    );
  }
  return OutgoingComponent;
}
export default FormikHOC;
