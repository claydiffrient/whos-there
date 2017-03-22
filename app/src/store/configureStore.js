import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import defaultState from './defaultState';
import rootReducer from '../reducers';

const logger = createLogger();

export default function configureStore(initialState = defaultState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      logger
    )
  );
};
