import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
const OrderProductCard = ({ product }) => {
  const { image, type, phoneNumber, name, Price,_id,deliveryMenId } = product;
  const axiosPublic = useAxiosPublic();
  let [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
 
  const [deliveryMans, setDeliveryMans] = useState([]);
  console.log("deliveryMan", deliveryMans);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const deliveryMan = data.filter((man) => man.role === "delivery");
        setDeliveryMans(deliveryMan);
      });
  }, []);
  const status="on the way,"
  const handleSubmit =  e =>{
    e.preventDefault()
    const form = e.target
    const deliveryMenId = form.deliveryMenId.value;
    const approximateDate = form.approximateDate.value;
    console.log(deliveryMenId, approximateDate);
    const orderInfo = {
        deliveryMenId:deliveryMenId,
        approximateDate:approximateDate,
        status:status
    }
    
      axiosPublic.put(`/orderProduct/${_id}`, orderInfo)
      .then(res =>{
        if(res.data){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
        }
      })
  }
  return (
    <tbody>
      <tr className="shadow-2xl	shadow-gray-500	">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{type}</div>
              <div className="text-sm opacity-50">$ {Price}</div>
            </div>
          </div>
        </td>
        <td>
          <p>{name}</p>
        </td>
        <td>
          <p>{phoneNumber}</p>
        </td>
        <th>
          <Button disabled={deliveryMenId}
            onClick={open}
            className="btn btn-outline btn-accent mt-4 mr-10"
          >
            Buy Naw
          </Button>
        </th>
      </tr>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-black backdrop-blur-3xl	 opacity-90 p-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Give Me your Info
              </DialogTitle>
              <form onSubmit={handleSubmit}>
              <select name="deliveryMenId">
                      {deliveryMans?.map((dali) => (
                        <option key={dali._id} value={dali._id}>
                          {dali.name}
                        </option>
                      ))}
                    </select>
                    <input
                      className="ml-5"
                      type="date"
                      name="approximateDate"
                    />

                    <input
                      className="bg-orange-400 ml-7"
                      type="submit"
                      value="submit"
                    />
              </form>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </tbody>
  );
};

export default OrderProductCard;
