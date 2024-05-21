import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //redux uses Immer bts
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // in rtk(redux toolkit) either mutate the existing state or return new state[] return {items:[]}
      state.items.length = 0;
    },
  },
});
export default cartSlice.reducer;

export const { addItems, removeItem, clearCart } = cartSlice.actions;
