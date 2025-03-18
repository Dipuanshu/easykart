/** @format */

import React from "react";
import { BiUser } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function ForgetPage() {
  function callForgetApi(values) {
    console.log("sending data", values.email);
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter the email"),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: callForgetApi,
    validationSchema: schema,
    validateOnMount: true,
  });

  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <form onSubmit={handleSubmit} className="flex flex-col p-5 w-96">
        <FaRegUserCircle className="self-center text-blue-400 text-8xl" />
        <div className="mt-2 mb-4 text-4xl font-semibold text-center">
          Enter your email to reset Password
        </div>
        <div className="flex items-center mt-2 mb-2 border border-gray-500 border-box">
          <label htmlFor="email-address" className="sr-only"></label>
          <div className="border-r border-gray-500">
            <BiUser className="m-2 text-2xl" />
          </div>
          <input
            value={values.email}
            id="email-address"
            name="email"
            type="email"
            onBlur={handleBlur}
            onChange={handleChange}
            className="relative block w-full px-3 py-2 placeholder-gray-500 border-black rounded-sm appearance-none focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        {touched.email && errors.email && (
          <div className="flex items-center text-sm text-red-600">
            <BiError />
            {errors.email}
          </div>
        )}

        <button
          type="submit"
          className="py-2 mt-6 font-bold text-white bg-blue-800 rounded-md disabled:bg-blue-200"
          disabled={!isValid}
        >
          Reset Password
        </button>
        <Link
          to={"/login"}
          className="self-center mt-2 text-blue-800 underline"
        >
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default ForgetPage;
