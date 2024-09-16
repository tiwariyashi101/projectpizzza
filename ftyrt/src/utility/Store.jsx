import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"; // Update the path if necessary

const store = configureStore({
  reducer: {
    cart: cartReducer, // Make sure this matches how you're accessing the cart items
  },
});

export default store;



