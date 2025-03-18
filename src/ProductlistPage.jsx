/** @format */

import { useEffect, useState } from "react";
import Porductlist from "./Productlist";
import Nomatching from "./Nomatching";
import { getProductList } from "./api";
import Loading from "./Loading";
import Navbar from "./Navbar";
import { useSearchParams } from "react-router-dom";

function ProductlistPage({ productCount }) {
  const [productlist, setProductList] = useState([]);
  console.log("produtlist", productlist);

  const [loading, setloading] = useState(true);
  const [sort, setSort] = useState("default");
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setdata] = useState(productlist);
  console.log("data", data);
  const query = searchParams.get("query");
  console.log("query", query);
  useEffect(function () {
    const xyz = getProductList();
    //THEN K ANDER KA FUNCTION TABHI RUN HOGA JAB PROMISE PURI HOGI//
    //CATCH K ANDER KA FUNCTION TABHI RUN HOGA JAB PROMISE FAIL HOGI//
    xyz.then(function (resopnse) {
      setProductList(resopnse.data.products);

      setloading(false);
    });
  }, []);
  // useeffect tab tab apna code run krta hai jab  empty array mai koi change ho ya function relode ho//
  // jab productlist page call hoga to to prodct ki list bhi magani hogi//

  //to call krenge//

  console.log("bhar wala code");
  useEffect(() => {
    if (query && productlist) {
      console.log("useffect query", query);
      const data = productlist.filter((item) => {
        const lowercasetitle = item.title.toLowerCase();
        const lowercaseQuery = query.toLowerCase();

        return lowercasetitle.indexOf(lowercaseQuery) != -1;
      });
      setdata(data);
    } else {
      setdata(productlist || []);
    }
  }, [query, productlist]);

  function handleSort(event) {
    setSort(event.target.value);
  }

  if (sort == "price") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "name") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar productcount={productCount} />
      <div className="flex justify-between mt-2">
        <div>
          <select
            className="border border-black rounded-md"
            onChange={handleSort}
            value={sort}
          >
            <option value="default">default value</option>
            <option value="price">Sort by price</option>
            <option value="name">Sort by name</option>
          </select>
        </div>
      </div>

      <div className="">
        {data.length > 0 && <Porductlist products={data} />}
      </div>
    </>
  );
}
export default ProductlistPage;

