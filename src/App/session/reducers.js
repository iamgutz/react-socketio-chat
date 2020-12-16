import { createReducer } from 'redux-create-reducer';
import { ACTIONS } from './constants';

const INITIAL_STATE = {
  authenticated: false,
  username: null,
  id: null,
};

const setLoggedIn = (state, { payload }) => ({
  ...state,
  ...payload,
});

const setLoggedOut = () => ({
  ...INITIAL_STATE,
});

const handlers = {
  [ACTIONS.SET_SESSION]: setLoggedIn,
  [ACTIONS.CLEAR_SESSION]: setLoggedOut,
};

export default createReducer(INITIAL_STATE, handlers);
