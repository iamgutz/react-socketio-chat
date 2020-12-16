import {
  put, all, takeEvery, select,
} from 'redux-saga/effects';
import { setSession } from 'App/session/actions';
import {
  signInError, signInSuccess, signOffError, signOffSuccess,
} from './actions';
import { ACTIONS } from './constants';
import { clearSession } from '../../App/session/actions';
import { getSessionUsername } from '../../App/session/selectors';
import { chatConnect, chatDisconnect } from '../Chat/actions';

function* signInWatcher({ data }) {
  const { username } = data;

  if (!username) {
    yield put(signInError('Enter a valid username'));
    return;
  }

  yield put(chatConnect(username, signInSuccess, signInError));
}

function* signInSuccessWatcher({ payload }) {
  const { result: { username, id } } = payload;
  yield put(setSession({
    id,
    username,
    authenticated: true,
  }));
}

function* signOffWatcher() {
  const sessionUsername = yield select(getSessionUsername);
  yield put(chatDisconnect(sessionUsername, signOffSuccess, signOffError));
  yield put(clearSession());
}

function* signOffSuccessWatcher() {
  
}

export default function* loginSagas() {
  yield all([
    takeEvery(ACTIONS.SIGN_IN, signInWatcher),
    takeEvery(ACTIONS.SIGN_IN_SUCCESS, signInSuccessWatcher),
    takeEvery(ACTIONS.SIGN_OFF, signOffWatcher),
    takeEvery(ACTIONS.SIGN_OFF_SUCCESS, signOffSuccessWatcher),
  ]);
}