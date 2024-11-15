import axios from 'axios';
import { setUser, setError, setStatus } from '../redux/authSlice.js';

const API_URL = "http://localhost:5000/api/v1"

// Function to handle login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(setStatus('loading'));

    const response = await axios.post(`${API_URL}/login`, { email, password });

    dispatch(setUser({ user: response.data.user, authToken: response.data.token }));

    dispatch(setStatus('succeeded'));
  } catch (error) {
    dispatch(setError(error.response.data.message || 'Login failed'));
    dispatch(setStatus('failed'));
  }
};

// Function to handle signup
export const signUp = (email, password, name) => async (dispatch) => {
  try {
    dispatch(setStatus('loading'));

    const response = await axios.post(`${API_URL}/signup`, { email, password, name });

    dispatch(setUser({ user: response.data.user, authToken: response.data.token }));

    dispatch(setStatus('succeeded'));
  } catch (error) {
    dispatch(setError(error.response.data.message || 'Signup failed'));
    dispatch(setStatus('failed'));
  }
};

// Function to handle Google login
export const googleLogin = (token) => async (dispatch) => {
  try {
    dispatch(setStatus('loading'));

    const response = await axios.post(`${API_URL}/google-login`, { token });

    dispatch(setUser({ user: response.data.user, authToken: response.data.authToken }));

    dispatch(setStatus('succeeded'));
  } catch (error) {
    dispatch(setError(error.response.data.message || 'Google login failed'));
    dispatch(setStatus('failed'));
  }
};
