import { createAction } from 'redux-create-action';
import { ACTIONS } from './constants';

export const initContainer = createAction(ACTIONS.INIT_CONTAINER);
export const exitContainer = createAction(ACTIONS.EXIT_CONTAINER);
export const chatConnect = createAction(ACTIONS.CHAT_CONNECT, 'username', 'successActionCallback', 'errorActionCallback');
export const chatDisconnect = createAction(ACTIONS.CHAT_DISCONNECT, 'username', 'successActionCallback', 'errorActionCallback');
export const submitMessage = createAction(ACTIONS.SUBMIT_MESSAGE, 'message');
export const sendMessage = createAction(ACTIONS.SEND_MESSAGE, 'message', 'username', 'successActionCallback', 'errorActionCallback');
export const sendMessageSuccess = createAction(ACTIONS.SEND_MESSAGE_SUCCESS, 'payload');
export const sendMessageError = createAction(ACTIONS.SEND_MESSAGE_ERROR, 'errorMessage', 'error');
export const updateMessages = createAction(ACTIONS.UPDATE_MESSAGES, 'message');
