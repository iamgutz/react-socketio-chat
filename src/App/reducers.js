import { combineReducers } from 'redux';
import { ACTIONS } from 'containers/Login/constants';
import loginReducers from 'containers/Login/reducers';
import chatReducers from 'containers/Chat/reducers';
import sessionReducer from './session/reducers';

const appReducers = () => combineReducers({
  session: sessionReducer,
  login: loginReducers,
  chat: chatReducers,
});

const reducers = browserHistory => (state, action) => {
  // to reset the entire store when logout
  let storeState = state;
  if (action.type === ACTIONS.SIGN_OFF_SUCCESS) {
    storeState = undefined;
  }
  return appReducers(browserHistory)(storeState, action);
};

export default reducers;
