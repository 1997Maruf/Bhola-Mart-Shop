import {  Link, useLoaderData } from "react-router-dom";
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const ProductDetals = () => {
    const {user} = useContext(AuthContext);
    
    console.log(user)
    const axiosPublic = useAxiosPublic();
   


    const [userInfo, setUserInfo] = useState([]);
   const {_id} = userInfo;
      console.log(userInfo._id);
  const url = `https://bhola-mart-shop-server.vercel.app/users/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [url]);

    const product = useLoaderData();
    const {type,description,Price, phone,image,stock,email} = product;
    let [isOpen, setIsOpen] = useState(false)

    function open() {
      setIsOpen(true)
    }
  
    function close() {
      setIsOpen(false)
    }
    
const status="pending"
    const handleSubmit =  e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const userEmail = form.userEmail.value;
       const phoneNumber = form.phoneNumber.value;
        const location = form.location.value;

        const orderInfo = {
            name:name,
          
            location:location,
            type:type,
            image:image,
            status:status,
            Price:Price,
            stock:stock,
            email:email,
            userEmal:userEmail,
            userId:_id,
            phoneNumber:phoneNumber
        }
        
          axiosPublic.post('/orderProduct', orderInfo)
          .then(res =>{
            if(res.data.insertedId){
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
      <div className="bd-[#EFF0F5] pt-36 mb-10">
          <div className="mx-[10%] flex gap-16 shadow-2xl	shadow-gray-500	p-16  rounded-lg	py-20">
          <img className="w-[450px] rounded-lg hover:scale-150 transition duration-700" src={image} alt="" />
         <div>
         <h2 className="text-2xl font-bold">{type}</h2>
          <p className="w-[80%] mt-4">{description}</p>
          <p className="mt-4 "><span className="font-bold">Phone : </span>{phone}</p>
          <div>
            <p className="mt-2"><span className="font-bold">Price : </span>{Price}</p>
            <p className="mt-2"><span className="font-bold">Stock : </span>{stock}</p>
          </div>
        
          <Button
        onClick={open}
        className="btn btn-outline btn-accent mt-4 mr-10"
      >
       Buy Naw
      </Button>
      <Link to='/shop' className="btn btn-outline  btn-accent ">Go Shop</Link>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-black backdrop-blur-3xl	 opacity-90 p-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
               Give Me your Info
              </DialogTitle>
              <form onSubmit={handleSubmit}>
                 <div>
                 <div className="form-control">
                <label className="label">
                  <span className="label-text text-white ">Name</span>
                </label>
                <input
                  type="text" name="name"
                  defaultValue={user?.displayName}
                  className="input input-bordered  "
                  placeholder="Name"
                  required
                />
                 </div>
                 <div className="form-control">
                <label className="label">
                  <span className="label-text text-white ">Email</span>
                </label>
                <input
                  type="email" name="userEmail"
                  defaultValue={user?.email}
                  className="input input-bordered  "
                  placeholder="Email"
                  required
                />
                 </div>
                 <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Phone</span>
                </label>
                <input
                  type="number" name="phoneNumber"
                  defaultValue={user?.phone}
                  className="input input-bordered  "
                  placeholder="Name"
                  required
                />
                 </div>
                 <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Location</span>
                </label>
                <input
                  type="text" name="location"
                  className="input input-bordered  "
                  placeholder="Location"
                  required
                />
                 </div>
                 </div>
                 <input className="btn btn-outline btn-success mt-4 mx-[35%]" type="submit" value="Submit" />
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
         </div>
        </div>
      </div>
    );
};

export default ProductDetals;