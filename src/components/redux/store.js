// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { loadState, saveState } from "./localStorageHelpers";

const preloadedState = {
  cart: loadState() || {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState().cart);
});

export default store;
