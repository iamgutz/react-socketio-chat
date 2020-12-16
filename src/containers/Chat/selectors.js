import _get from 'lodash/get';

const getState = state => state.chat;
export const getMessages = state => _get(getState(state), 'messages');
export const getIsSendingMessage = state => _get(getState(state), 'isSendingMessage');
export const getSendMessageError = state => _get(getState(state), 'sendMessageError');
