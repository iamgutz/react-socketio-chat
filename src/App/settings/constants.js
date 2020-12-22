import _isEmpty from 'lodash/isEmpty';
import { APP_LOCAL_STORAGE_KEY } from 'App/persistedState';

export const ACTIONS = {
  SET_SETTINGS: 'SETTINGS__SET_SETTINGS',
  SET_CLOCK_FORMAT: 'SETTINGS__SET_CLOCK_FORMAT',
  SET_MESSAGE_SUBMIT_CONTROLS: 'SETTINGS__SET_MESSAGE_SUBMIT_CONTROLS',
  RESET_STATE: 'SETTINGS__RESET_STATE',
};

export const CLOCK_FORMATS = {
  STANDARD: 'standard',
  MILITARY: 'military',
};

export const MESSAGE_SUBMIT_CONTROLS = {
  NORMAL: 'normal',
  SPECIAL: 'special',
};

export const SETTINGS_LOCAL_STORAGE_KEY = username => {
  if (_isEmpty(username)) {
    return undefined;
  }
  return `${APP_LOCAL_STORAGE_KEY}:chat_settings:${username}`;
};