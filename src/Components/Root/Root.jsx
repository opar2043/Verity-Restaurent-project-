import { Outlet } from "react-router-dom"
import Navbar from "./Home/Navbar"
import Footer from "./Footer"


const Root = () => {
  return (
    <div className="mx-auto w-11/12 md:w-10/12 max-w-7xl">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root