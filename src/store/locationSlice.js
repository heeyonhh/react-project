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

// a0ab11a1d2a24d584c1cdbfb5c9a608c