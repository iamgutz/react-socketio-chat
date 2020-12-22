import React from 'react';
import PropTypes from 'prop-types';
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md';
import { RadioButtonWrap } from './styles';

const RadioButton = ({
  checked,
  label,
  onChange,
  ...restProps
}) => {
  const Radio = checked ? MdRadioButtonChecked : MdRadioButtonUnchecked;
  const handleOnChange = ({ target }) => {
    const { value } = target;
    onChange(value);
  };
  return (
    <RadioButtonWrap {...restProps}>
      <input type="radio" onChange={handleOnChange} checked={checked} />
      <Radio />
      {label && (
        <label>{label}</label>
      )}
    </RadioButtonWrap>
  );
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

RadioButton.defaultProps = {
  checked: false,
  label: null,
  onChange() {},
};

export default RadioButton;