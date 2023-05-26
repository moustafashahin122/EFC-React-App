import { configureStore } from "@reduxjs/toolkit";
import Cart from "./slices/CartSlice";
import Products from "./slices/ProductsSlice";
export const store = configureStore({
  reducer: {
    Cart,
    Products,
  },
});
