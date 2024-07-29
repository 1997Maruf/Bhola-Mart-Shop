import { useEffect, useState } from "react";

import EdtCard from "./EdtCard";
const TopSellingProduct = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("json.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
 
  return (
    <div className="   mb-10 ">
      <h2 className="text-3xl font-bold text-center text-lime-900">Top Selling Product</h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 m-auto  lg:ml-4  mt-10">
        {products.map(product =><EdtCard key={product._id} product={product}></EdtCard> )}
      </div>
    </div>
  );
};

export default TopSellingProduct;
