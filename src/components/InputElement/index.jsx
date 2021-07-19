import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputElement.module.css';

const InputElement = ({
  type,
  value,
  placeholder,
  onChangeHandler,
  required,
}) => (
  <input
    className={styles.item}
    type={type}
    value={value}
    placeholder={placeholder}
    required={required}
    onChange={(e) => onChangeHandler(e.target.value)}
  />
);

InputElement.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

InputElement.defaultProps = {
  required: false,
};

export default InputElement;
