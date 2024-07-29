import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx';
import Home from './page/Home/Home.jsx';
import Shop from './page/Shop/Shop.jsx';
import Login from './page/Login/Login.jsx';
import SignUp from './page/SignUp/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Dashboard from './Layout/Dashboard.jsx';
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyProfile from './page/Dashboard/MyProfile/MyProfile.jsx';
import MyProduct from './page/Dashboard/MyProduct/MyProduct.jsx';
import UplodeProduct from './page/Dashboard/UplodeProduct/UplodeProduct.jsx';
import AllUser from './page/Dashboard/AllUser/AllUser.jsx';
import EdtProduct from './page/Dashboard/EdtProduct/EdtProduct.jsx';
import ProductDetals from './page/Dashboard/ProductDetals/ProductDetals.jsx';
import OrderMyProduct from './page/Dashboard/OrderMyProduct/OrderMyProduct.jsx';
import MyOrder from './page/Dashboard/MyOrder/MyOrder.jsx';
import MyDelivery from './page/Dashboard/MyDelivery/MyDelivery.jsx';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'shop',
        element: <Shop></Shop>,
        loader: () => fetch('https://bhola-mart-shop-server.vercel.app/productCount')
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path: 'sign-up',
        element:<SignUp></SignUp>
      },
      {
        path:'detals/:id',
        element:<ProductDetals></ProductDetals>,
        loader:({params}) => fetch(`https://bhola-mart-shop-server.vercel.app/productLis/${params.id}`)
      }
    ],
  },
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'my-profile',
          element:<MyProfile></MyProfile>
        },
        {
          path:'my-product',
          element:<MyProduct></MyProduct>
        },
        {
          path:'uplode-product',
          element:<UplodeProduct></UplodeProduct>
        },
        {
          path:'all-user',
          element:<AllUser></AllUser>
        },
        {
          path:'update/:id',
          element:<EdtProduct></EdtProduct>,
          loader:({params}) => fetch(`https://bhola-mart-shop-server.vercel.app/productList/${params.id}`)
        },
        {
          path:"orderProduct",
          element:<OrderMyProduct></OrderMyProduct>
        },    
        {
          path:"my-order",
          element:<MyOrder></MyOrder>
        },
        {
          path:"my-delivery",
          element:<MyDelivery></MyDelivery>
        }
      ]
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
  <AuthProvider>
  <RouterProvider router={router} /> 
  </AuthProvider>
  </QueryClientProvider>
</React.StrictMode>
)
