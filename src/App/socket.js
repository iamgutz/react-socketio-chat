import io from 'socket.io-client';

export const SOCKET_EMIT_TYPES = {
  JOIN: 'join',
  LEAVE: 'leave',
  CHAT_MESSAGE: 'chat_message',
  VALIDATE_USERNAME: 'validate_username',
};

export const SOCKET_EMIT_ERROR = emitType => `socket.io client ${emitType} error`;

const socket = io();

export default socket;

export const socketEmit = async (emitType, params) => new Promise(resolve => {
  socket.emit(emitType, params, response => {
    resolve(response);
  });
});