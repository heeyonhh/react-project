import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stores: [],
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setStores: (state, action) => {
      state.stores = action.payload;
    },
  },
});

export const { setStores } = locationSlice.actions;

export default locationSlice.reducer;