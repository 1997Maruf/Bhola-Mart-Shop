import img from "../../assets/img/login-bg.png";
// import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigete = useNavigate();
  const role = "user";
    
  const handleSubmit = async e =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const phone = form.phone.value
    const image = form.image.files[0]
    const password = form.password.value
    const formData = new FormData()
    formData.append('image', image)
    try{
      const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY}`,
     formData
      )
      console.log(data)
      //user Registration
      const result = await createUser(email, password)
      console.log(result);
      //update profile
      await updateUserProfile(name, data.data.display_url)
      console.log(data);
      const userInfo = {
        name,
        email,
        phone:phone,
        image:data.data.display_url,
        role: role,
      }
      axiosPublic.post('/users', userInfo)
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
      
        navigete('/login')
    }
    catch(error){
      console.log(error)
    }
  }
    return (
        <div className="hero bg-base-200 min-h-screen pt-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className='w-[600px]' src={img} alt="" />
          </div>
          <div className="card  w-full max-w-sm shrink-0 shadow-2xl  bg-opacity-40 bg-[#1CC0A9] backdrop-blur-3xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
              
                  name="name"
                  className="input input-bordered text-white bg-[#1CC0A9] bg-opacity-40"
                  required
                />
              </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
  
                  name="email"
                  className="input input-bordered text-white bg-[#1CC0A9] bg-opacity-40"
                  required
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Phone Number</span>
                </label>
                <input
                  type="number"name="phone"
                  className="input input-bordered text-white bg-[#1CC0A9] bg-opacity-40"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  placeholder="PhotoURL"
                  name="image"
                  className=" input-bordered text-white bg-[#1CC0A9] bg-opacity-40"
                  required
                />
           </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered text-white bg-[#1CC0A9] bg-opacity-40"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="hover:bg-[#1CC0A9] border-b-2 rounded-lg py-3 text-white border-[#1CC0A9]	border-0"
         />
              </div>
            </form>
            {/* <GoogleSignIn></GoogleSignIn> */}
            <p className=' text-center mb-8 '>Already haven account <Link to='/login' className='font-bold text-red-700'>Login</Link></p>
          </div>
        </div>
      </div>
    );
  };

export default SignUp;
