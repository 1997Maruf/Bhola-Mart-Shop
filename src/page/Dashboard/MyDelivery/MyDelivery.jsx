import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyDeliveryCard from "./MyDeliveryCard";

const MyDelivery = () => {
  const { user } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState([]);
  const { _id } = userInfo;
  console.log(_id);
  console.log(userInfo);
  const url = `http://localhost:5000/user/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [url]);
  const [productsInfo, setUserProductsInfo] = useState([]);

  console.log(productsInfo);
  // const url = `http://localhost:5000/users/${user?.email}`;
  useEffect(() => {
    fetch(`http://localhost:5000/OrderProducts/${_id}`)
      .then((res) => res.json())
      .then((data) => setUserProductsInfo(data));
  }, [_id]);
  return (
    <div className="overflow-x-auto mx-24">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Location</th>
            
          </tr>
        </thead>
        {productsInfo.map((product) => (
          <MyDeliveryCard key={product._id} product={product}></MyDeliveryCard>
        ))}
      </table>
    </div>
  );
};

export default MyDelivery;
