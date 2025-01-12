import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";
import { FaShop } from "react-icons/fa6";
import { BiCart } from "react-icons/bi";
import useTanstack from "../Hook/useTanstack";
import { useEffect } from "react";
import { Tooltip } from 'react-tooltip';
import { PiFramerLogoThin } from "react-icons/pi";


const Navbar = () => {
  const { user, handleLogout, setUser } = useAuth();
  const [cart,refetch] = useTanstack([])
  const navigate = useNavigate();

  useEffect(() => {
    refetch(); // Fetch cart data when the Navbar mounts or updates
  }, [cart]);

  function signOutUser() {
    handleLogout()
      .then(() => {
        setUser(null);
        Swal.fire("Signed Out Successfully");
        navigate("/");
      })
      .catch((error) => {
        Swal.fire("Something Went Wrong");
      });
  }

  const links = (
    <>
      <NavLink to="/" className="nav-link hover:text-yellow-400 transition">
         <li className="text-left "> Home</li>
      </NavLink>
      <NavLink to="/menuItem" className="nav-link hover:text-yellow-400 transition">
        <li className="text-left"> Menu</li>
      </NavLink>
      <NavLink to="/about" className="nav-link hover:text-yellow-400 transition">
         <li className="text-left"> About</li>
      </NavLink>
      <NavLink to="/contact" className="nav-link hover:text-yellow-400 transition">
         <li className="text-left">   Contact </li>
       
      </NavLink>
      {user && (
        <NavLink to="/dashboard" className="nav-link">
          <button className="relative btn bg-gray-800 hover:bg-gray-700 text-center text-white font-bold">
            <BiCart className="text-lg" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
         +{ cart && (cart.length )}    
            </div>
          </button>
        </NavLink>
      )}
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-2 shadow-lg">
      <div className="navbar-start flex items-center gap-2">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            // className="menu menu-sm dropdown-content mt-3 z-[1] bg-gray-800 rounded-box shadow-lg p-3"
            className="menu menu-sm gap-2 dropdown-content z-10 bg-gray-800 rounded-box shadow-lg mt-3 p-4 text-white w-60"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="text-2xl font-extrabold uppercase text-yellow-400">
          Varity Restaurent
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 text-lg font-medium">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-4">

<div className="dropdown dropdown-end z-50">
  <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-12 rounded-full border-2 border-yellow-400">
      <img
        alt="User avatar"
        src={
          user?.photoURL ||
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        }
        data-tooltip-id="my-tooltip" // Bind tooltip to this ID
        data-tooltip-content="User Profile" // Tooltip content
      />


    </div>
  </button>
  <Tooltip id="my-tooltip" place="top" />
  <ul
    tabIndex={0}
    className="menu menu-sm dropdown-content bg-gray-800 rounded-box shadow-lg mt-3 p-4 text-white w-60"
  >
    <li className="mb-2">
      <div className="font-bold text-lg text-yellow-400">Profile</div>
    </li>
    {user ? (
      <li className="flex flex-col gap-2">
        <p className="font-medium text-sm">{user.displayName}</p>
        <p className="text-sm text-gray-400">{user.email}</p>
        <button
          onClick={() => signOutUser()}
          className="btn btn-md w-full bg-gradient-to-r from-red-700 to-red-400 hover:from-blue-600 py-1 hover:to-yellow-600 text-white  mt-2"
        >
          Log Out
        </button>
      </li>
    ) : (
      <li className="text-center">
        <NavLink to="/login" 
         className="btn w-full btn-md bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white pb-1 items-center flex" 
          >        
        Login
        </NavLink>
      </li>
    )}
  </ul>
</div>


 
      </div>
    </div>
  );
};

export default Navbar;



