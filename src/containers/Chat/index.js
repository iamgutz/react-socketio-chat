/* global window */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSessionUsername } from '../../App/session/selectors';
import socket, { SOCKET_EMIT_TYPES } from '../../App/socket';
import { signOff } from '../Login/actions';
import { initContainer, exitContainer, updateMessages } from './actions';
import ChatMessageBox from './components/ChatMessageBox';
import ChatMessages from './components/ChatMessages';

const Chat = ({
  sessionUsername,
  onSignOff,
  onEnter,
  onExit,
  onUpdateMessages,
}) => {
  const beforeUnload = () => {
    window.addEventListener('beforeunload', () => {
      onExit();
    });
  };

  const subscribeToMessages = () => {
    socket.on(SOCKET_EMIT_TYPES.CHAT_MESSAGE, message => {
      onUpdateMessages(message);
    });
  };

  const unsubscribeToMessages = () => {
    socket.off(SOCKET_EMIT_TYPES.CHAT_MESSAGE);
  };

  useEffect(() => {
    onEnter();
    beforeUnload();
    subscribeToMessages();

    return () => {
      unsubscribeToMessages();
    };
  }, []);

  return (
    <>
      <button type="button" onClick={onSignOff}>
        <span>Sign Out</span>
      </button>
      <h1>{`Welcome ${sessionUsername}`}</h1>
      <ChatMessageBox />
      <ChatMessages />
    </>
  );
};

Chat.propTypes = {
  sessionUsername: PropTypes.string.isRequired,
  onSignOff: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
  onUpdateMessages: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sessionUsername: getSessionUsername(state),
});

const mapDispatchToProps = {
  onSignOff: signOff,
  onEnter: initContainer,
  onExit: exitContainer,
  onUpdateMessages: updateMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);