// import { FaEdit, FaRemoveFormat } from "react-icons/fa";
// import useAxiosUser from "../../Root/Hook/useAxiosUser"
// import Swal from "sweetalert2";
// import useAxios from "../../Root/Hook/useAxios";




// const User = () => {

//     const [users, refetch] = useAxiosUser() || []
//     // console.log(users);
//     const axiosSecure = useAxios()

//     function deleteUser(user){
//         // console.log(id);
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//           }).then((result) => {
//             if (result.isConfirmed) {
//                 axiosSecure.delete(`/users/${user._id}`)
//                 .then(res => {
//                     refetch()
//                     if (res.data.deletedCount > 0){
//                         Swal.fire({
//                             title: "Deleted!",
//                             text: `${user.name} has been deleted`,
//                             icon: "success"
//                           });
//                           console.log(res.data);
//                     }          
//                 })
//             }
//           });
//     }

//     function handleRole(user){
//         axiosSecure.patch(`/users/${user._id}`)
//         .then(res => {
//             if (res.data.modifiedCount > 0){
//                 refetch()
//                 Swal.fire({
//                   position: "top-end",
//                   icon: "success",
//                   title: `${user.name} is Convert to Admin now`,
//                   showConfirmButton: false,
//                   timer: 1300
//                 });
//                   console.log(res.data);
//             }          
//         })
//     }
   

//   return (
//     <div>
//        <div>
//         <div>
//             <h2>All User Dashboard - {users.length}</h2>
//         </div>
//        <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th>#</th>
//         <th>Name</th>
//         <th>E-mail</th>
//         <th>Role</th>
//         <th>Delete</th>
//       </tr>
//     </thead>
//     <tbody>
//          {
//              users && users.map((user, idx) => <tr key={idx} className="bg-base-200">
//              <th>{idx + 1}</th>
//              <td>{user.name}</td>
//              <td>{user.email}</td>
//              <td>
//                 {
//                     user.role === 'admin' ? <button className="btn">Admin</button> 
//                     : <button onClick={()=>handleRole(user)}  className="btn"><FaEdit></FaEdit></button>
//                 }
//              </td>
//              <td>
//              <button onClick={()=>deleteUser(user)} className="btn"><FaRemoveFormat></FaRemoveFormat></button>
//              </td>
//            </tr> )
//         }   
//     </tbody>
//   </table>
// </div>
        
//        </div>
//     </div>
//   )
// }

// export default User



import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosUser from "../../Root/Hook/useAxiosUser";
import Swal from "sweetalert2";
import useAxios from "../../Root/Hook/useAxios";

const User = () => {
  const [users, refetch] = useAxiosUser([]) || [];
  const axiosSecure = useAxios();

  function deleteUser(user) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `${user.name} has been deleted.`,
              icon: "success",
            });
          }
        });
      }
    });
  }

  function handleRole(user) {
    Swal.fire({
      title: "Are you sure?",
      text: "To Make User As A Admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is now an Admin.`,
              showConfirmButton: false,
              timer: 1300,
            });
          }
        });
      }
    });

  }

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-700">User Dashboard</h2>
        <p className="text-sm text-gray-500">Total Users: {users.length}</p>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="table-auto w-full border-collapse border border-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-200">#</th>
              <th className="px-4 py-2 border border-gray-200">Name</th>
              <th className="px-4 py-2 border border-gray-200">E-mail</th>
              <th className="px-4 py-2 border border-gray-200">Role</th>
              <th className="px-4 py-2 border border-gray-200">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users &&
              users.map((user, idx) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-2 border border-gray-200 text-center">
                    {idx + 1}
                  </td>
                  <td className="px-4 py-2 border border-gray-200">
                    {user.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-200">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 border  border-gray-200 text-center">
                    {user.role === "admin" ? (
                      <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs">
                        Admin
                      </span>
                    ) : 


                    <div className="flex justify-center items-center gap-2">
                    {/* Role Badge */}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.role === "admin"
                          ? "bg-green-500 text-white"
                          : "bg-gray-300 text-gray-700"
                      }`}
                    >
                      {user.role}
                    </span>
                  
                    {/* Promote to Admin Button */}
                    {user.role !== "admin" && (
                      <button
                        onClick={() => handleRole(user)}
                        className="flex gap-1 items-center text-xs justify-center px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                        title="Promote to Admin"
                      >
                        make admin
                        <FaEdit />
                      </button>
                    )}
                  </div>
                  
                     
                    }
                  </td>
                  <td className="px-4 py-2 border border-gray-200 text-center">
                    <button
                      onClick={() => deleteUser(user)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete User"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;

