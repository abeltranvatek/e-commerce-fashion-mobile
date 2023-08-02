import {legacy_createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
