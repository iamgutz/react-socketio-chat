import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import socket, { SOCKET_EMIT_TYPES } from 'App/socket';
import manSocialNetworking from 'assets/svg/man-social-networking.svg';
import { initContainer, exitContainer, updateMessages } from './actions';
import ChatMessageBox from './components/ChatMessageBox';
import ChatMessages from './components/ChatMessages';
import TopNav from './components/TopNav';
import { ChatContainer } from './styles';
import { getMessages } from './selectors';
import SettingsModal from './components/SettingsModal';

const Chat = ({
  onEnter,
  onExit,
  onUpdateMessages,
  messages,
}) => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const chatScrollElemRef = useRef();

  const setChatScrollElemRef = node => {
    chatScrollElemRef.current = node;
  };

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

  useEffect(() => {
    // scroll down when new message was sent/received
    if (messages.length) {
      chatScrollElemRef.current.scrollTop = chatScrollElemRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <ChatContainer backgroundImage={manSocialNetworking}>
        <TopNav onSettings={setShowSettingsModal} />
        <ChatMessages
          setChatScrollElemRef={setChatScrollElemRef}
        />
        <ChatMessageBox />
      </ChatContainer>
      <SettingsModal
        showSettingsModal={showSettingsModal}
        setShowSettingsModal={setShowSettingsModal}
      />
    </>
  );
};

Chat.propTypes = {
  onEnter: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
  onUpdateMessages: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = state => ({
  messages: getMessages(state),
});

const mapDispatchToProps = {
  onEnter: initContainer,
  onExit: exitContainer,
  onUpdateMessages: updateMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);