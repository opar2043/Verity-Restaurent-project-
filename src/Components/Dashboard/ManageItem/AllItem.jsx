

import { Link } from "react-router-dom";
import { FaEdit, FaList } from "react-icons/fa";
import useEff from "../../Root/Hook/useEff";
import { FaTrash } from "react-icons/fa6";
import useAxios from "../../Root/Hook/useAxios";
import Swal from "sweetalert2";

const AllItem = () => {
  const [menu , refetch] = useEff();
  const axiosSecure = useAxios()

  function handleDelete(id){
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
            axiosSecure.delete(`/food/${id}`)
            .then(res => {
              if (res.data.deletedCount > 0){
                refetch()
                Swal.fire({
                  title: `Item Deleted successfully`,
                  icon: "success",
                  draggable: true
                });
                
                console.log(res.data);
              }
            })
            .catch(err => {
              Swal.fire({
                title: "Not Deleted",
                icon: "info",
                draggable: true
              });
            })
      }
    });
  }


  

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-600 flex items-center gap-2">
          <FaList className="text-purple-500" /> Total Items: {menu.length}
        </h2>
        <Link
          to="/dashboard/additems"
          className="btn btn-primary btn-sm shadow-lg"
        >
          Add New Item
        </Link>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table w-full table-auto bg-white rounded-lg border border-gray-200">
          {/* Head */}
          <thead className="bg-gradient-to-r from-purple-200 to-blue-200">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">#</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Item Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Category</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Image</th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">Edit</th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">Delete</th>
            </tr>
          </thead>
          {/* Body */}
          <tbody>
            {menu &&
              menu.map((item, idx) => (
                <tr
                  key={item._id}
                  className={`hover:bg-purple-100 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="py-3 px-4 text-gray-600 text-sm font-medium">{idx + 1}</td>
                  <td className="py-3 px-4 text-gray-600 text-sm font-medium">{item.name}</td>
                  <td className="py-3 px-4 text-gray-600 text-sm">{item.category}</td>
                  <td className="py-3 px-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg border border-gray-300"
                    />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Link to={`/dashboard/manageitem/${item._id}`}>
                      <button className="btn btn-xs btn-outline btn-info">
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button onClick={()=>handleDelete(item._id)} className="btn btn-xs bg-orange-600 text-white rounded-4xl"><FaTrash></FaTrash></button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItem;
