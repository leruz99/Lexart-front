import { call, put, takeLatest,select } from 'redux-saga/effects';
import axios from 'axios';
import {
  saveProductRequest,
  saveProductSuccess,
  saveProductFailure,
} from '../features/product/productSlice';
import config from '../config';
import { SAVE_PRODUCT_REQUEST } from '../features/product/productActions';

const getToken = (state) => state.auth.token;

function* saveProductSaga(action) {
  try {

    const token = yield select(getToken);
    const response = yield call(axios.post, `${config.API_URL}/products`, action.payload, {
        headers: {
            'Accept': 'application/json', 
            'Authorization': `Bearer ${token}`,
        },
    });
    yield put(saveProductSuccess(response.data)); 
    window.alert('Producto guardado correctamente');
  } catch (error) {
    yield put(saveProductFailure(error.response?.data.message || error.message));
  }
}

export function* saveProducSagat() {
  yield takeLatest(SAVE_PRODUCT_REQUEST, saveProductSaga);
}

export default saveProducSagat;
