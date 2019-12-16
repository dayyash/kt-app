import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { getClientWatcher } from './sagas';
import appReducer from './reducers/appReducer';

const sagaMiddleware = createSagaMiddleware();

export const appStore = createStore(appReducer, compose(applyMiddleware(sagaMiddleware)));

// sagaMiddleware.run(getClientWatcher);