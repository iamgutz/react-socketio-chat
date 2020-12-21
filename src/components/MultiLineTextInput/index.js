import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import { usePrevious } from 'utils/react';
import { MultiLineTextInputWrap } from './styles';

const MultiLineTextInput = ({
  onChange,
  value,
  rowsMin,
  rowsMax,
  ...restProps
}) => {
  const [textAreaProps, setTextAreaProps] = useState({
    rows: rowsMin,
    minRows: rowsMin,
    maxRows: rowsMax,
  });

  const prevValue = usePrevious(value);

  const handleOnChange = e => {
    const { target } = e;
    const { minRows, maxRows } = textAreaProps;
    const lineHeight = 22;
    const prevRows = target.rows;
    target.rows = minRows;
    const currentRows = Math.ceil(target.scrollHeight / lineHeight);

    if (currentRows === prevRows) {
      target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      target.rows = maxRows;
      target.scrollTop = target.scrollHeight;
    }

    setTextAreaProps({
      ...textAreaProps,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });

    onChange(target.value);
  };

  useEffect(() => {
    if (!_isEmpty(prevValue) && _isEmpty(value)) {
      setTextAreaProps({
        ...textAreaProps,
        rows: rowsMin,
      });
    }
  }, [value]);

  return (
    <MultiLineTextInputWrap>
      <textarea
        {...restProps}
        value={value}
        rows={textAreaProps.rows}
        onChange={handleOnChange}
      />
    </MultiLineTextInputWrap>
  );
};

MultiLineTextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  rowsMin: PropTypes.number,
  rowsMax: PropTypes.number,
};

MultiLineTextInput.defaultProps = {
  value: '',
  rowsMin: 1,
  rowsMax: 10,
};

export default MultiLineTextInput;