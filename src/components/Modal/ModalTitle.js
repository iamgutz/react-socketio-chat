import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import IconButton from 'components/IconButton';
import { ModalTop } from './styles';

const ModalTitle = ({
  onClose,
  children,
}) => (
  <ModalTop>
    <div>{children}</div>
    {onClose && (
    <IconButton
      onClick={onClose}
      icon={MdClose}
    />
    )}
  </ModalTop>
);

ModalTitle.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ModalTitle.defaultProps = {
  onClose: null,
};

export default ModalTitle;