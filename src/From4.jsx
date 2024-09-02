/** @format */

import React, { useState } from "react";
import { Link, useActionData } from "react-router-dom";
function From4() {
  const [selectedId, setSelectedId] = useState();

  const items = [
    {
      id: 1,
      title: "Arithmetic",
      subtitle: "Introductory",
      src: "https://media.gcflearnfree.org/ctassets/topics/231/FracS4_3_whole_again7.png",
    },
    {
      id: 2,
      title: "Basic Algebra",
      subtitle: "Foundational",
      src: "https://cdn.kastatic.org/googleusercontent/PL7T4LbneYVx9zZfLwEQiLYO5ZVXC4czPooPI8Byosp7auuleJgGd_70BKQ_re2xxKtN2YqLSZHv0nUhU6iXrd7P",
    },
    {
      id: 3,
      title: "Intermidate Algebra",
      subtitle: "Intermidate",
      src: "https://trigidentities.net/wp-content/uploads/2021/05/Dharacharya-Formula.jpeg",
    },
    {
      id: 4,
      title: "Calculus",
      subtitle: "Advanced",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNS9vE6ZZpBpwWB_-_q0WrMUOmdj3SNcatjg&s",
    },
  ];
  return (
    <>
      <div className="font-bold md:text-4xl justify-center items-center flex mt-16 text-2xl">
        What is your math comfort level?
      </div>
      <div className="md:text-lg justify-center items-center flex md:mt-5 text-gray-900 md:ml-7 mt-0 ml-3">
        Choose the highest level you fell confident in-you can always adjust.
      </div>
      <div className="md:flex gap-4">
        {items.map((item) => (
          <div
            className="md:ml-10 mt-8 justify-center items-center flex"
            key={item.id}
          >
            <button
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              <div
                className={`hover:border-orange-500 w-72 h-56 items-center rounded-md border  border-gray-300 ${
                  selectedId === item.id && "border-orange-500"
                }`}
              >
                <div className="justify-center items-center flex">
                  <img className="w-72 h-36" src={item.src} />
                </div>
                <div className="mt-2">
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <h2>{item.subtitle}</h2>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 flex items-center justify-center">
        <Link to={"/nextPage/5"}>
          <button
            className="h-8 w-32 rounded-md border border-gray-100 bg-blue-500 font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-400" //disable mai colour gray dikahyega aur jaise hi disable hatega waise hi blue dikha dega.//
            disabled={!selectedId}
          >
            Countionue
          </button>
        </Link>
      </div>
    </>
  );
}
export default From4;
