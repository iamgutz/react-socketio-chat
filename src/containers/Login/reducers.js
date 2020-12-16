import { createReducer } from 'redux-create-reducer';
import { ACTIONS } from './constants';

export const INITIAL_STATE = {
  isSigningIn: false,
  isSigningOut: false,
  signInError: null,
  signOutError: null,
};

const setSignIn = state => ({
  ...state,
  isSigningIn: true,
  signInError: INITIAL_STATE.signInError,
});

const setSignInSuccess = () => ({
  ...INITIAL_STATE,
});

const setSignInError = (state, { errorMessage }) => ({
  ...state,
  isSigningIn: INITIAL_STATE.isSigningIn,
  signInError: errorMessage,
});

const setSignOut = state => ({
  ...state,
  isSigningOut: true,
});

const setLogOutSuccess = () => ({
  ...INITIAL_STATE,
});

const setSignOutError = (state, { errorMessage }) => ({
  ...state,
  isSigningOut: INITIAL_STATE.isSigningIn,
  signInError: errorMessage,
});

export const handlers = {
  [ACTIONS.SIGN_IN]: setSignIn,
  [ACTIONS.SIGN_IN_SUCCESS]: setSignInSuccess,
  [ACTIONS.SIGN_IN_ERROR]: setSignInError,
  [ACTIONS.SIGN_OFF]: setSignOut,
  [ACTIONS.SIGN_OFF_SUCCESS]: setLogOutSuccess,
  [ACTIONS.SIGN_OFF_ERROR]: setSignOutError,
};

export default createReducer(INITIAL_STATE, handlers);
