import {
  put, all, takeEvery, select, call,
} from 'redux-saga/effects';
import { setSession } from 'App/session/actions';
import { socketEmit, SOCKET_EMIT_ERROR, SOCKET_EMIT_TYPES } from 'App/socket';
import {
  signInError, signInSuccess, signOffError, signOffSuccess, validateUsername,
} from './actions';
import { ACTIONS } from './constants';
import { clearSession } from '../../App/session/actions';
import { getSessionUsername } from '../../App/session/selectors';
import { chatDisconnect } from '../Chat/actions';

function* validateUsernameWatcher({ username, successActionCallback, errorActionCallback }) {
  const response = yield call(socketEmit, SOCKET_EMIT_TYPES.VALIDATE_USERNAME, { username });
  const { error } = response;

  if (error) {
    if (errorActionCallback) {
      yield put(errorActionCallback(error));
    }
    // eslint-disable-next-line no-console
    console.log(`${SOCKET_EMIT_ERROR(SOCKET_EMIT_TYPES.VALIDATE_USERNAME)}: `, error);
    return;
  }

  if (successActionCallback) {
    yield put(successActionCallback(response));
  }
}

function* signInWatcher({ data }) {
  const { username } = data;

  if (!username) {
    yield put(signInError('Enter a valid username'));
    return;
  }

  yield put(validateUsername(username, signInSuccess, signInError));
}

function* signInSuccessWatcher({ payload }) {
  const { result: { username } } = payload;
  yield put(setSession({
    username,
    authenticated: true,
  }));
}

function* signOffWatcher() {
  const sessionUsername = yield select(getSessionUsername);
  yield put(chatDisconnect(sessionUsername, signOffSuccess, signOffError));
  yield put(clearSession());
}

export default function* loginSagas() {
  yield all([
    takeEvery(ACTIONS.SIGN_IN, signInWatcher),
    takeEvery(ACTIONS.SIGN_IN_SUCCESS, signInSuccessWatcher),
    takeEvery(ACTIONS.SIGN_OFF, signOffWatcher),
    takeEvery(ACTIONS.VALIDATE_USERNAME, validateUsernameWatcher),
  ]);
}