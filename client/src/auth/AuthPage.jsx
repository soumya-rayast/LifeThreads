import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loginRequest, loginSuccess, loginFailure } from '../redux/authSlice';
import { backend_Api } from '../constant';

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, authStatus, error } = useSelector(store => store.auth);

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "", 
    file: "",
  });
  const [isSignIn, setIsSignIn] = useState(true); 

  // Form change handlers
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  // Handle form submission for login/signup
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("phoneNumber", input.phoneNumber); 

    if (!isSignIn) {
      formData.append("name", input.name);
      if (input.file) {
        formData.append("file", input.file);
      }
    }

    try {
      dispatch(loginRequest());
      const res = await axios.post(
        `${backend_Api}/auth/${isSignIn ? 'login' : 'signup'}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(loginSuccess(res.data));
        toast.success(isSignIn ? "Login successful!" : "Signup successful!");
        navigate('/');
      }
    } catch (error) {
      dispatch(loginFailure(error.message || "Auth failed"));
      toast.error(error.response?.data?.message || "Authentication failed!");
    }
  };

  // Google login integration
  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google client ID
        callback: handleGoogleResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById('googleSignInButton'),
        { theme: 'outline', size: 'large' }
      );
    } else {
      console.error('Google API is not available.');
    }
  }, []);

  // Google login response handler
  const handleGoogleResponse = async (response) => {
    const token = response.credential;
    dispatch(loginRequest());
    try {
      const res = await axios.post(`${backend_Api}/auth/google-login`, { token });

      if (res.data.success) {
        dispatch(loginSuccess(res.data));
        toast.success("Google login successful!");
        navigate('/');
      } else {
        throw new Error('Google login failed');
      }
    } catch (error) {
      dispatch(loginFailure(error.message || 'Google login failed'));
      toast.error("Google Login Error");
    }
  };

  // Toggle between login and signup
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  // Redirect to home if user is already authenticated
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Helmet>
        <title>{isSignIn ? 'Login' : 'Sign Up'} - LifeThreads</title>
      </Helmet>
      <div className="flex items-center justify-center max-w-7xl mx-auto w-[90vw] mt-6 mb-10">
        <form
          className="w-full md:w-2/3 lg:w-1/2 border border-blue-500 shadow-2xl rounded-md p-8 bg-white"
          onSubmit={submitHandler}
        >
          <h1 className="font-bold text-2xl mb-6 text-blue-500 text-center">
            {isSignIn ? 'Login' : 'Sign Up'}
          </h1>

          {authStatus === 'loading' && <p>Loading...</p>}
          {authStatus === 'failed' && <p className="text-red-500">{error}</p>}

          {!isSignIn && (
            <div className="flex flex-col mb-4">
              <div className="w-full">
                <label className="text-blue-500 mb-2 block">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={input.name}
                  onChange={changeEventHandler}
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
                name="email"
                placeholder="xyz@gmail.com"
                value={input.email}
                onChange={changeEventHandler}
                className="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="w-full">
              <label className="text-blue-500 mb-2 block">Password</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                value={input.password}
                onChange={changeEventHandler}
                className="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {!isSignIn && (
              <div className="w-full">
                <label className="text-blue-500 mb-2 block">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  className="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </div>

          {!isSignIn && (
            <div className="flex flex-col mb-4">
              <label className="text-blue-500 mb-2 block">Profile Picture</label>
              <input
                type="file"
                name="file"
                onChange={changeFileHandler}
                className="w-full border border-blue-300 rounded px-3 py-2"
              />
            </div>
          )}

          <div className="mt-6">
            <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition">
              {isSignIn ? 'Login' : 'Sign Up'}
            </button>
          </div>

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
