import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity, price } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ id, quantity, price });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      return state.filter(item => item.id !== id);
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
