import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {}, // Use object for faster lookup
  },
  reducers: {
    addItems: (state, action) => {
      const id = action.payload.card.info.id;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { ...action.payload, quantity: 1 };
      }
    },
    removeItem: (state, action) => {
      const id = action.payload.card.info.id;
      if (state.items[id]) {
        if (state.items[id].quantity === 1) {
          delete state.items[id];
        } else {
          state.items[id].quantity -= 1;
        }
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export default cartSlice.reducer;
export const { addItems, removeItem, clearCart } = cartSlice.actions;
