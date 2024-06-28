import { NavLink } from "react-router-dom";


const NavBar = () => {
    const link = (
        <>
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
         
        </>
      );
    return (
        <div className="navbar bg-opacity-20 fixed z-10 pt-12 bg-black text-white border-b-2 border-lime-700 rounded-b-[100px] px-20 backdrop-blur-sm		">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
           link
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BD MART SHOP</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        link
      }
    </ul>
  </div>
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
</div>
    );
};

export default NavBar;