import React from 'react'
import useAuth from '../Hook/useAuth'
import { Navigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const PrivateRoute = ({children}) => {
    
   const {user , loading} = useAuth();
   if(loading){
     return  <Loading></Loading>
   }

   if(user && user?.email){
    return children
   }
   return <Navigate to={'/login'}></Navigate>
}

export default PrivateRoute