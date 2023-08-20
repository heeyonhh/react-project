import { createSlice } from '@reduxjs/toolkit';

const anotherLocationIdSlice = createSlice({
  name: 'anotherLocationId',
  initialState: null,
  reducers: {
    setAnotherLocationId: (state, action) => action.payload,
  },
});

export const { setAnotherLocationId } = anotherLocationIdSlice.actions;

export default anotherLocationIdSlice.reducer;
//productlist.js 사용