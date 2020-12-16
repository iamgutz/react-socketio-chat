import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import _throttle from 'lodash/throttle';
import persistedState, { updatePersistedState } from './persistedState';
import reducers from './reducers';
import sagas from './sagas';
import { DEV_MODE } from './config';

export const browserHistory = createBrowserHistory();
const rootReducer = reducers(browserHistory);
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  sagaMiddleware,
];

const store = configureStore({
  devTools: DEV_MODE,
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware,
});

store.subscribe(
  _throttle(() => updatePersistedState(store.getState()), 1000),
);

sagaMiddleware.run(sagas, store.dispatch).toPromise().catch(e => {
  if (DEV_MODE) {
    // eslint-disable-next-line no-console
    console.error({ message: e.message, source: 'sagaError', stacktrace: e.sagaStack });
  }
});

export default store;