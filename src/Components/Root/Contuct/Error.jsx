import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      {/* Error Illustration */}
      <div className="mb-8">
        <img
          src="https://i.ibb.co.com/NswXZsJ/error.png"
          alt="Error Illustration"
          className="w-80"
        />
      </div>

      {/* Error Message */}
      <h1 className="text-4xl font-extrabold text-teal-600 mb-4">
        Oops! Something Went Wrong
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        We can't seem to find the page you're looking for. Don't worry; you can
        go back and explore our delicious menu!
      </p>

      {/* Back to Home Button */}
      <NavLink to="/">
        <button className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">
          Back to Home
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
