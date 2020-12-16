import _get from 'lodash/get';

export const getSessionState = state => state.session;
export const getSessionAuthenticated = state => _get(getSessionState(state), 'authenticated');
export const getSessionUsername = state => _get(getSessionState(state), 'username');
