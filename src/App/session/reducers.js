import { createReducer } from 'redux-create-reducer';
import { ACTIONS } from './constants';

export const INITIAL_STATE = {
  authenticated: false,
  username: null,
};

const setLoggedIn = (state, { payload }) => ({
  ...state,
  ...payload,
});

const setLoggedOut = () => ({
  ...INITIAL_STATE,
});

export const handlers = {
  [ACTIONS.SET_SESSION]: setLoggedIn,
  [ACTIONS.CLEAR_SESSION]: setLoggedOut,
};

export default createReducer(INITIAL_STATE, handlers);
