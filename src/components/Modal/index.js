import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ModalDialog, ModalOverlay, ModalFooter, ModalBody,
} from './styles';
import ModalTitle from './ModalTitle';

const Modal = ({
  onClose,
  children,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <ModalDialog
        visible={visible}
      >
        {children}
      </ModalDialog>
      <ModalOverlay
        visible={visible}
        onClick={() => onClose()}
      />
    </>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
export {
  ModalTitle,
  ModalFooter,
  ModalBody,
};