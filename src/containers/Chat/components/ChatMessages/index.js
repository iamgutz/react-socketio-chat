import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _map from 'lodash/map';
import { getMessages } from '../../selectors';
import { ChatMessagesContainer } from './styles';

const ChatMessages = ({
  messages,
}) => (
  <ChatMessagesContainer>
    {_map(messages, message => (
      <div key={`${message.userId}-${message.timeStamp}`} className="message-item">
        {message.text}
      </div>
    ))}
  </ChatMessagesContainer>
);

ChatMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = state => ({
  messages: getMessages(state),
});

export default connect(mapStateToProps)(ChatMessages);