import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isOpen: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.productId === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          productId: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1
        });
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
});

export const { addToCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
