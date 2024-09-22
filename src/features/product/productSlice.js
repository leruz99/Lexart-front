import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    saveProductRequest(state) {
        state.loading = true;
        state.error = null;
      },
      saveProductSuccess(state, action) {
        state.loading = false;
        state.products.push(action.payload); 
      },
      saveProductFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
  },
});

export const {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    saveProductRequest,
    saveProductSuccess,
    saveProductFailure,
  } = productSlice.actions;

export default productSlice.reducer;
