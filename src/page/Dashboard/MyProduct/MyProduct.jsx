import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import ProductCard from "./ProductCard";

const MyProduct = () => {
    const { user } = useContext(AuthContext);
  console.log()
    const [products, setProducts] = useState([]);
    console.log(products);
   
    useEffect(() => {
      fetch(`http://localhost:5000/productLis/?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [user?.email]);
    
    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 m-auto  lg:ml-4 mx-20 mt-10">
            {
              products.map(product =><ProductCard key={product._id} product={product}></ProductCard>)
            }
            
        </div>
    );
};

export default MyProduct;