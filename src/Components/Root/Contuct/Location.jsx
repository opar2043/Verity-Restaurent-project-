import React from 'react' 
import Title from '../../Shared/Title'
import { FaMapLocation, FaPhone, FaVoicemail, FaWhatsapp } from 'react-icons/fa6'

const Location = () => {
  return (
    <div className="bg-gray-100 py-12 my-10">
        <Title head={'Location'} sub={'Check It out'}></Title>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 container mx-auto px-4">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-shadow hover:shadow-xl">
                <div className="text-4xl text-blue-500 mb-4">
                    <FaPhone />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h2>
                <p className="text-gray-600 text-lg">01814482832</p>
                <p className="text-gray-500 text-sm mt-2 flex text-center gap-2 justify-center items-center"> <FaMapLocation></FaMapLocation> Banani, Dhaka</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-shadow hover:shadow-xl">
                <div className="text-4xl text-green-500 mb-4">
                    <FaWhatsapp />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Text any Query Us</h2>
                <p className="text-gray-600 text-lg">01814482832</p>
                <p className="text-gray-500 text-sm mt-2 flex text-center gap-2 justify-center items-center"> <FaMapLocation></FaMapLocation> Banani, Dhaka</p>

            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-shadow hover:shadow-xl">
                <div className="text-4xl text-red-500 mb-4">
                    <FaVoicemail />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Mail-Us</h2>
                <p className="text-gray-600 text-lg">rezonerashidopar@gmail.com</p>
                <p className="text-gray-500 text-sm mt-2 flex text-center gap-2 justify-center items-center"> <FaMapLocation></FaMapLocation> Banani, Dhaka</p>

            </div>
        </div>
    </div>
  )
}

export default Location;
