import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: !!localStorage.getItem('token'),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
        state.loading = true;
        state.error = null;
      },
      loginSuccess(state, action) {
        state.token = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      },
      loginFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
      logout(state) {
        state.token = null;
        state.isAuthenticated = false;
        localStorage.removeItem('token');
      },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
