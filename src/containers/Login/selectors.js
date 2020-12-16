import _get from 'lodash/get';

const getState = state => state.login;
export const getIsSigningIn = state => _get(getState(state), 'isSigningIn');
export const getSignInError = state => _get(getState(state), 'signInError');
export const getIsSigningOut = state => _get(getState(state), 'isSigningOut');
export const getSignOutError = state => _get(getState(state), 'signOutError');
