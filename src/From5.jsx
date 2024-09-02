/** @format */

import React from "react";
import { Link } from "react-router-dom";
function From5() {
  return (
    <>
      <div className="md:flex">
        <img
          className="md:w-72 ml-20 mt-10 invisible md:visible w-0"
          src="https://media.istockphoto.com/id/859371110/photo/best-of-luck.webp?b=1&s=170667a&w=0&k=20&c=PLBFCvhz7D36ZZ_24g1lsH9TUFo-wsruHqTwP_w45WE="
        />
        <div className="md:mt-44 md:mr-10 mt-36">
          <h1 className="font-bold md:text-4xl md:ml-36 text-2xl justify-center items-center flex md:justify-start md:items-start">
            You're on your way!
          </h1>
          <div className="justify-center items-center flex md:justify-start md:items-start">
            <img
              className="w-44 md:mt-5 mt-1 md:ml-36"
              src="https://media.istockphoto.com/id/1305196280/vector/five-golden-stars.jpg?s=612x612&w=0&k=20&c=Lb98WlfkCfQ1iiL0lXehj2SpOyloTbanzBQJDAT9OUk="
            />
          </div>
          <div className="">
            <div className=" md:h-40 h-fit text-xl md:ml-36 flex flex-col px-6">
              <span>
                "Throung its engagiing and well-structured courses, Brilliant
                has taught me
              </span>
              <span>
                mathmatical concepts that I previously struggled to understand.
                I now feel
              </span>
              <span>
                confident approaching both techincal job interviews and real
                world problem solving situations."
              </span>
              <span>-Jacob S.</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" justify-center items-center flex md:mt-0 md:mr-72 mt-10">
        <button className="bg-blue-500 w-32 h-8 rounded-md text-white font-bold">
          <Link to="/nextPage/6">Continue</Link>
        </button>
      </div>
    </>
  );
}
export default From5;
