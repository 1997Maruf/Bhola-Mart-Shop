import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// import { useState } from "react";
const EdtCard = ({ product }) => {
  const { image_url, rating, name, description,price } = product;

  // const [ratings, setRatings] = useState(1);
  return (
    <div className="card mt-8 bg-opacity-10 bg-black backdrop-blur-sm   w-80 shadow-xl m-auto">
        <figure>
          <img className="w-32" src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          
          <h2 className="text-[15px] font-semibold text-center">{name}</h2>
          <p className="text-[13px] text-center">{description}</p>
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          <p>${price}</p>
          <div className="card-actions justify-between flex">
          <button className="btn btn-outline border-b-lime-800 hover:bg-lime-800 text-slate-600 border-0 border-b-4 ">View Ditels</button>
          <button className="btn btn-outline  border-0 border-b-4 border-b-lime-900 hover:bg-lime-800	">Add To Card</button>
          </div>
        </div>
      </div>
  );
};

export default EdtCard;
