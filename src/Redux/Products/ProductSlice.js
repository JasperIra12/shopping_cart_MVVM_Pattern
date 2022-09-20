import { createSlice, } from '@reduxjs/toolkit';

const initialState = {
  productCart: []
};

const product = createSlice({
  name: 'product-cart',
  initialState,
  reducers: {

    saveCart: (state, action) => {
      state.productCart = action.payload;
    },
    addQty: (state, action) => {
      const data = state.productCart.find((item) => item.id === action.payload);

      if (data) {
        const updateQty = state.productCart.map((item) =>
          item.id === action.payload
            ? {
              ...item,
              qty: item.qty + 1
            }
            : item
        );
        state.productCart = updateQty
      }
    },

    ReduceQty: (state, action) => {
      const data = state.productCart.find((item) => item.id === action.payload);
      if (data) {
        const updateQty = state.productCart.map((item) =>
          item.id === action.payload
            ? {
              ...item,
              qty: item.qty - 1
            }
            : item
        );
        state.productCart = updateQty
      }
    },
  },

});

export const { saveCart, addQty, ReduceQty } =
  product.actions;

export default product.reducer;


