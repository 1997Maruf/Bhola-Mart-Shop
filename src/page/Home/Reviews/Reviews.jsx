import { useEffect, useState } from 'react';

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Reviews = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
      fetch("json.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
        <div className=''>
            <AwesomeSlider className='h-96 '>
            {
             products.map(product => <div className='flex gap-6' key={product._id}>
                  <img
                    className="mask mask-squircle w-20"
                    src={product.image}
                  />
                 <div>
                 <h3 className='text-2xl font-bold text-white mt-3'>{product.user}</h3>
                  <Rating  className='mt-4' style={{ maxWidth: 100 }} value={product.rating2} readOnly />
                  <p className=' text-white mt-4'>{product.comment}</p>
                 </div>
                </div>
             )}
                {/* <div>2</div>
                <div>3</div>
                <div>4</div> */}
              </AwesomeSlider> 
           
             
        </div>
    );
};

export default Reviews;