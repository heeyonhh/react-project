import { createSlice } from '@reduxjs/toolkit';

const anotherLocationIdSlice = createSlice({
  name: 'anotherLocationId',
  initialState: null, // 초기값 설정
  reducers: {
    setAnotherLocationId: (state, action) => action.payload,
  },
});

export const { setAnotherLocationId } = anotherLocationIdSlice.actions;

export default anotherLocationIdSlice.reducer;
//productlist.js 사용