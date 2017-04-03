import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createOfflineStore } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
import defaultState from './defaultState';
import rootReducer from '../reducers';


const logger = createLogger();

export default function configureStore(initialState = defaultState) {
  return createOfflineStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      logger
    ),
    offlineConfig
  );
}
