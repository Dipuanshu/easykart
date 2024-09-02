/** @format */

import React from "react";
import { Link } from "react-router-dom";
function From3() {
  return (
    <>
      <div className="flex">
        <img
          className="md:w-72 mt-20 invisible md:visible w-0 md:ml-20"
          src="https://images.unsplash.com/photo-1608037222022-62649819f8aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className=" md:mt-56 mt-48 md:ml-40 justify-center">
          <h1 className="font-bold md:text-4xl text-2xl justify-center items-center flex md:justify-start md:items-start">
            You're in the right place
          </h1>

          <div className="">
            <div className="flex flex-col text-xl mt-4 px-4 md:px-0 w-full ml-3 md:ml-0">
              <span>
                Brilliant gets you hands on to help improve your professional
              </span>
              <span>
                skills and knowledge. You'll interact with concepts and solve
              </span>
              <span>fun prblems in math,science,and computer science.</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" justify-center items-center flex md:mt-0 mt-14 md:mr-72">
        <button className="bg-blue-500 w-32 h-8 rounded-md text-white font-bold">
          <Link to="/nextPage/4">Continue</Link>
        </button>
      </div>
    </>
  );
}
export default From3;
