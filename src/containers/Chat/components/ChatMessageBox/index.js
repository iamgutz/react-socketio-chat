import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submitMessage } from '../../actions';
import { getIsSendingMessage } from '../../selectors';

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

  const handleOnInputChange = ({ target }) => {
    const { value } = target;
    setMessageText(value);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={messageText} onChange={handleOnInputChange} />
      <button type="submit" disabled={isSendingMessage}>
        <span>Send</span>
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  isSendingMessage: getIsSendingMessage(state),
});

const mapDispatchToProps = {
  onSubmitMessage: submitMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessageBox);