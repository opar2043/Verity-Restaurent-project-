import { useQuery } from "@tanstack/react-query"
import useAuth from "../../Root/Hook/useAuth"
import useAxiosUser from "../../Root/Hook/useAxiosUser"
import useAxios from "../../Root/Hook/useAxios"
import { NavLink } from "react-router-dom"


const PaymentUser = () => {
  const {user} = useAuth()
  const axiosSecure = useAxios()

    const {data : paymentsMy = []} = useQuery({
      queryKey: ['paymentMy'],
      queryFn: async ()=> {
        const res = await axiosSecure.get(`/payment`)
        return res.data
      } 
    })

    console.log(paymentsMy);
    const payments = paymentsMy && paymentsMy.filter(pay => pay.email == user?.email);
    console.log(payments);
  return (
    <div className="p-6 bg-blue-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Payment History
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table-auto w-full bg-white border border-blue-300 rounded-lg">
          {/* Table Header */}
          <thead>
            <tr className="bg-blue-700 text-white text-left">
              <th className="px-6 py-3 text-sm font-semibold">Index</th>
              <th className="px-6 py-3 text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-sm font-semibold">Amount</th>
              <th className="px-6 py-3 text-sm font-semibold">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {payments && payments.length > 0 ? (
              payments.map((item, idx) => (
                <tr
                  key={item._id}
                  className={`hover:bg-blue-100 ${
                    idx % 2 === 0 ? "bg-blue-50" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-3 text-sm text-blue-700">{idx + 1}</td>
                  <td className="px-6 py-3 text-sm">{item.name}</td>
                  <td className="px-6 py-3 text-sm">{item.email}</td>
                  <td className="px-6 py-3 text-sm font-medium text-blue-600">
                    ${item.price.toFixed(2)}
                  </td>
                  <td
                    className={`px-6 py-3 text-sm font-semibold ${
                      item.status === "pending"
                        ? "text-yellow-500"
                        : "text-green-600"
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-3 text-center text-gray-500"
                >
                  No payment records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PaymentUser