import _get from 'lodash/get';

export const getSettingsState = state => state.settings;
export const getClockFormat = state => _get(getSettingsState(state), 'clockFormat');
export const getMessageSubmitControls = state => _get(getSettingsState(state), 'messageSubmitControls');
