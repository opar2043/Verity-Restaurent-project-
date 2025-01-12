import { useState } from "react";
import Title from "../../Shared/Title";
import useAxios from "../../Root/Hook/useAxios";
import Swal from "sweetalert2";
import { MdRateReview } from "react-icons/md";
import useAuth from "../../Root/Hook/useAuth";

const Feedback = () => {

          const {user} = useAuth()
          const axiosSecure = useAxios() 
          const [ratings , setRating] = useState(1)
        
          const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Form Data Submitted:");
            const form = e.target;

            const name = form.name.value;
            const email = form.email.value;
            const phone = form.phone.value;
            const details = form.review.value;
            const rating = parseFloat(ratings)

            const reviewData = {
                name,
                email,
                phone,
                details,
                rating
            }

            axiosSecure.post('reviews',reviewData)
            .then(res => {
                Swal.fire({
                    title: "Your FeedBack Added Successfully",
                    icon: "success",
                    draggable: true
                  });

                  

                  console.log(res.data);
              
            })

            form.reset()

            console.log(reviewData);
          };

  return (
    <div className=''>

        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-20">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Make Your Feedback</h2>
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-2xl rounded-lg p-8 max-w-4xl mx-auto space-y-6"
    >
      {/* Input Fields in Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-800 font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={user?.displayName}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-800 font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
             defaultValue={user?.email}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-800 font-semibold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"

            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-gray-800 font-semibold mb-2"
          >
            Rating (1 to 5)
          </label>
          <select
            id="rating"
            name="rating"
            onChange={e=> setRating(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
      </div>

      {/* Message/Review (Single Column) */}
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-800 font-semibold mb-2"
        >
          Message or Reviewed Us!
        </label>
        <textarea
          id="message"
          name="review"
          required
          rows="6"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex justify-center gap-1 items-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        <MdRateReview></MdRateReview>
        Make Review
      </button>
    </form>
  </div>
</div>


    </div>
  )
}

export default Feedback