import { createSlice } from '@reduxjs/toolkit';

const locationIdSlice = createSlice({
  name: 'locationId',
  initialState: null, // 초기값 설정
  reducers: {
    setLocationId: (state, action) => action.payload,
  },
});

export const { setLocationId } = locationIdSlice.actions;

export default locationIdSlice.reducer;
//main.js 사용