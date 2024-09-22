export const FETCH_PRODUCTS_REQUEST = 'product/fetchProductsRequest';
export const FETCH_PRODUCTS_SUCCESS = 'product/fetchProductsSuccess';
export const FETCH_PRODUCTS_FAILURE = 'product/fetchProductsFailure';
export const SAVE_PRODUCT_REQUEST = 'product/saveProductRequest';
export const SAVE_PRODUCT_SUCCESS = 'product/saveProductSuccess';
export const SAVE_PRODUCT_FAILURE = 'product/saveProductFailure';

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const saveProductRequest = (product) => ({
    type: SAVE_PRODUCT_REQUEST,
    payload: product,
  });
  
  export const saveProductSuccess = (product) => ({
    type: SAVE_PRODUCT_SUCCESS,
    payload: product,
  });
  
  export const saveProductFailure = (error) => ({
    type: SAVE_PRODUCT_FAILURE,
    payload: error,
  });
