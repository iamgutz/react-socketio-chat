import { createAction } from 'redux-create-action';
import { ACTIONS } from './constants';

export const setSettings = createAction(ACTIONS.SET_SETTINGS, 'settings');
export const setClockFormat = createAction(ACTIONS.SET_CLOCK_FORMAT, 'clockFormat');
export const setMessageSubmitControls = createAction(ACTIONS.SET_MESSAGE_SUBMIT_CONTROLS, 'messageSubmitControls');
export const resetSettings = createAction(ACTIONS.RESET_STATE);
