import io from 'socket.io-client';

export const SOCKET_EMIT_TYPES = {
  JOIN: 'join',
  LEAVE: 'leave',
  CHAT_MESSAGE: 'chat_message',
};

export const SOCKET_EMIT_ERROR = emitType => `socket.io client ${emitType} error`;

const socket = io();

export default socket;