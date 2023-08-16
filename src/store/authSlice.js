import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    kakaoCode: null,
    user_id: null,
    nickName: null,
    profileImage: null,
  },
  reducers: {
    setAuth: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;