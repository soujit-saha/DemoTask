import AsyncStorage from '@react-native-async-storage/async-storage';
import {call, put, takeLatest} from 'redux-saga/effects';
import showAlert from '../../utils/helpers/Toast';
import {
  isLogedinFailure,
  isLogedinSuccess,
  loginFailure,
} from '../reducer/AuthReducer';
import constants from '../../utils/helpers/constants';
import {AxiosResponse} from 'axios';

//login check Saga
export function* islogedinSaga() {
  try {
    const response: AxiosResponse = yield call(
      AsyncStorage?.getItem,
      constants?.WHICHCREADS,
    );
    console.log(response);
    if (response != null) {
      yield put(isLogedinSuccess(response));
    } else {
      yield put(isLogedinSuccess(null));
    }
  } catch (error) {
    yield put(isLogedinFailure(error));
  }
}

//login saga
export function* loginSaga(action: any) {
  try {
    yield call(
      AsyncStorage.setItem,
      constants.WHICHCREADS,
      JSON.stringify({
        email: action?.payload?.creads?.email ?? '',
        password: action?.payload?.creads?.password ?? '',
      }),
    );
    yield put(isLogedinSuccess(''));
    showAlert('Login Successful');
  } catch (error) {
    console.log(error);
    yield put(loginFailure(error));
  }
}

const watchFunction = [
  (function* () {
    yield takeLatest('Auth/isLogedinRequest', islogedinSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/loginRequest', loginSaga);
  })(),
];

export default watchFunction;
