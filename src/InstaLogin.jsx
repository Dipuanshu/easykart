/** @format */

import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { IoIosMenu } from "react-icons/io";
import InstaMenu from "./InstaMenu";

function InstaLogin() {
  const [Menu, Setmenu] = useState(false);
  function LoginChecker(values) {
    console.log("Loginchecker runnning", values.email, values.password);
  }
  const schema = Yup.object().shape({
    //Yup mai ek object hai {email:hlw@codeyogi,password:123} to pahle uski shape check krenge ki password aur email object mai hai ya nhi.
    email: Yup.string().email(),
    password: Yup.string().min(8, "error bhi likh sakete hai kya dikani hai"), //maximum 8 wala validation lga diya//url wala bhi lga sakte ho
  });
  function hdadleMenuChange() {
    Setmenu(!Menu);
  }

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    handleBlur,
    touched,
    isValid,
    dirty, //user ne kuch change kiya hoga to intial value flase hogi//
  } = useFormik({
    //use formik ka function hai ye hadlesumbit,hadlechange,values etc)
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: LoginChecker,
    validationSchema: schema,
  });

  return (
    <>
      <button onClick={hdadleMenuChange}>
        <IoIosMenu className="items-end justify-end flex text-2xl sm:hidden" />
      </button>
      {Menu && <InstaMenu className="md:hidden" />}
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center ml-16">
          <img
            className="w-1/2 ml-20 h-5/6"
            src="https://www.91-cdn.com/hub/wp-content/uploads/2023/03/How-to-share-Instagram-profile-on-mobile-and-desktop.png"
          />
          <div className=" justify-end items-end flex flex-col mt-8 mr-96 gap-3">
            <div className="border border-gray-300 w-96">
              <div className=" justify-center items-center flex flex-col">
                <div className="mt-10">
                  <img
                    src="https://fontmeme.com/images/instagram-new-logo.png"
                    className=" w-60"
                  ></img>
                  <div className="text-sm">
                    <input
                      value={values.email}
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      autoComplete="email"
                      className=" border border-gray-300 focus:outline-none w-72 h-10"
                      placeholder=" Phone number,username,or email"
                    ></input>
                  </div>
                  {
                    touched.email && errors.email && (
                      //jaise email ko touch krke bhar jayenge to email ka touch store ho jayega//
                      <div className="text-red-500">{errors.email}</div>
                    )
                    //errors key mai email hai to iska mtlb email mai error hai to email error ko show kr do..
                  }
                  <div className="text-sm">
                    <input
                      value={values.password}
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur} //handleblur ka matlb jaise hi input se bhar niklega wo store krege//
                      required
                      autoComplete="password"
                      className=" border border-gray-300 focus:outline-none w-72 h-10"
                      placeholder="Password"
                    ></input>
                  </div>
                  {touched.password && touched.password && (
                    <div className="text-red-500">{errors.password}</div>
                  )}
                  <div>
                    <Link to="/HomePage/">
                      <button
                        type="sumbit"
                        disabled={!isValid}
                        className="w-72 h-10 bg-blue-700 disabled:bg-blue-400 broder rounded-md text-white mt-3 font-bold"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                  <div className="mt-5 font-light">
                    ____________________OR____________________
                  </div>
                  <div className=" text-blue-600 justify-center items-center flex mt-6">
                    <img
                      className="w-6 mr-2"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEU6VZ////80UZ309vqToMfM0uQyT5xbcK0uTZyXpMu5wNna3eni5fB0hLdida5SaqogRJjq7PRNZaehq80oSZpAW6NqfbN7i7qwudW+xdzGzeERPJRIYKSpss+LmcTU2OfuBL5hAAAC6klEQVR4nO3c23KrIACFYYuKxmM8RGu2ie//lm3vOtNNQDLA0ln/fWf4xgNGsFHEGGOMMcYYY4wxxtj5EkLmL5Khx2eaGK+juPXZVKubbqFHaVR+jebHZ7Hct7JS1qWtCD1QbfJfPhdbF3/oqjL0Ey2X02IAOQImF3VqBDkARtaLMQUbI0RTdDssyBhxe5Z7KMgYuQ67DgsyRrafZrewA2DEZH4TQ8fIZuflAoyR62ZhAcWMe2YXcMz1YWWBxIyJnQURk9d75xdcjOzvlhZATPTcPVnCYkRrMVuiYvKL9YGBw8jMarrExIyDvQUNI+xvZXiYvLa/YuAw0TtnGRjmvbMMDTPZPskAYqLknUvmo4PC3ArDYcfVlv6t6IHeNYvV7FGmHOYma//Whwb8TvQmv/y7pI+klOI/hQb8TrSVwWHJJNSglTV6TNrnoUdpltT/xiyng1giOevuzPEl9BiNk9ppJs2Ocb18J3SYeDjGEuxPWkw3H+bA6DHVYS5/A8zWID18vU6LSaGeJF9HDGrEoEYMasSgRgxqxKBGDGrEoEYMasQETvnZyKjHjK8+OfH/Uk2s80VRotsAWA2J6m9/arxrpMG6hWVP768I7TbGGjWfCFNN3m8P7jCb//UOd5i7/5Vzd5jCN8Ul5uF/nnGHGU6EiZ/+n3WcYar5RJhyOtFpFmCacYe5ryfCLLfzYOJHgA0PzjAhttW4wnTPALs3XGGq+kyYELs3XGG29kSYJcQ+YEeY+HP1b3GGGQJYnGGSEPvqXGH8v2dyh+nqE2HKIJsEHWHuIaYZV5giwA8AZ5gA75kiZ6sAjzEERrRDoUr39Wy3KP80yJ35O+XK11X3wXnaXg/zj9q0HzYArmkqO+ICrTJiUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY155gvTt5IUAsJbbkAAAAASUVORK5CYII="
                    />
                    <Link>Login with Facebook</Link>
                  </div>
                  <div className=" text-sm mt-6 mb-6 justify-center items-center flex">
                    <Link>Forget Password?</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 w-96 justify-center items-center flex h-16">
              Don't have an account?{" "}
              <div className="text-blue-600">Sing Up</div>
            </div>
            <div className=" w-96 justify-center items-center flex flex-col border border-none">
              <p>Get the app.</p>
              <div className="flex mt-2 gap-2">
                <img
                  className="w-28"
                  src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                />
                <img
                  className="w-28"
                  src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default InstaLogin;
