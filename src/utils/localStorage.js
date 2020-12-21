import _isEmpty from 'lodash/isEmpty';

export const getFromLocalStorage = key => {
  if (_isEmpty(key)) {
    return undefined;
  }
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveToLocalStorage = (state, key) => {
  if (_isEmpty(key)) {
    return;
  }
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    // ignore write errors
  }
};