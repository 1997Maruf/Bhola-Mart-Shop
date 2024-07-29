import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handelToggle = (e) => {
    console.log(e.target.checkbox);
    if (e.target.checkbox) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const link = (
    <>
      <li>
        <NavLink to="/" className="font-bold"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/shop" className="font-bold"> Shop</NavLink>
      </li>
      <li>
        <NavLink to="/login" className="font-bold">Login</NavLink>
      </li>
      <li>
        <NavLink to="/sign-up" className="font-bold">SignUp</NavLink>
      </li>
    </>
  );
  return (
    
    <div className="navbar bg-base-100 lg:w-full fixed z-10  rounded-b-full bg-opacity-20 border-b-2	border-zinc-900	min-h-3	 backdrop-blur-3xl px-20">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {link}
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost lg:text-2xl sm:text-[5px] font-bold">
        <span>BHOLA MART</span>
        <span className="text-lime-700">SHOP</span>
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">{link}</ul>
    </div>
  
    <div className="navbar-end">
    <label className="cursor-pointer grid place-items-center mr-8">
        <input
          onChange={handelToggle}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
        />
        <svg
          className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <svg
          className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    
      {user ? (
        <>
          <div className="lg:mr-36">
            <div>
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <img alt="img" className="rounded-full border-2 sm:mr-4 border-slate-900 " src={user?.photoURL} />
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                   
                    <li>
                      <p>{user?.displayName} </p>
                    </li>
                    <li>
                       <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                      <button onClick={handelLogOut} className="btn mr-3">
                        LogOut
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        <p></p>
          {/* <li className="mr-16">
            <NavLink to="/login"> Login</NavLink>
          </li> */}
        </>
      )}
    </div>
  </div>
      
);
};
export default NavBar;
