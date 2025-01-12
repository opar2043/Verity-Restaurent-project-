import React from 'react'

const Title = ({head , sub}) => {
  return (
<div className="w-10/12 md:w-1/2 mx-auto my-6 mb-10 text-black py-5 text-center bg-white rounded-lg shadow-lg  transform hover:scale-105 transition-transform duration-300">
  <h2 className="text-4xl w-11/12 mx-auto uppercase py-4 font-extrabold tracking-wide border-b-4  border-gray-800">
    {head}
  </h2>
  <p className="text-lg font-medium mt-4 py-3 bg-gray-800 text-white rounded-full shadow-md inline-block px-6 uppercase">
    {sub}
  </p>
</div>

  
  )
}

export default Title