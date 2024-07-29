import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const UplodeProduct = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic= useAxiosPublic();
    console.log(user)
    const bookingDate = new Date();
    const stock = "In Stock"
    const handleSubmit = async e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const type = form.type.value;
        const description = form.description.value;
        const category = form.category.value;
        const Price = form.Price.value;
        const image = form.image.files[0]
        const formData = new FormData()
        formData.append('image', image)
        try{
          const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY}`,
         formData
          )
          //user Registration
          console.log(data)
          console.log(data.data.display_url)
          //update profile
          const userInfo = {
            name,
            email,
            type:type,
            phone:phone,
            description:description,
            Price:Price,
            image:data.data.display_url,
            bookingDate,
            stock,
            category
          }
          axiosPublic.post('/productList', userInfo)
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
        catch(error){
          console.log(error)
        }
      }
    return (
        <div className="">
        <div className=" p-24 backdrop-blur-3xl ">
      <h2 className="text-3xl font-extrabold">Uplode Product</h2>
      <form onSubmit={handleSubmit}>
          {/* form supplier row */}
          <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                  <label className="label">
                      <span className="label-text">Name</span>
                  </label>
                  <label className="input-group shadow-2xl	shadow-slate-300	">
                      <input type="text" defaultValue={user?.displayName} name="name"  placeholder="Name" className="input input-bordered w-full" />
                  </label>
              </div>
              <div className="form-control md:w-1/2 lg:ml-4">
                  <label className="label">
                      <span className="label-text">Email</span>
                  </label>
                  <label className="input-group shadow-2xl	shadow-slate-300">
                      <input type="email" defaultValue={user?.email} name="email" placeholder="Email" className="input input-bordered w-full" />
                  </label>
              </div>
          </div>
          <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                  <label className="label">
                      <span className="label-text">Phone Number</span>
                  </label>
                  <label className="input-group shadow-2xl	shadow-slate-300">
                      <input type="number"  name="phone"  placeholder="Phone Number" className="input input-bordered w-full" />
                  </label>
              </div>
              <div className="form-control md:w-1/2 lg:ml-4">
                  <label className="label">
                      <span className="label-text">Product Title</span>
                  </label>
                  <label className="input-group shadow-2xl	shadow-slate-300">
                      <input type="text" name="type" placeholder="Parcel Type" className="input input-bordered w-full" />
                  </label>
              </div>
          </div>
          {/* <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                  <label className="label">
                      <span className="label-text">Parcel Weight</span>
                  </label>
                  <label className="input-group">
                      <input type="number" name="weight"  placeholder="Parcel Weight" className="input input-bordered w-full" />
                  </label>
              </div>
              <div className="form-control md:w-1/2 lg:ml-4">
                  <label className="label">
                      <span className="label-text">Receiver’s Name</span>
                  </label>
                  <label className="input-group">
                      <input type="text" name="receiver" placeholder="Email" className="input input-bordered w-full" />
                  </label>
              </div>
          </div> */}
           
           <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                  <label className="label">
                      <span className="label-text">Image</span>
                  </label>
                  <label className="input-group shadow-2xl	shadow-slate-300">
                  <input
                  type="file"
                  accept="image/*"
                  placeholder="PhotoURL"
                  name="image"
                  className=" input-bordered text-white bg-[#1CC0A9] bg-opacity-40"
                  required
                />
                  </label>
              </div>
              <div className="form-control md:w-1/2">
                  <label className="label">
                      <span className="label-text">Price</span>
                  </label>
                  <label className="input-group shadow-2xl	shadow-slate-300">
                      <input type="number" id="Grand-Total" name="Price"   placeholder="Delivery Address longitude " className="input input-bordered w-full" />
                  </label>
              </div>
          </div>
          {/* <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                  <label className="label">
                      <span className="label-text">Delivery Address longitude </span>
                  </label>
                  <label className="input-group">
                      <input type="text" name="longitude"  placeholder="Delivery Address longitude " className="input input-bordered w-full" />
                  </label>
              </div>
             
          </div>  */}
          <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
                  <label className="label">
                      <span className="label-text">Description</span>
                  </label>
                  <label className="input-group shadow-2xl	shadow-slate-300">
                      <input type="text" id="Grand-Total" name="description"   placeholder="description " className="input input-bordered w-full" />
                  </label>
              </div>
          <div className="form-control md:w-1/2">
                  <label className="label">
                      <span className="label-text">Category</span>
                  </label>
                  <label className="input-group shadow-2xl	shadow-slate-300">
                      <input type="text" id="Grand-Total" name="category"   placeholder="Category " className="input input-bordered w-full" />
                  </label>
              </div>
              
          </div>
          <input type="submit" value="Book" className="btn btn-block" />

      </form>
  </div>
      </div>
    );
};

export default UplodeProduct;