import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _map from 'lodash/map';
import Bubble from 'components/Bubble';
import { getMessages } from '../../selectors';
import { ChatMessagesWrap, ChatMessagesRow } from './styles';

const ChatMessages = ({
  messages,
  setChatScrollElemRef,
}) => (
  <ChatMessagesRow ref={setChatScrollElemRef}>
    <ChatMessagesWrap>
      {_map(messages, message => (
        <Bubble
          key={`${message.userId}-${message.timeStamp}`}
          text={message.text}
        />
      ))}
    </ChatMessagesWrap>
  </ChatMessagesRow>
);

ChatMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setChatScrollElemRef: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  messages: getMessages(state),
});

export default connect(mapStateToProps)(ChatMessages);