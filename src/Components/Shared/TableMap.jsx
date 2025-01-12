import { FaUser , FaTrash, FaEnvelope } from "react-icons/fa";
import useTanstack from '../Root/Hook/useTanstack';
import Swal from "sweetalert2";
import useAxios from "../Root/Hook/useAxios";
import useAuth from "../Root/Hook/useAuth";
import { Link } from "react-router-dom";

const TableMap = () => {
    // const [menu] = useEff()
    const [cart ] = useTanstack([]) || []
    const [, refetch] = useTanstack([]) || []
    const axiosSecure = useAxios()
    const {user} = useAuth()

    // console.log(cart);
    // console.log(user);

    const totalPrice = cart && cart.length > 0 ? cart.reduce((a, b) => a + b.price, 0) : 0;


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
            axiosSecure.delete(`/order/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      refetch()
                }
            })
            .catch((error) => {
                console.error("Error during deletion:", error);
                Swal.fire({
                  title: "Error",
                  text: "Something went wrong. Please try again later.",
                  icon: "error",
                });
              });    
          }
        });
      }

   

  return (
    <div className="p-5 h-full  bg-gray-100 rounded-lg shadow-md">

<div className="bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 rounded-lg p-4 shadow-lg text-white">
    <h2 className="text-2xl font-extrabold mb-4 text-center flex items-center justify-center gap-3">
        <FaUser className="text-yellow-400 text-3xl" />
        <span className="text-slate-200">Name:</span> {user?.displayName || "N/A"}
    </h2>
    <p className="text-base text-center flex items-center justify-center gap-3">
        <FaEnvelope className="text-blue-400 text-2xl" />
        <span className="text-slate-200 font-semibold">E-mail:</span> {user?.email || "Not Provided"}
    </p>
</div>


    {/* Order Summary */}
    <div className="flex py-3 md:items-center font-bold flex-col md:flex-row gap-4 md:justify-between">
      <p className="text-lg">Total Order: <span className="text-blue-600">{cart && cart.length}</span></p>
      <p className="text-lg">Total Price: <span className="text-green-600">{totalPrice} $</span></p>
      <Link to={'/dashboard/payment'}>
      <button className="btn btn-accent px-6 py-2 text-white font-semibold rounded-md hover:bg-accent-focus">
        Pay
      </button>
      </Link>

    </div>
  
    {/* Order Table */}
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left bg-white rounded-lg shadow-sm">
        {/* Table Header */}
        <thead className="bg-gray-200">
          <tr className="text-gray-700">
            <th className="p-3">Index</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Recipe</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          { cart && cart.map((item, idx) => (
            <tr key={item._id} className="border-b hover:bg-gray-100">
              <td className="p-3">{idx + 1}</td>
              <td className="p-3">{item.name}</td>
              <td className="p-3 text-green-600 font-semibold">{item.price} $</td>
              <td className="p-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg border"
                />
              </td>
              <td className="p-3">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-md px-3 py-1 flex items-center gap-1"
                >
                  <FaTrash /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  )
}

export default TableMap