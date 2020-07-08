// @flow
import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducers from './reducers';

import apiMiddleware from './middleware/apiMiddleWare';

const rootReducer = combineReducers({
  ...reducers,
});

export default createStore(rootReducer, applyMiddleware(apiMiddleware));
