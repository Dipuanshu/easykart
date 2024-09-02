/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
function From2() {
  const [selectedId, setSelectedId] = useState();

  const items = [
    {
      id: 1,
      src: "https://media.istockphoto.com/id/1014754704/photo/stock-market-graph.jpg?s=1024x1024&w=is&k=20&c=WHYHPxIEhvRxhQoTz3mNCm40e-dzg-nudI28FYlA9tw=",
      title: " Learning specific skills to advance my career",
    },
    {
      id: 2,
      src: "https://media.istockphoto.com/id/1188841151/photo/what-an-interesting-find.jpg?s=1024x1024&w=is&k=20&c=v7YZ4-hbOA_-KhF2k_SzLE5gGk3mLsiFXMRW-KMoQ7g=",
      title: " Exploring new topics I'm instersted in",
    },
    {
      id: 3,
      src: "https://media.istockphoto.com/id/970562458/photo/silhouette-of-virtual-human-on-handwritten-equations-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=Kt9r2d1T1ZnzMIWDw6jRLlmjN9sUN998tXiR8mi0KGc=",
      title: "Refreshing my math foundation",
    },

    {
      id: 4,
      src: "https://media.istockphoto.com/id/1448592427/photo/paper-planes-moving-towards-an-orange-bulls-eye-target-on-blue-background.jpg?s=1024x1024&w=is&k=20&c=JGMjH6rWqwI7I7KV8Xq-411RKS-Yk36EtIEYFtSSxpU=",
      title: "Exercising my brain to stay sharp",
    },
    {
      id: 5,
      src: "https://media.istockphoto.com/id/496830920/photo/what-else-tray.jpg?s=1024x1024&w=is&k=20&c=isr9Z96ECgTEWmuImIiaUrapZdLhYX_kHFmBzwceED4=",
      title: "Something Else",
    },
  ];
  return (
    <div>
      <h1 className=" md:mt-12 mt-20 flex items-center justify-center md:text-4xl font-bold text-2xl">
        Which are you most instrested in?
      </h1>
      <h1 className="md:mt-5 flex items-center justify-center md:text-lg text-gray-600 md:ml-0 ml-8 mt-0">
        Choose just one.This will be help us get you started(but won't limit
        your exprience).
      </h1>
      <div className="mt-8">
        {items.map((item) => (
          <div className="mt-4 flex justify-center" key={item.id}>
            <button
              className="md:w-3/5"
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              <div className="justify-center items-center flex">
                <div
                  className={`hover:border-orange-500 flex md:w-2/3 w-96 items-center rounded-md border border-gray-300 ${
                    selectedId === item.id && "border-orange-500"
                  }`}
                >
                  <img className="w-20" src={item.src} />
                  <div className="ml-4 md:text-lg text-gray-700">
                    {item.title}
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-12 flex items-center justify-center">
        <Link to={"/nextPage/3"}>
          <button
            className="h-8 w-32 rounded-md border border-gray-100 bg-blue-500 font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-400" //disable mai colour gray dikahyega aur jaise hi disable hatega waise hi blue dikha dega.//
            disabled={!selectedId}
          >
            Countionue
          </button>
        </Link>
      </div>
    </div>
  );
}
export default From2;
