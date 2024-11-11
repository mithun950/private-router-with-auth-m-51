import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Components/Providers/AuthProvider';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Home';
import Orders from './Orders';
import PrivateRoutes from './Components/PrivateRoutes';
import Profile from './Components/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/order',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>,
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   
  </StrictMode>,
)
