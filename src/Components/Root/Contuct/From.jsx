import React, { useState } from 'react'
import Title from '../../Shared/Title'

const From = () => {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        rating: 1,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Handle form submission (e.g., send data to an API or email service)
      };
    


  return (
    <div className='my-8'>
        <Title head={'contuct from'} sub={'send your info'}></Title>

        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-20">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.phone}
            onChange={handleChange}
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
            value={formData.rating}
            onChange={handleChange}
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
          Message or Review
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Submit
      </button>
    </form>
  </div>
</div>


    </div>
  )
}

export default From