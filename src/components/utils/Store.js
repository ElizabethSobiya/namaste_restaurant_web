import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./createSlice";

const appStore = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default appStore;
