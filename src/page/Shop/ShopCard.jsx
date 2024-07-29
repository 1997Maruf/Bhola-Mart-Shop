import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const ShopCard = ({ product }) => {
  const { image, rating,type, description, Price,stock, _id } = product;

  // const [ratings, setRatings] = useState(1);
  return (
    <div className=" bg-base-100 w-[300px] shadow-xl p-6 rounded-md	border-[1px] border-slate-400 mb-5">
      <figure>
        <img className="hover:scale-150 transition duration-700"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-[15px] font-semibold">{type}</h2>
        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        <p> <span className="font-bold">Price :</span> ${Price}</p>
        <p> <span className="font-bold">Stock :</span> ${stock}</p>
        <div className="card-actions  flex justify-between">
          <Link
            to={`/detals/${_id}`}
            className="btn btn-outline text-[10px] border-b-lime-800 hover:bg-lime-800 text-slate-600 border-0 border-b-4 "
          >
            View Ditels
          </Link>
          <button className="btn btn-outline text-[10px] border-0 border-b-4 border-b-lime-900 hover:bg-lime-800	">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
