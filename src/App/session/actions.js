import { createAction } from 'redux-create-action';
import { ACTIONS } from './constants';

export const setSession = createAction(ACTIONS.SET_SESSION, 'payload');
export const clearSession = createAction(ACTIONS.CLEAR_SESSION);
