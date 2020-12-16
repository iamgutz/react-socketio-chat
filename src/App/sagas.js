import {
  all, call, fork, takeEvery,
} from 'redux-saga/effects';
import loginSagas from 'containers/Login/sagas';
import chatSagas from 'containers/Chat/sagas';
import { ACTIONS } from './constants';
import socket from './socket';

function* initAppWatcher() {
  yield call([socket, socket.on], 'connect', () => {
    // eslint-disable-next-line no-console
    console.log('socket.io client connected!');
  });
}

export default function* sagas(...args) {
  yield all([
    takeEvery(ACTIONS.INIT_APP, initAppWatcher),
    fork(loginSagas, ...args),
    fork(chatSagas, ...args),
  ]);
}
