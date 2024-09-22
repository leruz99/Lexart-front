import { all, fork } from 'redux-saga/effects';
import authSaga from './authSaga'; 
import productSaga  from './productSaga';
import saveProducSagat from './saveProductSaga';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(productSaga), fork(saveProducSagat)]);
}
