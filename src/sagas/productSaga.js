import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import {fetchProductsRequest, fetchProductsSuccess,fetchProductsFailure,} from '../features/product/productActions';
import { FETCH_PRODUCTS_REQUEST } from '../features/product/productActions';
import config from '../config';


const getToken = (state) => state.auth.token;

function* fetchProductsSaga() {
  try {
    const token = yield select(getToken);
    const response = yield call(axios.get, `${config.API_URL}/products`, {
      headers: {
        'Accept': 'application/json', 
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log(response);
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    console.error('Error', error);
    yield put(fetchProductsFailure(error.response?.data.message || error.message));
  }
}


export function* productSaga() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}

export default productSaga;
