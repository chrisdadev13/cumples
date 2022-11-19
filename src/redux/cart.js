import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemCart) itemCart.quantity++;
      else state.cart.push({ ...action.payload, quantity: 1 });
    },
  },
});

export const cartReducer = cart.reducer;
export const { addToCart } = cart.actions;
