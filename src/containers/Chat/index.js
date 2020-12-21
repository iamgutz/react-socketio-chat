import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import socket, { SOCKET_EMIT_TYPES } from 'App/socket';
import { initContainer, exitContainer, updateMessages } from './actions';
import ChatMessageBox from './components/ChatMessageBox';
import ChatMessages from './components/ChatMessages';
import TopNav from './components/TopNav';

const ChatWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Chat = ({
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
      <TopNav />
      <ChatWrap>
        <ChatMessages />
        <ChatMessageBox />
      </ChatWrap>
    </>
  );
};

Chat.propTypes = {
  onEnter: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
  onUpdateMessages: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onEnter: initContainer,
  onExit: exitContainer,
  onUpdateMessages: updateMessages,
};

export default connect(null, mapDispatchToProps)(Chat);