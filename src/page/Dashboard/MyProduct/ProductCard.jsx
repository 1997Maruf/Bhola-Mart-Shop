
import { AiOutlineStock } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
// import { MdUpdate } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ProductCard = ({product}) => {
  const   axiosPublic = useAxiosPublic();
  console.log('My product',product)
    const {type,description,price,category,availability,image,stock,_id} = product;
    const haldelDelete = _id =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            // Swal.fire(
            //   "Deleted!",
            //   "Your file has been deleted.",
            //    "success"
            // )
           fetch(`https://bhola-mart-shop-server.vercel.app/productList/${_id}`,{
            method: 'DELETE'
           } )
           .then(res => res.json())
           .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
              Swal.fire(
              "Deleted!",
              "Your file has been deleted.",
               "success"
            )
            }
           })
          }
        });
      }
    
   
    const handleStock = (_id) => {
     
      axiosPublic.patch(`/productListS/${_id}`).then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
         
          Swal.fire({
            position: "top-end",
            icon: "success",
            title:  "is an admin Now",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    };

    
    const handleNoStock = (_id) => {
     
      axiosPublic.patch(`/productListN/${_id}`).then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
         
          Swal.fire({
            position: "top-end",
            icon: "success",
            title:  "is an admin Now",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    };
       

      
     
    return (
        <div className=" bg-base-100 w-60 shadow-xl p-6 rounded-md	border-[1px] border-slate-400 mb-5">
        <figure>
          <img className="hover:scale-150 transition duration-700 "
            src={image}
            alt="Shoes" />
        </figure>
        <div className="">
          <h2 className="text-[13px] font-bold text-center">

            {type}
          </h2>
          
        </div>
      <div className="flex gap-8 mt-4 justify-between">
      <button onClick={()=> handleStock(_id)} className="text-orange-600 text-[10px] border-b-[2px] rounded-3xl	px-1	 border-orange-600	flex items-center  hover:rounded-sm  hover:bg-orange-600 hover:px-[1px] hover:text-white"> <AiOutlineStock />
       Stock</button>
       <button onClick={()=> handleNoStock(_id)} className="text-amber-700  flex items-center  text-[10px] border-b-[2px] rounded-3xl		 border-amber-700   hover:rounded-sm  hover:bg-amber-700 hover:px-[1px] hover:text-white"> <AiOutlineStock />No stock</button>
      
      <Link to= {`/dashboard/update/${_id}`} className="text-green-600 text-[10px] border-b-[2px] rounded-3xl		 border-green-600  hover:rounded-sm  hover:bg-green-600 hover:px-[1px] hover:text-white">Update</Link>
     
      </div>
       <div>
       <button onClick={()=> haldelDelete(_id)}  className="text-red-700 flex items-center  text-[12px]	border-b-[2px] rounded-3xl hover:rounded-lg hover:px-2 	mt-4	 border-red-700 hover:bg-red-700 hover:text-white"><MdDelete /> Delete</button>
       </div>
      </div>
    );
};


export default ProductCard;