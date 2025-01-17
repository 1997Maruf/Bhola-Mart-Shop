import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import OrderProductCard from './OrderProductCard';

const OrderMyProduct = () => {
    const { user} = useContext(AuthContext);
    const [productsInfo, setUserProductsInfo] = useState([]);

  console.log(productsInfo);
  // const url = `https://bhola-mart-shop-server.vercel.app/users/${user?.email}`;
  useEffect(() => {
    fetch(`https://bhola-mart-shop-server.vercel.app/orderProduct/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserProductsInfo(data));
  }, [user?.email]);
    return (
        <div>
           <div className="overflow-x-auto mx-20">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>image</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Button</th>
      </tr>
    </thead>
    
     {
        productsInfo?.map(product => <OrderProductCard key={product?._id} product={product}></OrderProductCard>)
     }
 
  </table>
</div>
        </div>
    );
};

export default OrderMyProduct;