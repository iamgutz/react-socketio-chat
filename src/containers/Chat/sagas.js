import {
  put, all, takeEvery, call, select,
} from 'redux-saga/effects';
import { SOCKET_EMIT_TYPES, SOCKET_EMIT_ERROR, socketEmit } from 'App/socket';
import { getSessionUsername } from 'App/session/selectors';
import { SETTINGS_LOCAL_STORAGE_KEY } from 'App/settings/constants';
import { getFromLocalStorage } from 'utils/localStorage';
import { setSettings } from 'App/settings/actions';
import {
  chatConnect, chatDisconnect, sendMessage, sendMessageError, sendMessageSuccess,
} from './actions';
import { ACTIONS } from './constants';

function* initContainerWatcher() {
  const sessionUsername = yield select(getSessionUsername);
  yield put(chatConnect(sessionUsername));
  const storedState = getFromLocalStorage(SETTINGS_LOCAL_STORAGE_KEY(sessionUsername));
  yield put(setSettings(storedState));
}

function* exitContainerWatcher() {
  const sessionUsername = yield select(getSessionUsername);
  yield put(chatDisconnect(sessionUsername));
}

function* chatConnectWatcher({ username, successActionCallback, errorActionCallback }) {
  const response = yield call(socketEmit, SOCKET_EMIT_TYPES.JOIN, { username });
  const { error } = response;

  if (error) {
    if (errorActionCallback) {
      yield put(errorActionCallback(error));
    }
    // eslint-disable-next-line no-console
    console.log(`${SOCKET_EMIT_ERROR(SOCKET_EMIT_TYPES.JOIN)}: `, error);
    return;
  }

  if (successActionCallback) {
    yield put(successActionCallback(response));
  }
}

function* chatDisconnectWatcher({ username, successActionCallback, errorActionCallback }) {
  const response = yield call(socketEmit, SOCKET_EMIT_TYPES.LEAVE, { username });
  const { error } = response;

  if (error) {
    if (errorActionCallback) {
      yield put(errorActionCallback(error));
    }
    // eslint-disable-next-line no-console
    console.log(`${SOCKET_EMIT_ERROR(SOCKET_EMIT_TYPES.LEAVE)}: `, error);
    return;
  }

  if (successActionCallback) {
    yield put(successActionCallback(response));
  }
}

function* submitMessageWatcher({ message }) {
  const sessionUsername = yield select(getSessionUsername);
  yield put(sendMessage(message, sessionUsername, sendMessageSuccess, sendMessageError));
}

function* sendMessageWatcher({
  message, username, successActionCallback, errorActionCallback,
}) {
  const response = yield call(socketEmit, SOCKET_EMIT_TYPES.CHAT_MESSAGE, { message, username });
  const { error } = response;

  if (error) {
    if (errorActionCallback) {
      yield put(errorActionCallback(error));
    }
    // eslint-disable-next-line no-console
    console.log(`${SOCKET_EMIT_ERROR(SOCKET_EMIT_TYPES.CHAT_MESSAGE)}: `, error);
    return;
  }

  if (successActionCallback) {
    yield put(successActionCallback(response));
  }
}

export default function* chatSagas() {
  yield all([
    takeEvery(ACTIONS.INIT_CONTAINER, initContainerWatcher),
    takeEvery(ACTIONS.EXIT_CONTAINER, exitContainerWatcher),
    takeEvery(ACTIONS.CHAT_CONNECT, chatConnectWatcher),
    takeEvery(ACTIONS.CHAT_DISCONNECT, chatDisconnectWatcher),
    takeEvery(ACTIONS.SUBMIT_MESSAGE, submitMessageWatcher),
    takeEvery(ACTIONS.SEND_MESSAGE, sendMessageWatcher),
  ]);
}