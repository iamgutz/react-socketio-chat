import { createReducer } from 'redux-create-reducer';
import _get from 'lodash/get';
import { APP_LOCAL_STORAGE_KEY } from 'App/persistedState';
import { getFromLocalStorage } from 'utils/localStorage';
import { createLocalStorageReducer } from 'utils/redux';
import {
  ACTIONS, CLOCK_FORMATS, MESSAGE_SUBMIT_CONTROLS, SETTINGS_LOCAL_STORAGE_KEY,
} from './constants';

export const INITIAL_STATE = {
  clockFormat: CLOCK_FORMATS.STANDARD,
  messageSubmitControls: MESSAGE_SUBMIT_CONTROLS.NORMAL,
};

const updateSettings = (state, { settings }) => ({
  ...INITIAL_STATE,
  ...settings,
});

const updateClockFormat = (state, { clockFormat }) => ({
  ...state,
  clockFormat,
});

const updateMessageSubmitControls = (state, { messageSubmitControls }) => ({
  ...state,
  messageSubmitControls,
});

const resetState = () => ({
  ...INITIAL_STATE,
});

export const handlers = {
  [ACTIONS.SET_SETTINGS]: updateSettings,
  [ACTIONS.SET_CLOCK_FORMAT]: updateClockFormat,
  [ACTIONS.SET_MESSAGE_SUBMIT_CONTROLS]: updateMessageSubmitControls,
  [ACTIONS.RESET_STATE]: resetState,
};

const settingsReducers = (state = {}, action) => {
  const storedSessionUserName = _get(getFromLocalStorage(APP_LOCAL_STORAGE_KEY), 'session.username');

  return createLocalStorageReducer(
    createReducer(INITIAL_STATE, handlers),
    SETTINGS_LOCAL_STORAGE_KEY(storedSessionUserName),
  )(state, action);
};

export default settingsReducers;
