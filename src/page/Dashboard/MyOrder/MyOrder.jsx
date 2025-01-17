import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyOrderCard from "./MyOrderCard";


const MyOrder = () => {
    const { user } = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState([]);
    const { _id } = userInfo;
    console.log(_id);
    console.log(userInfo);
    const url = `https://bhola-mart-shop-server.vercel.app/user/${user?.email}`;
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setUserInfo(data));
    }, [url]);

    
    const [productsInfos, setUserProductsInfos] = useState([]);

  console.log(productsInfos);
  // const url = `https://bhola-mart-shop-server.vercel.app/users/${user?.email}`;
  useEffect(() => {
    fetch(`https://bhola-mart-shop-server.vercel.app/userOrderProducts/${userInfo._id}`)
      .then((res) => res.json())
      .then((data) => setUserProductsInfos(data));
  }, [userInfo._id]);
    return (
        <div className="overflow-x-auto mx-24">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Product</th>
        <th>Phone</th>
        <th>Status</th>
        <th>Delete Product</th>
      </tr>
    </thead>
     {
      productsInfos?.map(productsInfo=><MyOrderCard key={productsInfo?._id} productsInfo={productsInfo}></MyOrderCard>)
     }
  </table>
</div>
    );
};

export default MyOrder;