import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { loginFailure, loginSuccess } from '../features/auth/authSlice';
import { LOGIN_REQUEST } from '../features/auth/authActions'; 
import config from '../config';

function* loginSaga(action) {
  try {
    const response = yield call(axios.post, `${config.API_URL}/api/users/authenticate`, action.payload);
    const token = response.data.body.token;

    localStorage.setItem('token', token);

    yield put(loginSuccess(token));

    window.location.href = '/productos';
  } catch (error) {
    yield put(loginFailure(error.response.data.message || 'Error en el inicio de sesión'))
  }
}

function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

export default authSaga;
