import axios from "axios"

  const axiosSecure = axios.create({
    baseURL: 'https://y-eight-tan.vercel.app'
  })

const useAxios = () => {
   return axiosSecure;     
}

export default useAxios