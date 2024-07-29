
import { TbTruckDelivery } from "react-icons/tb";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const MyDeliveryCard = ({product}) => {
    const {image,type,Price,phoneNumber,location,name,_id,delivery} = product;
    const axiosPublic = useAxiosPublic();
const status = "delivered";

    const handleDelivery = () =>{
      
        const userInfo = {
          status:status
         
        }
        axiosPublic.put(`/orderProductDelivery/${_id}`, userInfo)
        .then(res =>{
          if(res.data){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Registration Success",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        
      }
     
   
    return (
        <tbody className="shadow-md	shadow-slate-100">
        {/* row 1 */}
        <tr>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={image}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{type}</div>
                <div className="text-sm opacity-50">${Price}</div>
              </div>
            </div>
          </td>
          <td>
           <p>{name}</p>
          </td>
          <td>
            {phoneNumber}
         </td>
          <td>
            {location}
         </td>
          <th>
            <button onClick={ handleDelivery} disabled={delivery} className="btn btn-ghost btn-xs text-red-600 border-[1px] border-red-600 hover:bg-red-600 hover:text-white"><TbTruckDelivery /> Delivery</button>
          </th>
        </tr>
      </tbody>
    );
};

export default MyDeliveryCard;