import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MdSend } from 'react-icons/md';
import TextArea from 'components/MultiLineTextInput';
import IconButton from 'components/IconButton';
import { submitMessage } from '../../actions';
import { getIsSendingMessage } from '../../selectors';
import { ChatMessageBoxWrap } from './styles';

const ChatMessageBox = ({
  onSubmitMessage,
  isSendingMessage,
}) => {
  const [messageText, setMessageText] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();
    if (!messageText) {
      return;
    }
    onSubmitMessage(messageText);
    setMessageText('');
  };

  const handleOnInputChange = value => {
    setMessageText(value);
  };

  const handleOnEnterPress = e => {
    if ((e.key === 'Enter' && e.metaKey) || (e.key === 'Enter' && e.ctrlKey)) {
      handleOnSubmit(e);
    }
  };

  return (
    <ChatMessageBoxWrap>
      <TextArea
        value={messageText}
        onChange={handleOnInputChange}
        onKeyDown={handleOnEnterPress}
        placeholder="Type a message"
      />
      <IconButton
        disabled={isSendingMessage}
        isLoading={isSendingMessage}
        icon={MdSend}
      />
    </ChatMessageBoxWrap>
  );
};

ChatMessageBox.propTypes = {
  onSubmitMessage: PropTypes.func.isRequired,
  isSendingMessage: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isSendingMessage: getIsSendingMessage(state),
});

const mapDispatchToProps = {
  onSubmitMessage: submitMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessageBox);