import React from 'react';
import PropTypes from 'prop-types';
import { IconButtonWrap } from './styles';

const IconButton = ({
  icon,
  ...restProps
}) => {
  const Icon = icon || (<i />);
  return (
    <IconButtonWrap {...restProps}>
      <Icon />
    </IconButtonWrap>
  );
};

IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
};

export default IconButton;