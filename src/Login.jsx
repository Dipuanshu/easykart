/** @format */

import axios from "axios";
import { Form, Formik, withFormik } from "formik";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import * as Yup from "yup";
import FormikInput from "./FormikInput";
import Input from "./Input";
function Loginapi(value) {
  console.log("LoginApi data", value.email, value.password);
}
const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});
const initialValues = {
  email: "",
  password: "",
};

function Login({
  handleSumbit,
  handleChange,
  errors,
  values,
  touched,
  handleBlur,
}) {
  return (
    <>
      <div className=" flex items-center justify-center w-full h-screen">
        <form
          onSubmit={handleSumbit}
          className="border border-none rounded-md py-4 p-10 bg-slate-500"
        >
          <div className="text-4xl font-bold flex flex-col">
            Login to Codeyogi
          </div>

          <div className=" border border-black rounded-sm w-72 flex flex-col ml-3 mt-2 py-1">
            <Input
              values={values.email}
              touched={touched.email}
              errors={errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              name="email"
              required
              placeholder="Email,Mobile"
              className="focus:outline-none"
            ></Input>
          </div>
          <div className="border border-black rounded-sm w-72 flex flex-col ml-3 mt-2 py-1">
            <Input
              className="focus:outline-none"
              values={values.password}
              touched={touched.password}
              errors={errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              name="password"
              required
              placeholder="Password"
            ></Input>
          </div>
          <div className="border border-black rounded-sm w-36 flex flex-col ml-20 mt-2 py-1 justify-items-center bg-red-500">
            <button type="sumbit">
              <Link to="/Homepage/">Login</Link>
            </button>

            {/*button mai onlick lagene se keyboard user use nhi kr payega iske liye use krenge from tag*/}
          </div>
        </form>
      </div>
    </>
  );
}
const myHOC = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  onSubmit: Loginapi,
});
const ImprovedLogin = myHOC(Login);
export default ImprovedLogin;
