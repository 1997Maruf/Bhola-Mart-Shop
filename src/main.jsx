import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root/Root.jsx';
import Home from './page/Home/Home.jsx';
import Shop from './page/Shop/Shop.jsx';
import Login from './page/Login/Login.jsx';
import SignUp from './page/SignUp/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Dashboard from './Layout/Dashboard/Dashboard.jsx';
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyProfile from './page/Dashboard/MyProfile/MyProfile.jsx';
import MyProduct from './page/Dashboard/MyProduct/MyProduct.jsx';
import UplodeProduct from './page/Dashboard/UplodeProduct/UplodeProduct.jsx';
import AllUser from './page/Dashboard/AllUser/AllUser.jsx';

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
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/sign-up',
        element:<SignUp></SignUp>
      },
      {
        path:"/dashboard",
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
          }
            
        ]
      }
    ]
  },
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
