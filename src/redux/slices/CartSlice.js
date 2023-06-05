import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItemsCount: 0,
  cartItems: {},
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItemsCount += 1;
      const id = action.payload;
      if (!(id in state.cartItems)) {
        state.cartItems[id] = 1;
      } else {
        state.cartItems[id] = state.cartItems[id] + 1;
      }
      console.log("addtocart");
      console.log(state.cartItems[id]);
      console.log(id);
    },
    ToCart: (state, action) => {
      const id = action.payload;
      if (!(id in state.cartItems)) {
        state.cartItems[id] = 0;
      }
      console.log("tocart");
      console.log(state.cartItems[id]);
      console.log(id);
    },

    removeFromCart: (state, action) => {
      state.cartItemsCount -= 1;
      const id = action.payload;
      if (!(id in state.cartItems)) {
      } else {
        if (state.cartItems[id] >= 1) {
          state.cartItems[id] = state.cartItems[id] - 1;
        }
      }
      console.log("remove");
      console.log(state.cartItems[id]);
      console.log(id);
    },
  },
});

export const { addToCart, removeFromCart, ToCart } = CartSlice.actions;

export default CartSlice.reducer;
