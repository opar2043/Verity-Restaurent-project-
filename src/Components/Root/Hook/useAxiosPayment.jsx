import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"


const useAxiosPayment = () => {
    const axiosSecure = useAxios()

    const {data: price=[] , refetch} =  useQuery({
      queryKey: ['price'],
      queryFn: async ()=> {
        const res = axiosSecure.post('/create-payment-intent')
         return res.data
     }  
    })

    return [price, refetch]
}

export default useAxiosPayment