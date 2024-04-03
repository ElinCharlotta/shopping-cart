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
        //** Här ska du kolla om produkten redan finns i arrayen och ifall den finns ska du inte pusha in i array:en utan istället öka egenskapen "quantity" med 1. Ifall produkten inte finns ska du pusha in produkten i array:en. Kolla i Product.jsx hur objektet för en produkt ser ut, där ser du egenskapen "quantity". */

      }
    },
    //* Här ska du lägga till två reducers "increaseQuantity" och "decreaseQuantity" som ökar eller minska "quantity" med 1. Ifall quantity är 1 och man minska ska produkten tas bort från array:en. Det är dessa två som kopplas till knapparna i CartItem.jsx, se kommentarer där. */

    increaseQuantity(state, action) {
      const product = state.find(product => product.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const productFound = state.findIndex(product => product.id === action.payload.id);
      if (productFound !== -1) {
        const product = state[productFound];
        if (product.quantity === 1) {
          state.splice(productFound, 1); // Remove product if quantity is 1
        } else {
          product.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
