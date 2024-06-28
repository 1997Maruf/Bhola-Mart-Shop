import { useEffect, useState } from "react";

const TopSellingProduct = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("json.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center">Top Selling Product</h2>
      <div className="grid grid-cols-3">
       {
        products.map(product =><div key={product._id} className="card bg-opacity-20 backdrop-blur-sm z-10  w-96 shadow-xl">
            <figure>
              <img
                src={product.image_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>)
       }
      </div>
    </div>
  );
};

export default TopSellingProduct;
