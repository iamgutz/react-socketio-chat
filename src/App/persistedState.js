import { getFromLocalStorage, saveToLocalStorage } from 'utils/localStorage';
import { getSessionState } from './session/selectors';

export const APP_LOCAL_STORAGE_KEY = 'rsioc:app';

const persistedState = getFromLocalStorage(APP_LOCAL_STORAGE_KEY);

export const updatePersistedState = state => saveToLocalStorage({
  session: getSessionState(state),
}, APP_LOCAL_STORAGE_KEY);

export default persistedState;
