import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import appReady from './enhancers/appReady';

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk, appReady),
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
