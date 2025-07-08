import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// Helper to recalculate totals
const recalculateTotals = (state) => {
  let totalQty = 0;
  let total = 0;

  state.cartItems.forEach((item) => {
    totalQty += item.quantity;
    total += item.totalPrice; // safer to use totalPrice here as it can differ by variant
  });

  state.totalQuantity = totalQty;
  state.totalPrice = total;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (i) => i.id === item.id && i.selectedSize === item.selectedSize
      );

      if (existingItem) {
        existingItem.quantity += item.quantity; 
        existingItem.totalPrice += item.price * item.quantity; 
      } else {
        state.cartItems.push({
          ...item,
          totalPrice: item.price * item.quantity, 
        });
      }

      recalculateTotals(state);
    },
    removeFromCart(state, action) {
      const { id, selectedSize } = action.payload;

      // Remove item matching both id and selectedSize
      state.cartItems = state.cartItems.filter(
        (i) => !(i.id === id && i.selectedSize === selectedSize)
      );

      recalculateTotals(state);
    },

    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.removeItem("cartState");
    },

    increaseQuantity(state, action) {
      const { id, selectedSize } = action.payload;

      const item = state.cartItems.find(
        (i) => i.id === id && i.selectedSize === selectedSize
      );

      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
      }

      recalculateTotals(state);
    },

    decreaseQuantity(state, action) {
      const { id, selectedSize } = action.payload;

      const item = state.cartItems.find(
        (i) => i.id === id && i.selectedSize === selectedSize
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          item.totalPrice -= item.price;
        } else {
          state.cartItems = state.cartItems.filter(
            (i) => !(i.id === id && i.selectedSize === selectedSize)
          );
        }
      }

      recalculateTotals(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
