import {all} from 'redux-saga/effects';
import DataSaga from './DataSaga';
import AuthSaga from './AuthSaga';

const combinedSaga = [...AuthSaga, ...DataSaga];

export default function* RootSaga() {
  yield all(combinedSaga);
}
