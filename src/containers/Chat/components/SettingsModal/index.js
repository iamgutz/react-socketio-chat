import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _map from 'lodash/map';
import { getClockFormat, getMessageSubmitControls } from 'App/settings/selectors';
import { resetSettings, setClockFormat, setMessageSubmitControls } from 'App/settings/actions';
import RadioButton from 'components/RadioButton';
import Modal, { ModalBody, ModalFooter, ModalTitle } from 'components/Modal';
import { ResetButton, SettingsRow, SettingsWrap } from './styles';
import { CLOCK_DISPLAY_OPTIONS, SEND_MESSAGE_OPTIONS } from './constants';

const SettingsModal = ({
  showSettingsModal,
  setShowSettingsModal,
  clockFormat,
  messageSubmitControls,
  onSetClockFormat,
  onSetMessageSubmitControls,
  onResetSettings,
}) => {
  const handleOnReset = () => {
    onResetSettings();
    setShowSettingsModal(false);
  };

  if (!showSettingsModal) {
    return null;
  }

  return (
    <Modal onClose={() => setShowSettingsModal(false)}>
      <ModalTitle onClose={() => setShowSettingsModal(false)}>
        <h3>Settings</h3>
      </ModalTitle>
      <ModalBody>
        <SettingsWrap>
          <SettingsRow>
            <h5>Clock Display</h5>
            <div>
              {_map(CLOCK_DISPLAY_OPTIONS, option => (
                <RadioButton
                  key={option.id}
                  label={option.label}
                  checked={clockFormat === option.id}
                  onChange={() => onSetClockFormat(option.id)}
                />
              ))}
            </div>
          </SettingsRow>
          <SettingsRow>
            <h5>Send messages on Ctrl/Cmd + Enter</h5>
            <div>
              {_map(SEND_MESSAGE_OPTIONS, option => (
                <RadioButton
                  key={option.id}
                  label={option.label}
                  checked={messageSubmitControls === option.id}
                  onChange={() => onSetMessageSubmitControls(option.id)}
                />
              ))}
            </div>
          </SettingsRow>
        </SettingsWrap>
      </ModalBody>
      <ModalFooter>
        <ResetButton onClick={handleOnReset}>
          <span>Reset to default</span>
        </ResetButton>
      </ModalFooter>
    </Modal>
  );
};

SettingsModal.propTypes = {
  showSettingsModal: PropTypes.bool.isRequired,
  setShowSettingsModal: PropTypes.func.isRequired,
  clockFormat: PropTypes.string.isRequired,
  messageSubmitControls: PropTypes.string.isRequired,
  onSetClockFormat: PropTypes.func.isRequired,
  onSetMessageSubmitControls: PropTypes.func.isRequired,
  onResetSettings: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  clockFormat: getClockFormat(state),
  messageSubmitControls: getMessageSubmitControls(state),
});

const mapDispatchToProps = {
  onSetClockFormat: setClockFormat,
  onSetMessageSubmitControls: setMessageSubmitControls,
  onResetSettings: resetSettings,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal);