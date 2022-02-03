import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { restcountriesReducer } from './HomeInfo';
import { weathersReducer } from './Detail';

const reducers = combineReducers({
  restcountriesReducer,
  weathersReducer,
});
const middlewares = [thunk, logger];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
