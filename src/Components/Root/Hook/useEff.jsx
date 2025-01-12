import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import useAxios from "./useAxios"

const useEff = () => {
 
      // const [menu,setMenu] = useState([])

      // useEffect(()=>{
      //   fetch('https://y-eight-tan.vercel.app/food')
      //   .then(res => res.json())
      //   .then(data => {
      //     setMenu(data)
      //   })
      // },[])





      const axiosSecure = useAxios()

      const {data : menu = [], refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async ()=> {
          const res = await axiosSecure.get('/food')
          return res.data
        }
      })

      return [menu, refetch]
  
}

export default useEff