import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    author: localStorage.getItem("author") || null,
    user: JSON.parse(localStorage.getItem("user")),
    isAuthenticated: !!localStorage.getItem("accessToken"),
    authStatus: 'idle',
    error: null
  },
  reducers: {
    loginRequest: (state) => {
      state.authStatus = 'loading';
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.author = action.payload.author;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.authStatus = 'succeeded';
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      localStorage.setItem("author", action.payload.author);
      toast.success("Login successful!");
    },
    loginFailure: (state, action) => {
      state.authStatus = 'failed';
      state.error = action.payload;
      toast.error(action.payload || "Login failed!");
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.author = null;
      state.isAuthenticated = false;
      state.authStatus = 'idle';
      state.error = null;
      state.user = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("author");
      toast.info("Logged out successfully.");
    }
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
