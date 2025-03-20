/** @format */

import { useEffect, useState } from "react";
import Porductlist from "./Productlist";

import { getProductList } from "./api";
import Loading from "./Loading";
import Navbar from "./Navbar";
import { useSearchParams } from "react-router-dom";
import NavBottom from "./NavBottom";
import { withUser } from "./WithProvider";

function ProductlistPage({ productCount }) {
  const [productlist, setProductList] = useState([]);
  console.log("produtlist", productlist);

  const [loading, setloading] = useState(true);
 
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setdata] = useState(productlist);
const params = Object.fromEntries([...searchParams]);
let {sort}=params;
sort=sort||"default";
  const query = searchParams.get("query");

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
    setSearchParams({...params,sort:event.target.value})
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
  else if(sort=="default"){
    data.sort(function(x,y){
      return x.id-y.id;
    })
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar productCount={productCount} />
      <div className="flex justify-between mt-14 md:px-36 px-3">
        <div className="w-full">
          <select
            className="border border-black py-1 w-full md:w-fit ml-2"
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
      <div className="mt-24"><NavBottom /></div>
    </>
  );
}
export default withUser(ProductlistPage);

