import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Products: [],
  full: false,
};

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  console.log(data);
  return data;
});
const CartSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    // fectchProducts: (state, action) => {
    //   state.Products = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.Products = action.payload;
      console.log(action.payload);
      state.full = true;
    });
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
