import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewareList = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
	middlewareList.push(createLogger());
}

const str = createStore(reducers, applyMiddleware(...middlewareList));

sagaMiddleware.run(sagas);
export const store = str;
