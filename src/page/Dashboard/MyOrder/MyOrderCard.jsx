
import { MdAutoDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyOrderCard = ({productsInfo}) => {
    const {image,type,Price,phoneNumber, status,deliveryMenId,_id}= productsInfo;

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
           fetch(`http://localhost:5000/orderProduct/${_id}`,{
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
    return (
        <tbody className="shadow-2xl	shadow-slate-600	">
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
                <div className="text-sm opacity-50">{Price}</div>
              </div>
            </div>
          </td>
          <td>
           <p>{phoneNumber}</p>
          </td>
          <td><p>{status}</p></td>
          <th>
            <button onClick={()=> haldelDelete(_id)} disabled={deliveryMenId} className="btn btn-ghost btn-xs text-red-600 border-[1px] border-red-600 hover:bg-red-600 hover:text-white"><MdAutoDelete />Delete</button>
          </th>
        </tr>
      </tbody>
    );
};

export default MyOrderCard;