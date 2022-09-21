import { createSlice, } from '@reduxjs/toolkit';
import PropTypes from 'prop-types'

type ProductTypes = {
  id:number,
  prodName:string,
  qty:number
}

const initialState = {
  productCart: [] as any
};

const product = createSlice({
  name: 'product-cart',
  initialState,
  reducers: {

    saveCart: (state, action) => {
      state.productCart = action.payload;
    },
    addQty: (state, action) => {
      const data = state.productCart.find((item:ProductTypes ) => item.id === action.payload);

      if (data) {
        const updateQty = state.productCart.map((item:ProductTypes) =>
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
      const data = state.productCart.find((item: { id: any; }) => item.id === action.payload);
      if (data) {
        const updateQty = state.productCart.map((item: { id: any; qty: number; }) =>
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


