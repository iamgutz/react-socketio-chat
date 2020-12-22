import { createAction } from 'redux-create-action';
import { ACTIONS } from './constants';

export const signIn = createAction(ACTIONS.SIGN_IN, 'data');
export const signInSuccess = createAction(ACTIONS.SIGN_IN_SUCCESS, 'payload');
export const signInError = createAction(ACTIONS.SIGN_IN_ERROR, 'errorMessage', 'error');
export const signOff = createAction(ACTIONS.SIGN_OFF);
export const signOffSuccess = createAction(ACTIONS.SIGN_OFF_SUCCESS, 'payload');
export const signOffError = createAction(ACTIONS.SIGN_OFF_ERROR, 'errorMessage', 'error');
export const validateUsername = createAction(ACTIONS.VALIDATE_USERNAME, 'username', 'successActionCallback', 'errorActionCallback');