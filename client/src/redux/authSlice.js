import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, 
  authToken: localStorage.getItem('authToken') || '', 
  status: 'idle', 
  error: null, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.authToken = action.payload.authToken;
      localStorage.setItem('authToken', action.payload.authToken); 
    },
    logout: (state) => {
      state.user = null;
      state.authToken = '';
      localStorage.removeItem('authToken'); 
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setUser, logout, setError, setStatus } = authSlice.actions;

export default authSlice.reducer;
