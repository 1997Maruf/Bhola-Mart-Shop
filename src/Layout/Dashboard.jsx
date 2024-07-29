import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import UseRole from "../hooks/UseRole/UseRole";
import { GiStorkDelivery } from "react-icons/gi";
import { FaHome, FaUsers } from "react-icons/fa";
import { BiLogoShopify } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";



const Dashboard = () => {
 const [role] = UseRole();
  return (
    <div className="flex">
      <div className="  min-h-screen  shadow-2xl	shadow-slate-900">
        <ul className="menu">
          {role === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/all-user">
                <GiStorkDelivery />
                All User
                </NavLink>
              </li>
            </>)}
            {role === "seller" && (
             <>
                <li>
              <NavLink to="/dashboard/my-profile">
               
                <CgProfile />My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-product">
                <FaUsers />
                My Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/uplode-product">
              <GiStorkDelivery />
               Uplode Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/orderProduct">
              <GiStorkDelivery />
               My Order Products
              </NavLink>
            </li>
             </>
            )}
            {role === "user" && (
             <>
             <li>
              <NavLink to="/dashboard/my-profile">
               
                <CgProfile />My Profile
              </NavLink>
            </li>
             <li>
              <NavLink to="/dashboard/my-order">
               
              <BiLogoShopify />
              My Order
              </NavLink>
            </li>
             </>
            )}
            {role === "delivery" && (
             <>
            <li>
              <NavLink to="/dashboard/my-profile">
               
                <CgProfile />My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-delivery">
               
              <TbTruckDelivery />My Delivery
              </NavLink>
            </li>
             </>
            )}

            <div className="divider divider-success">OR</div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
