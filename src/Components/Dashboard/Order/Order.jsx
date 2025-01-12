import { FaBook, FaCalendar, FaDashcube, FaEdit, FaHome, FaIndustry, FaList, FaPaypal, FaProductHunt, FaShoppingCart, FaSign, FaUsers, FaUtensils } from "react-icons/fa"
import { FaBoxesPacking, FaDatabase } from "react-icons/fa6"
import { NavLink, Outlet } from "react-router-dom"
import useAxiosUser from "../../Root/Hook/useAxiosUser";

import useAuth from "../../Root/Hook/useAuth";
import useEff from "../../Root/Hook/useEff";
import useTanstack from "../../Root/Hook/useTanstack";

const Order = () => {

  const [users, refetch] = useAxiosUser([]) || [];
  const {user} = useAuth()

  const [cart] = useTanstack()
 

  const admin = users.find(userRole => userRole.role === 'admin' && user.email === user.email);
  // console.log(admin , 'admin');

  const isAdmin = admin && admin.role === 'admin' && admin.email === user.email;
  // console.log(isAdmin);

  return (
    <div className="flex flex-col h-full md:flex-row gap-3 justify-between md:mr-10 mr-3">
        
    <div className="md:w-52 p-5 bg-slate-400  font-semibold text-black">
        <p className="font-extrabold">Admin Panel</p>
          <ul className="menu gap-1">

         { !isAdmin ? <nav>
            <li><NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart> My Cart ({cart.length}) </NavLink></li>
             <li><NavLink to={'/dashboard/reserve'}><FaCalendar></FaCalendar> Reservation</NavLink></li>
             <li><NavLink to={'/dashboard/review'}> <FaSign></FaSign> Feedback</NavLink></li>
             {/* <li><NavLink to={'/dashboard/payment'}> <FaPaypal></FaPaypal> Payment</NavLink></li> */}
             <li><NavLink to={'/dashboard/paymentuser'}><FaBook></FaBook> Payment History</NavLink></li>
            </nav>
               :
            <nav>
            <li><NavLink to={'/dashboard/adminhome'}><FaHome></FaHome> Admin Home</NavLink></li>
             <li><NavLink to={'/dashboard/additems'}><FaUtensils></FaUtensils> Add Items</NavLink></li>
             <li><NavLink to={'/dashboard/users'}><FaUsers></FaUsers> Users</NavLink></li>
             <li><NavLink to={'/dashboard/manageitem'}><FaEdit></FaEdit>Manage Items </NavLink></li>
             {/* <li><NavLink to={'/dashboard/booking'}><FaBoxesPacking></FaBoxesPacking> Bookings </NavLink></li> */}
            </nav>
         }
             <div className="divider"></div>

              <li><NavLink to="/"><FaHome /> <span>Home</span></NavLink></li>
              <li><NavLink to="/menuItem"><FaList /> <span>Menu</span></NavLink></li>
              <li><NavLink to="/dashboard"><FaDashcube /> <span>Dashboard</span></NavLink></li>
              <li><NavLink to="/contact"><FaDatabase></FaDatabase> <span>Contuct</span></NavLink></li>
          </ul>

    </div>

    <div className="w-full md:flex-1 p-5">
        <div>
            <p className="text-2xl font-extrabold text-center">DashBoard</p>
            <div className="divider"></div>

        </div>
        <Outlet></Outlet>
    </div>
</div>
  )
}

export default Order