import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <div className="flex items-center justify-center max-w-7xl mx-auto w-[90vw] mt-6 mb-10">
        <form className="w-full md:w-2/3 lg:w-1/2 border border-blue-500 shadow-2xl rounded-md p-8 bg-white">
          <h1 className="font-bold text-2xl mb-6 text-blue-500 text-center">Login</h1>
          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <div className="w-full">
              <label className="text-blue-500 mb-2 block">Email</label>
              <input
                type="email"
                placeholder="xyz@gmail.com"
                name="email"
                className="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label className="text-blue-500 mb-2 block">Password</label>
              <input
                type="password"
                placeholder="********"
                name="password"
                className="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition">
              Login
            </button>
          </div>

          <div className="mt-4 text-center text-blue-500">
            Don't have account <Link to="/signup" className="underline">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
