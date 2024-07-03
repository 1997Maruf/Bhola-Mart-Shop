import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";



import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import img from '../../assets/img/login-bg.png'
const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";
  console.log(location);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Login Success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from);
    });
  };
  
  const handeleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    }
  };
  return (
    
      <div className="hero bg-base-200 min-h-screen pt-32">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img className='w-[600px]' src={img} alt="" />
    </div>
    <div className="card  w-full max-w-sm shrink-0 shadow-2xl bg-opacity-40 bg-[#1CC0A9] backdrop-blur-3xl">
          <form onSubmit={handelLogin} className="card-body">
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
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered text-white bg-[#1CC0A9] bg-opacity-40"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input
                disabled={disabled}
                type="submit"
                value="Login"
                className="hover:bg-[#1CC0A9] border-b-2 rounded-lg py-3 hover:text-white text-teal-600 border-[#1CC0A9]	border-0"
              />
            </div>
          </form>
          <div className="form-control mx-10">
            <label className="label">
              <LoadCanvasTemplate />
            </label>
            <input
              type="text"
              placeholder="Captcha"
              ref={captchaRef}
              name="Captcha"
              className="input input-bordered text-white bg-[#1CC0A9] bg-opacity-40"
              required
            />
            <button
              onClick={handeleValidateCaptcha}
              className="hover:bg-[#1CC0A9] hover:text-white border-b-2 rounded-lg py-3 text-teal-600 border-[#1CC0A9]	border-0"
            >
              Validate
            </button>
          </div>
         {/* <GoogleSignIn></GoogleSignIn> */}
          <p className=" text-center mb-8 ">
            Have an account{" "}
            <Link to="/sign-up" className="font-bold text-red-700">
              Registration
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
