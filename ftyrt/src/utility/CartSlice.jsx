import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Ensure this matches how you're accessing the cart items
  },
  reducers: {
    addCart: (state, action) => {
      state.items.push(action.payload); // Ensure payload structure matches
    },
    removeCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


















// import { createSlice }  from  "@reduxjs/toolkit";
// const cartSlice=createSlice({
//   name:'cart',
//   initialState:{
//     cart:[]
//   },reducers:{

//   }
// })
// export default cartSlice.reducer;
// export const {}=cartSlice.actions;