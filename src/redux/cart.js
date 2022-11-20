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
    incrementQuantity: (state, action) => {
      const itemCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemCart) itemCart.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemCart)
        if (itemCart.quantity < 1) state.cart.pop({ ...action.payload });
        else itemCart.quantity--;
    },
  },
});

export const cartReducer = cart.reducer;
export const { addToCart, incrementQuantity, decrementQuantity } = cart.actions;
