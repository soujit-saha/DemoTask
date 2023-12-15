import {call, put, select, takeLatest} from 'redux-saga/effects';
import showAlert from '../../utils/helpers/Toast';
import {fetchFeedFailure, fetchFeedSuccess} from '../reducer/DataReducer';
import {getApi} from '../../utils/helpers/ApiRequest';
import {AxiosResponse} from 'axios';

export function* fetchFeedSaga() {
  const Header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response: AxiosResponse = yield call(getApi, 'products', Header);
    console.log('response', response);
    if (response?.status == 200) {
      yield put(fetchFeedSuccess(response.data));
      showAlert('Product Fetch Successfully');
    } else {
      yield put(fetchFeedFailure(response));
      showAlert('Product Fetch Falier');
    }
  } catch (error) {
    yield put(fetchFeedFailure(error));
    console.log('error', error);
    showAlert('Product Fetch Falier');
  }
}

const watchFunction = [
  (function* () {
    yield takeLatest('Data/fetchFeedRequest', fetchFeedSaga);
  })(),
];

export default watchFunction;
