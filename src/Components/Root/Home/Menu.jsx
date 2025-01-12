import { Link } from "react-router-dom";
import useEff from "../Hook/useEff"
import { FaJoint, FaStreetView, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Menu = () => {
  
  const [ menu] = useEff()
  console.log(menu);

  return (

<div className="p-6 bg-whitish-black text-teal-200 ">
  <div className="overflow-x-auto">
    <table className="table table-zebra border border-teal-300">
      {/* Table Header */}
      <thead className="bg-teal-700  text-white">
        <tr>
          <th className="px-4 py-3">Index</th>
          <th className="px-4 py-3">Item</th>
          <th className="px-4 py-3">Category</th>
          <th className="px-4 py-3">Image</th>
          <th className="px-4 py-3">View Item</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className="bg-teal-50 text-black">
        {menu &&
          menu.map((item, idx) => (
            <tr
              key={item._id}
              className="hover:bg-teal-100 border-b border-teal-300"
            >
              <th className="px-4 py-2">{idx + 1}</th>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.category}</td>
              <td className="px-4 py-2">
                <img
                  src={item.image}
                  className="w-14 h-14 rounded-lg border border-teal-400"
                  alt={`${item.name}`}
                />
              </td>
              <td className="px-4 py-2">
                <Link>
                  <button className="btn btn-xs text-white bg-teal-600 hover:bg-teal-700 rounded">
                    <FaStreetView />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>

  {/* Back to Home Page Button */}
  <div className="text-center mt-5">
    <NavLink to={'/'}>
      <button className="btn btn-outline text-teal-700 bg-gray-200 border-teal-700 border-2 hover:bg-teal-700 hover:text-white">
        Back To Home Page
      </button>
    </NavLink>
  </div>
</div>

  )
}

export default Menu