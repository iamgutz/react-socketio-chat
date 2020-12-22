import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _map from 'lodash/map';
import { getSessionUsername } from 'App/session/selectors';
import { getClockFormat } from 'App/settings/selectors';
import Bubble, { bubbleColors } from 'components/Bubble';
import backgroundPattern from 'assets/svg/background-pattern.svg';
import { getMessages } from '../../selectors';
import { ChatMessagesWrap, ChatMessagesRow, Background } from './styles';
import { formatTime, messageSenderIsSessionUser } from './helpers';

const ChatMessages = ({
  messages,
  setChatScrollElemRef,
  sessionUsername,
  clockFormat,
}) => (
  <ChatMessagesRow>
    <Background image={backgroundPattern} />
    <ChatMessagesWrap
      ref={setChatScrollElemRef}
      className="custom-scrollbar"
    >
      {_map(messages, message => {
        const senderIsSessionUser = messageSenderIsSessionUser(sessionUsername, message.username);
        return (
          <Bubble
            key={`${message.userId}-${message.timeStamp}`}
            right={senderIsSessionUser}
            color={senderIsSessionUser ? bubbleColors.primary : bubbleColors.default}
            text={message.text}
            sender={senderIsSessionUser ? null : message.username}
            time={formatTime(message.timeStamp, clockFormat)}
          />
        );
      })}
    </ChatMessagesWrap>
  </ChatMessagesRow>
);

ChatMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setChatScrollElemRef: PropTypes.func.isRequired,
  sessionUsername: PropTypes.string.isRequired,
  clockFormat: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  messages: getMessages(state),
  sessionUsername: getSessionUsername(state),
  clockFormat: getClockFormat(state),
});

export default connect(mapStateToProps)(ChatMessages);