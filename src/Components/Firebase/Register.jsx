import React from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Root/Hook/useAuth';
import { FaRegistered } from 'react-icons/fa6';
import useAxios from '../Root/Hook/useAxios';

const Register = () => {
  const { setUser, handleRegister , handleUpdateProfile} = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxios()

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const photo = form.photo.value;
    const name = form.name.value;
    const pass = form.pass.value;

    handleRegister(email, pass)
      .then((userCredential) => {
        handleUpdateProfile(name,photo)
        .then(() => {

          const makeUser = {
            email,
            photo,
            name,
            role: 'customer'
          }

          axiosSecure.post('/users',makeUser)
          .then(res => {
            console.log(res.user , 'send to user database');
            const myUser = userCredential;
            setUser(myUser);
            Swal.fire('Account Created Successfully!', '', 'success');
            form.reset();
            navigate('/');
          })

          

        }).catch((error) => {
          console.log(error.message);
        }); 
      })
      .catch((error) => {
        Swal.fire('Registration Failed', error.message, 'error');
      });
  }

  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-md p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Register Now!
        </h1>
        <p className="text-center text-sm text-gray-600 mb-8">
          Join us today and experience the best services. Create an account to get started!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full p-3 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full p-3 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Photo URL</label>
            <input
              type="url"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full p-3 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="pass"
              placeholder="Your Password"
              className="input input-bordered w-full p-3 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full flex items-center justify-center gap-2 py-3 text-lg font-semibold hover:bg-blue-600"
          >
            <FaRegistered className="text-xl" /> Register
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
