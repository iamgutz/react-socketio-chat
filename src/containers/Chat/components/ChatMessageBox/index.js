import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MdSend } from 'react-icons/md';
import { getMessageSubmitControls } from 'App/settings/selectors';
import { MESSAGE_SUBMIT_CONTROLS } from 'App/settings/constants';
import TextArea from 'components/MultiLineTextInput';
import IconButton from 'components/IconButton';
import { submitMessage } from '../../actions';
import { getIsSendingMessage } from '../../selectors';
import { ChatMessageBoxWrap } from './styles';
import { useCtrlEnterSubmit, useEnterSubmit } from './helpers';

const ChatMessageBox = ({
  onSubmitMessage,
  isSendingMessage,
  messageSubmitControls,
  onMessageSent,
}) => {
  const [messageText, setMessageText] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();
    if (!messageText) {
      return;
    }
    onSubmitMessage(messageText);
    setMessageText('');
    onMessageSent();
  };

  const handleOnInputChange = value => {
    setMessageText(value);
  };

  const handleOnEnterPress = e => {
    const submitControlValidation = messageSubmitControls === MESSAGE_SUBMIT_CONTROLS.SPECIAL
      ? useCtrlEnterSubmit
      : useEnterSubmit;

    if (submitControlValidation(e)) {
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
  onMessageSent: PropTypes.func,
  messageSubmitControls: PropTypes.string.isRequired,
};

ChatMessageBox.defaultProps = {
  onMessageSent() {},
};

const mapStateToProps = state => ({
  isSendingMessage: getIsSendingMessage(state),
  messageSubmitControls: getMessageSubmitControls(state),
});

const mapDispatchToProps = {
  onSubmitMessage: submitMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessageBox);