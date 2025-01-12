import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxios from './useAxios'
import useAuth from './useAuth';

const useTanstack = () => {

    const axiosSecure = useAxios();
    const {user} = useAuth()

     const {data : cart =[], refetch} = useQuery({
        queryKey: ['cart' , user?.email],
        queryFn: async ()=> {
             const res = await axiosSecure.get(`/order?email=${user?.email}`)
             return res.data
        }
     })

     return [cart , refetch]
}

export default useTanstack