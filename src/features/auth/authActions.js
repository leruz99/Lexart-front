export const LOGIN_REQUEST = 'auth/loginRequest';
export const LOGIN_SUCCESS = 'auth/loginSuccess';
export const LOGIN_FAILURE = 'auth/loginFailure';


export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});


export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});


