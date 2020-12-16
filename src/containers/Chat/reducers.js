import { createReducer } from 'redux-create-reducer';
import { ACTIONS } from './constants';

const INITIAL_STATE = {
  messages: [],
  isSendingMessage: false,
  sendMessageError: null,
};

const setSendMessage = state => ({
  ...state,
  isSendingMessage: true,
  sendMessageError: INITIAL_STATE.sendMessageError,
});

const setSendMessageSuccess = state => ({
  ...state,
  isSendingMessage: INITIAL_STATE.isSendingMessage,
});

const setSendMessageError = (state, { errorMessage }) => ({
  ...state,
  isSendingMessage: INITIAL_STATE.isSendingMessage,
  sendMessageError: errorMessage,
});

const setUpdateMessages = (state, { message }) => ({
  ...state,
  messages: [...state.messages, message],
});

const handlers = {
  [ACTIONS.SEND_MESSAGE]: setSendMessage,
  [ACTIONS.SEND_MESSAGE_SUCCESS]: setSendMessageSuccess,
  [ACTIONS.SEND_MESSAGE_ERROR]: setSendMessageError,
  [ACTIONS.UPDATE_MESSAGES]: setUpdateMessages,
};

export default createReducer(INITIAL_STATE, handlers);
