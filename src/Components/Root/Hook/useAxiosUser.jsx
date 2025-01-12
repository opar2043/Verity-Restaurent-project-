import { useQuery } from "@tanstack/react-query";

import useAxios from "./useAxios"


const useAxiosUser = () => {
    const axiosSecure = useAxios();
    // const {user} = useAuth();

    const {data: users = [], refetch , isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=> {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    return [users , refetch ,isLoading]
}

export default useAxiosUser