import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowCircleLeft, HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { getProductData } from "./api";
import Loading from "./Loading";
import Notfound from "./Notfound";
import Navbar from "./Navbar";
import NavBottom from "./NavBottom";

function ProductDetail({ onAddToCart,productCount }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const abc = getProductData(id);
      abc.then(function (data) {
        setProduct(data);
        setLoading(false);
      });
      abc.catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    onAddToCart(id, count);
  }

  useEffect(
    function () {
      setCount(1);
    },
    [id]
  );

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <Notfound />;
  }

  return (
    <>
    <Navbar productCount={productCount} id={id}/>
    <div className="py-2 drop-shadow-2xl px-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-7">
          <Link to="/" className="text-5xl">
            <HiArrowCircleLeft />
          </Link>
        </div>
        <div className="md:flex max-w-full drop-shadow-2xl bg-white px-7 pt-5 pb-20 sm:px-20 sm:py-20">
          <div className="max-w-sm aspect-square drop-shadow-2xl">
            <img
              className="w-full h-full object-cover rounded-md"
              src={product.thumbnail}
            />
          </div>
          <div className="mx-1 sm:mx-8 ">
            <div>
              <h1 className="text-md text-gray-600 mt-5">
                Home/{product.category}/{product.title}
              </h1>
              <h1 className="text-2xl text-gray-600 mt-4">{product.title}</h1>
              <h1 className="mt-2 text-xl font-bold text-gray-600">
                $ {product.price}
              </h1>
              <p className="mt-2 text-sm text-black">{product.description}</p>
              <div className="mt-4 border-b-2 pb-6">
                <input
                  value={count}
                  onChange={handleCountChange}
                  className="px-1 w-16 text-center border-black border-2 rounded-md"
                  type="number"
                  placeholder="1"
                  min="0"
                />
                <button
                  onClick={handleButtonClick}
                  className="mt-2 ml-1 rounded bg-red-400 hover:bg-red-600  px-6 py-1 text-sm text-white"
                >
                  ADD TO CART
                </button>
              </div>
              <p className="mt-4 text-sm ">
                <span className="text-red-400">{product.category}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-7 flex justify-between">
          <div>
            {id > 1 && (
              <Link
                to={"/products/" + (id - 1)}
                className="text-xl gap-1 flex  text-white bg-orange-600 rounded-md px-2 py-1 "
              >
                <HiArrowLeft className="mt-1" />
                Previous
              </Link>
            )}
          </div>
          <Link
            to={"/products/" + (id + 1)}
            className="text-xl gap-1 flex text-white bg-orange-600 rounded-md px-2 py-1 "
          >
            Next
            <HiArrowRight className="mt-1" />
          </Link>
        </div>
      </div>
    </div>
    <NavBottom/>
    </>
  );
}

export default (ProductDetail);
