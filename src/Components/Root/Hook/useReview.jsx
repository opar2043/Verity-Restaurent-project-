import  { useEffect, useState } from 'react'
import useAxios from './useAxios'
import { useQuery } from '@tanstack/react-query'


const useReview = () => {
    // const [review , setReview ] = useState([])
    
    //  useEffect(()=>{
    //     fetch('https://y-eight-tan.vercel.app/reviews')
    //     .then(res => res.json())
    //     .then(data => {
    //         setReview(data)
    //     })
    //  },[])


     const axiosSecure = useAxios()

     const {data : review = [], refetch} = useQuery({
       queryKey: ['review'],
       queryFn: async ()=> {
         const res = await axiosSecure.get('/reviews')
         return res.data
       }
     })

     return [review , refetch]

}

export default useReview