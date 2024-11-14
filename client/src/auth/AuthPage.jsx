import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  // Google login integration
  useEffect(() => {
    // Check if the google library is loaded
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google Client ID
        callback: handleGoogleResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById('googleSignInButton'),
        { theme: 'outline', size: 'large' }
      );
    }
  }, []);

  const handleGoogleResponse = (response) => {
    // Google JWT token can be found in response.credential
    const token = response.credential;
    // You can decode or send this token to your backend for further authentication
    console.log('Google JWT:', token);
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <Helmet>
        <title>LifeThreads</title>
      </Helmet>
      <div className="flex items-center justify-center max-w-7xl mx-auto w-[90vw] mt-6 mb-10">
        <form className="w-full md:w-2/3 lg:w-1/2 border border-blue-500 shadow-2xl rounded-md p-8 bg-white">
          <h1 className="font-bold text-2xl mb-6 text-blue-500 text-center">
            {isSignIn ? 'Login' : 'Sign Up'}
          </h1>

          {/* Common input fields for both forms */}
          {!isSignIn && (
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="w-full">
                <label className="text-blue-500 mb-2 block">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="fullname"
                  className="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
          <div className="flex flex-col gap-6 mb-4">
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

          {/* Additional field for profile upload on SignUp */}
          <div className="mt-6">
            <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition">
              {isSignIn ? 'Login' : 'Sign Up'}
            </button>
          </div>

          {/* Google Sign-In Button */}
          <div className="mt-4 flex justify-center">
            <div id="googleSignInButton" className="mt-2"></div>
          </div>

          <div className="mt-4 text-center text-blue-500">
            {isSignIn ? (
              <p>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="underline"
                >
                  Sign Up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="underline"
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
