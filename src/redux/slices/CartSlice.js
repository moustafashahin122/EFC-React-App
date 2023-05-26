import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItemsCount: 0,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cartItemsCount += 1;
    },

    removeFromCart: (state) => {
      state.cartItemsCount -= 1;
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
