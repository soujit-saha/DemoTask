import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,
  error: '',
  isLogedinResponse: null,
  loginResponse: {},
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    //token
    isLogedinRequest(state, action) {
      state.isLoading = true;
      state.status = action.type;
    },
    isLogedinSuccess(state, action) {
      state.isLoading = false;
      state.isLogedinResponse = action.payload;
      state.status = action.type;
    },
    isLogedinFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.status = action.type;
    },

    // Login
    loginRequest(state, action) {
      state.status = action.type;
    },
    loginSuccess(state, action) {
      state.loginResponse = action.payload;
      state.status = action.type;
    },
    loginFailure(state, action) {
      state.error = action.payload;
      state.status = action.type;
    },
  },
});

export const {
  isLogedinRequest,
  isLogedinSuccess,
  isLogedinFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
} = AuthSlice.actions;

export default AuthSlice.reducer;
