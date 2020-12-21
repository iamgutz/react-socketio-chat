import _map from 'lodash/map';
import _compact from 'lodash/compact';
import _isEqual from 'lodash/isEqual';
import _isEmpty from 'lodash/isEmpty';
import { getFromLocalStorage, saveToLocalStorage } from 'utils/localStorage';

export const filterHandlersUndefinedActionTypes = handlers => {
  let index = 0;
  const list = _compact(_map(handlers, (handler, key) => {
    let obj = null;
    if (key === 'undefined') {
      obj = {
        key,
        handler,
        index,
      };
    }
    index += 1;
    return obj;
  }));
  return list;
};

export const createLocalStorageReducer = (reducer, key) => {
  if (typeof localStorage !== 'object' || localStorage === null) {
    return reducer;
  }

  return (state, action) => {
    const storedState = getFromLocalStorage(key);
    const expectedState = {
      ...state,
      ...storedState,
    };

    let reducerState = _isEqual(state, expectedState) ? state : expectedState;

    if (typeof state === 'undefined') {
      const defaultState = reducer(undefined, {});
      reducerState = {
        ...defaultState,
        ...storedState,
      };
    }

    const newState = reducer(reducerState, action);

    if ((typeof storeState === 'undefined' || reducerState !== newState) && !_isEmpty(key)) {
      saveToLocalStorage(newState, key);
    }

    return newState;
  };
};