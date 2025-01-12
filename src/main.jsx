import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Root/Home/Home';
import Menu from './Components/Root/Home/Menu';
import MenuItem from './Components/Root/Menu/MenuItem';
import Login from './Components/Firebase/Login';
import Register from './Components/Firebase/Register';
import AuthProvider from './Components/Root/Provider/AuthProvider';
// import Contact from './Components/Root/Contact/Contact'; // Fixed naming inconsistency

import PrivateRoute from './Components/Root/Provider/PrivateRoute';
import Order from './Components/Dashboard/Order/Order';
import Reserve from './Components/Dashboard/Reserve/Reserve';
import TableMap from './Components/Shared/TableMap';
import Contuct from './Components/Root/Contuct/Contuct';
import User from './Components/Dashboard/User/User';
import AddItem from './Components/Dashboard/AddItem/AddItem';
import AllItem from './Components/Dashboard/ManageItem/AllItem';
import ManageItem from './Components/Dashboard/ManageItem/ManageItem';
import AdminRoute from './Components/Root/Provider/AdminRoute';
import Review from './Components/Root/Home/Review';
import Feedback from './Components/Dashboard/Feedback/Feedback';
import Error from './Components/Root/Contuct/Error';
import Payment from './Components/Dashboard/Payment/Payment';
import PaymentUser from './Components/Dashboard/Payment/PaymentUser';
import AdminHome from './Components/Dashboard/AdminHome/AdminHome';
import About from './Components/Root/Menu/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "menuItem",
        element: <MenuItem />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contuct></Contuct>
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Order />
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
         path: '/dashboard/reserve',
         element: <Reserve></Reserve>
      },
      {
         path: '/dashboard/cart',
         element: <TableMap></TableMap>
      },
      {
         path: '/dashboard/review',
         element: <Feedback></Feedback>
      },
      {
         path: '/dashboard/payment',
         element: <Payment></Payment>
      },
      {
         path: '/dashboard/paymentuser',
         element: <PaymentUser></PaymentUser>
      },

      // Admin Route
      {
        path: '/dashboard/users',
        element: <AdminRoute><User></User></AdminRoute>
      },
      {
        path: '/dashboard/adminhome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: '/dashboard/additems',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path: '/dashboard/manageitem',
        element: <AdminRoute><AllItem></AllItem></AdminRoute>
      },
      {
        path: '/dashboard/manageitem/:id',
        element: <AdminRoute><ManageItem></ManageItem></AdminRoute>,
        loader: ({params})=> fetch(`https://y-eight-tan.vercel.app/food/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>

  </StrictMode>,
);
