import { useContext } from 'react'
import { AuthContex } from '../Provider/AuthProvider'

const useAuth = () => {
   const contex = useContext(AuthContex)
   return contex
}

export default useAuth