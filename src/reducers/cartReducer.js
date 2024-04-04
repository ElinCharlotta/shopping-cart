import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingProduct = state.find(product => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push(action.payload);
      }
    },
    increaseQuantity(state, action) {
      state.map(cartItem => {
        if (cartItem.id === action.payload) {
          cartItem.quantity++;
        }
        return cartItem;
      });
    },
    decreaseQuantity(state, action) {
      state.map(cartItem => {
        if (cartItem.id === action.payload) {
          cartItem.quantity--;
        }
        return cartItem;
      });
    },
    removeProduct(state,action){
      const newCart = state.filter((cartItem)=> {
        if (cartItem.id === action.payload) {
          return cartItem
        }
      });
    }
  }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
