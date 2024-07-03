import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";


const Shop = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
      fetch("json.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
        <div className="   mb-10  pt-32">
     
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 m-auto  lg:ml-4  ">
        {products.map(product =><ShopCard key={product._id} product={product}></ShopCard> )}
      </div>
    </div>
    );
};

export default Shop;