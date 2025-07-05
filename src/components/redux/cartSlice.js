import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      state.totalQuantity++;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += item.price;
      } else {
        state.cartItems.push({ ...item, quantity: 1, totalPrice: item.price });
      }

      state.totalPrice += item.price;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.cartItems = state.cartItems.filter((i) => i.id !== id);
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.removeItem("cartState");
    },
    increaseQuantity(state, action) {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      } else {
        // remove item if quantity is 1
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload
        );
        state.totalQuantity -= 1;
        state.totalPrice -= item?.price ?? 0;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart,increaseQuantity,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
