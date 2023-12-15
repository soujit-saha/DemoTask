import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import DataReducer from './reducer/DataReducer';
//@ts-ignore
import {logger} from 'redux-logger';
import RootSaga from './reduxSaga/RootSaga';
import AuthReducer from './reducer/AuthReducer';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

export default configureStore({
  reducer: {
    DataReducer: DataReducer,
    AuthReducer: AuthReducer,
  },
  middleware,
});

sagaMiddleware.run(RootSaga);
