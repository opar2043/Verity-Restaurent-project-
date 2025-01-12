import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Root/Hook/useAuth';
import Swal from 'sweetalert2';
import { FaSignInAlt, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const { user, setUser, handleLogin } = useAuth();
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    handleLogin(email, pass)
      .then((userCredential) => {
        const myUser = userCredential.user;
        setUser(myUser);
        Swal.fire('Welcome back!', 'You have successfully logged in.', 'success');
        form.reset(); 
        navigate('/')
      })
      .catch((error) => {
        Swal.fire('Login Failed', error.message, 'error');
      });
  }

  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white">
      <div className="bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Login to Your Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full p-2 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="pass"
              placeholder="Enter your password"
              className="input input-bordered w-full p-2 rounded-lg"
              required
            />
            <div className="text-right mt-2">
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full flex items-center justify-center gap-2 py-3 text-lg font-semibold hover:bg-blue-700"
          >
            <FaSignInAlt className="text-xl" />
            Login
          </button>
          <button
            type="button"
            className="btn btn-outline w-full flex items-center justify-center gap-2 py-3 text-lg font-semibold mt-4 hover:bg-gray-100"
          >
            <FaGoogle className="text-xl" />
            Login with Google
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 font-medium hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
